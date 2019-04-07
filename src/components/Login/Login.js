import React, { Component } from 'react'
import './Login.css'
import { FaGithubSquare } from 'react-icons/fa';
import { oAuthConfig, uri } from '../../config/config'
import { fetchToken } from '../../actions/root/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

let handleClick = (e) => {
    e.preventDefault()
    window.location = `${uri}/login/oauth/authorize?client_id=${oAuthConfig.client_id}`
}

class Login extends Component {

    render() {
        let params = new URLSearchParams(this.props.location && this.props.location.search)
        let code = params.get('code')

        if (code && !this.props.token) {
            this.props.fetchToken(code)
            return <div>Loading...</div>
        }

        return (
            <div>
                <div className="card bg-dark text-white text-center mt-5 mx-5">
                    <h5 className="card-header">LOGIN</h5>
                    <div className="card-body">
                        <p className="card-text"></p>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>
                            <FaGithubSquare />
                            Login
                        </button>
                    </div>
                </div>
            </div>
            // <div className="container d-flex h-100 justify-content-center align-items-center">
            //     <div className="d-flex justify-content-center align-items-center Login-Card">
            //         <div className="">
            // <button type="button" className="btn btn-primary" onClick={handleClick}>
            //     <FaGithubSquare />
            //     Login
            // </button>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        root: state.root,
        token: state.root.token
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);