import { post } from '../../lib/api'
import { oAuthConfig, env, uri } from '../../config/config'
import { query } from '../../lib/graphql'
import gql from 'graphql-tag';
import {
    SET_ERROR,
    SET_TOKEN,
    SET_REPOS_FILTERED,
    SET_REPOS,
    SET_PROFILE
} from '../../constants/actionType'


let fetchToken = (code) => {
    return async (dispatch, getState) => {
        try {
            let corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
            let _url = `${corsAnywhere}${uri}/login/oauth/access_token?client_id=${oAuthConfig.client_id}&client_secret=${oAuthConfig.client_secret}&code=${code}`
            let { access_token } = await post({ _url })
            if (access_token) {
                localStorage.setItem('token', access_token)
                dispatch({ type: SET_TOKEN, payload: access_token })
            }
        } catch (error) {
            localStorage.removeItem('token')
            dispatch({ type: SET_ERROR, payload: error })
        }
    }
}

let getToken = () => {
    return async (dispatch, getState) => {
        let token = localStorage.getItem('token')
        dispatch({ type: SET_TOKEN, payload: token })
    }
}

let removeToken = () => {
    return async (dispatch, getState) => {
        localStorage.removeItem('token')
        dispatch({ type: SET_TOKEN, payload: null })
    }
}

let filterRepositories = (filter) => {
    return async (dispatch, getState) => {
        if (!filter) {
            dispatch({ type: SET_REPOS_FILTERED, payload: null })
        } else {
            let { root: { repos } } = getState()
            let filtered = [...repos]
            let regex = new RegExp(filter, 'i')
            filtered = filtered.filter(repo => repo.name.match(regex))
            dispatch({ type: SET_REPOS_FILTERED, payload: filtered })
        }
    }
}

let fectchRepositories = () => {
    return async (dispatch, getState) => {
        let GET_REPOS = gql`
            {
                viewer {
                    repositories(first: 100, ownerAffiliations: OWNER) {
                        totalCount
                        nodes {
                            name
                            description
                            createdAt
                            url
                            isPrivate
                        }
                    }
                }
            }
        `;
        let { data: { viewer: { repositories: { nodes } } } } = await query(GET_REPOS)
        dispatch({ type: SET_REPOS, payload: nodes })
    }
}

let fetchProfile = () => {
    return async (dispatch, getState) => {
        let GET_PROFILE = gql`
            {
                viewer {
                    login
                    name
                    avatarUrl
                }
            }
        `;
        let { data: { viewer } } = await query(GET_PROFILE)
        dispatch({ type: SET_PROFILE, payload: viewer })
    }

}

export {
    fetchToken,
    getToken,
    removeToken,
    filterRepositories,
    fectchRepositories,
    fetchProfile
}