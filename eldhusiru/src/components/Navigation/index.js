import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';

import logo from '../../resources/eldhusiru-nav-logo-new.png';
import {ReactComponent as World} from '../../resources/world.svg';


const Navigation = () => {

    let activeClassName = 'text-main link max-md:hidden';

    const { t } = useTranslation();

    const { locale } = useContext(LocaleContext);

    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        console.log('scrolling')
        const currentScrollPos = window.scrollY

        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

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
        <nav className={`mx-auto inset-x-0 h-auto z-40 w-full py-4 md:py-8 text-xl bg-slate-50 transition-all duration-300 sticky ${visible ? 'top-0' : '-top-24'} md:fixed md:top-0`}>
            <div className='max-w-screen-2xl flex md:mx-auto justify-center px-6'>
                <NavLink to={`/`}>
                    <img className="w-40 lg:w-48 h-auto" src={logo} alt="Logo" />
                </NavLink>
                <div className='flex space-x-4 lg:space-x-10 justify-between items-center ml-auto'>
                    <NavLink to={`/menu`} 
                            className={({ isActive }) =>
                                isActive ? activeClassName : 'text-slate-900 link max-md:hidden'
                            }
                            >
                        {t('nav-menu')}
                    </NavLink>
                    <NavLink to={`/#UmOkkur`} className='link text-slate-900 max-md:hidden'>
                        {t('nav-about')}
                    </NavLink>
                    <NavLink to={`/#Opnunartimi&Stadsetning`}>
                        <button className='link text-slate-900 max-md:hidden'>{t('nav-hourslocation')}</button>
                    </NavLink>
                    <NavLink to={`/#HafaSamband`}>
                        <button className='link text-slate-900 max-md:hidden'>{t('nav-contact')}</button>
                    </NavLink>
                    <div className='flex items-center space-x-1 cursor-pointer text-slate-900 hover:text-main fill-slate-900 hover:fill-main duration-100 ease-in-out' onClick={() => changeLocale()}>
                        {/* <svg className="w-8 h-8 bg-black" src={world} alt="Languages"></svg> */}
                        {/* <img className="w-3.5 h-auto" src={world} alt="Languages"/> */}
                        <World className='-mb-0.5 lg:-mb-px w-3.5 h-auto'/>
                        <NavLink >
                            <button className='text-base lg:text-lg'>{t('language')}</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;