import React from 'react'
import './Navigation.css'
import { useTranslation } from 'react-i18next'

const Navigation = (props) => {
    const [t, i18n] = useTranslation('common')

    return (
        <div className="topnav">
            <button className="btn active" onClick={props.showLiveEvent()}>
                {t('Navigation.Live')}
            </button>
            <button className="btn" onClick={props.showUpcomingEvent()}>
                {t('Navigation.Upcoming')}
            </button>
            <button className="btn" onClick={props.showPastEvent()}>
                {t('Navigation.Past')}
            </button>
            <hr />
        </div>
    )
}

export default Navigation
