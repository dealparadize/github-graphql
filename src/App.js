import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { getToken } from './actions/root/actions'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './i18n/es'
import en from './i18n/en'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });


class App extends Component {

  render() {
    i18n.changeLanguage('es')
    if (localStorage.getItem('token') && !this.props.token) this.props.getToken()
    // let { t } = useTranslation() 
    // console.log(t('LOGOUT'))
    return (
      <div className="App">
        <Router>
          {/* <Route exact path="/" component={Login} /> */}

          <Route exact path="/" render={() => {
            if (this.props.token) return <Redirect to="/home" />
            else return <Login />
          }} />

          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />

          <Route path="/login" render={() => {
            if (this.props.token) return <Redirect to="/home" />
          }} />

          <Route path="/home" render={() => {
            if (!this.props.token) return <Redirect to="/" />
          }} />

        </Router>
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    root: state.root,
    token: state.root.token
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
