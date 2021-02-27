import React from 'react';
import './SelectLanguage.css';
import {useTranslation} from "react-i18next";

const SelectLanguage = () => 
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <button className="btn lang" onClick={() => i18n.changeLanguage('de')}>German</button>
        <button className="btn lang" onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>

}
export default SelectLanguage;