import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import './style.scss';

const pages = [
    {name: 'home', to: '/'},
    {name: 'about', to: '/about'},
    {name: 'users', to: '/users'},
];

const options = [
    { value: 'en', label: 'EN' },
    { value: 'am', label: 'AM' },
]

const Header = () => {
    const [initialLanguage, setInitialLanguage] = useState(localStorage.getItem('language') || 'en');
    console.log('initialLanguage', initialLanguage);
    useEffect(() => {
        i18n.changeLanguage(initialLanguage);
    }, [initialLanguage])

    const { t } = useTranslation();

    const changeLanguage = (e) => {
        setInitialLanguage(e.value);
        localStorage.setItem('language', e.value);
        i18n.changeLanguage(e.value)
    };


    return (
        <div className='header'>
            <div className='content'>
                <div className='navBar'>
                    {pages.map(item => (
                        <NavLink to={item.to} key={item.to} className={({isActive}) => isActive ? 'activeNavLink' : 'navLink' }>
                            {t(item.name)}
                        </NavLink>
                    ))}
                </div>
                <div className='options'>
                    <Select options={options} value={options[0]} onChange={changeLanguage}/>
                </div>
            </div>
        </div>
    )
}
export default Header;