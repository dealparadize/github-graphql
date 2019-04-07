import React, { Component } from 'react'
import './Home.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fectchRepositories, fetchProfile, filterRepositories, removeToken } from '../../actions/root/actions'
import { Nav } from '../Nav/Nav'
import { Repo } from '../Repo/Repo'
import { Search } from '../Search/Search'
import i18n from "i18next";

class Home extends Component {

    componentWillMount() {
        this.props.fectchRepositories()
        this.props.fetchProfile()
    }

    onChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        this.props.filterRepositories(value)
    }

    logOut = (e) => {
        e.preventDefault()
        this.props.removeToken()
    }

    changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    render() {
        let { profile } = this.props
        let { repos } = this.props
        let { reposFiltered } = this.props

        return (
            <div>
                <Nav profile={profile} logOut={this.logOut} changeLang={this.changeLang} />
                <Search onChange={this.onChange} />
                <Repo repos={reposFiltered || repos} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        root: state.root,
        token: state.root.token,
        profile: state.root.profile,
        repos: state.root.repos,
        reposFiltered: state.root.reposFiltered
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fectchRepositories, fetchProfile, filterRepositories, removeToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);