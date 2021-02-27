import React from 'react';
import './Header.css';
import {useTranslation} from "react-i18next";

const Header = ({ text }) => {
    const [t, i18n] = useTranslation('common');
    return  <div className="header">
        <h2 className="text">{t('Heading')}</h2>
    </div>
}

export default Header;