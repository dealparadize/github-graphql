import React from 'react'
import { useTranslation } from "react-i18next";

const Search = ({ onChange }) => {
    let { t } = useTranslation()

    return (
        <form className="card mt-5 mx-5">
            <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                    <i className="fas fa-search h4 text-body"></i>
                </div>
                <div className="col">
                    <input className="form-control form-control-lg form-control-borderless" type="search" onChange={onChange} onSubmit={onChange} placeholder={t('SEARCH_REPOS')} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-lg btn-success" type="submit">{t('SEARCH')}</button>
                </div>
            </div>
        </form>
    )
}

export {
    Search
}