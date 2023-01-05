import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../resources/eldhusiru-nav-logo-new.png';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';


const Navigation = () => {

    let activeClassName = 'text-main link max-md:hidden';

    const { t } = useTranslation();

    const { locale } = useContext(LocaleContext);

    function changeLocale () {
        let l;
        if (locale === 'en') {
            l = 'is';
        } else {
            l = 'en';
        }
        if (locale !== l) {
          i18n.changeLanguage(l);
        }
    }

    return (
        <nav className='fixed top-0 mx-auto inset-x-0 h-auto z-40 w-full py-4 md:py-10 text-xl bg-slate-50'>
            <div className='max-w-screen-2xl flex md:mx-auto justify-center px-6'>
                <NavLink to={`/`}>
                    <img className="w-40 lg:w-56 h-auto" src={logo} alt="Logo" />
                </NavLink>
                <div className='flex space-x-4 lg:space-x-10 justify-between items-center ml-auto'>
                    <NavLink to={`/menu`} 
                            className={({ isActive }) =>
                                isActive ? activeClassName : 'link max-md:hidden'
                            }
                            >
                        {t('nav-menu')}
                    </NavLink>
                    <NavLink to={`/#UmOkkur`} className='link max-md:hidden'>
                        {t('nav-about')}
                    </NavLink>
                    <NavLink to={`/#Opnunartimi&Stadsetning`}>
                        <button className='link max-md:hidden'>{t('nav-hourslocation')}</button>
                    </NavLink>
                    <NavLink to={`/#HafaSamband`}>
                        <button className='link max-md:hidden'>{t('nav-contact')}</button>
                    </NavLink>
                    <NavLink >
                        <button className='link' onClick={() => changeLocale()}>{t('language')}</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;