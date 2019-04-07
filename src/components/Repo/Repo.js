import React from 'react'
import { useTranslation } from "react-i18next";

const Repo = ({ repos }) => {
    let { t } = useTranslation()

    return (

        repos && repos.map(repo => {
            return (
                <div className="card mt-5 mx-5" key={repo.name}>
                    <h5 className="card-header">{repo.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{repo.isPrivate ? t('PRIVATE') : t('PUBLIC')}</h5>
                        <p className="card-text">{repo.description}</p>
                        <a href={repo.url} className="btn btn-primary">{t('VIEW_REPOSITORY')}</a>
                    </div>
                </div>
            )
        })
    )
}

export {
    Repo
}