import React from 'react'
import { FaGithubSquare, FaGlobeAmericas } from 'react-icons/fa';
import './Nav.css'
import { useTranslation } from "react-i18next";

const Nav = ({ logOut, profile, changeLang }) => {
    let { t } = useTranslation()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="navbar-brand" href="/">
                <FaGithubSquare />
                {t('MY_GITHUB')}
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">{profile && profile.name}</a>
                    </li>
                    <li className="nav-item"></li>
                    <li className="nav-item">
                        <img src={profile && profile.avatarUrl} className="rounded-circle mt-2" alt="" />
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <FaGlobeAmericas />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" onClick={(e)=>changeLang('es')} onSubmit={e => e.preventDefault()}>ES</a>
                            <a className="dropdown-item" onClick={()=>changeLang('en')} onSubmit={e => e.preventDefault()}>EN</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={logOut}>{t('LOGOUT')}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export {
    Nav
}