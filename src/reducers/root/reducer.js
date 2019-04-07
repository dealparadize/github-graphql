
import {
    SET_ERROR,
    SET_TOKEN,
    SET_REPOS_FILTERED,
    SET_REPOS,
    SET_PROFILE
} from '../../constants/actionType'

let initialState = {
    error: null,
    token: null,
    reposFiltered: null,
    repos: null,
    profile: null
}

let rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.payload }
        case SET_TOKEN:
            return { ...state, token: action.payload }
        case SET_REPOS_FILTERED:
            return { ...state, reposFiltered: action.payload }
        case SET_REPOS:
            return { ...state, repos: action.payload }
        case SET_PROFILE:
            return { ...state, profile: action.payload }
        default:
            return state;
    }
}

export {
    rootReducer
}