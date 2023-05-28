import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';
import logo from '../../resources/eldhusiru-nav-logo-new.png';
import Modal from '../Modal';
import {ReactComponent as World} from '../../resources/world.svg';


const Navigation = () => {

    const { t } = useTranslation();

    const { locale } = useContext(LocaleContext);

    const [showModal, setShowModal] = useState(false);

    // const [visible, setVisible] = useState(true)

    // const handleScroll = () => {
    //     const currentScrollPos = window.scrollY

    //     if(currentScrollPos > prevScrollPos){
    //         setVisible(false)
    //     }else{
    //         setVisible(true)
    //     }

    //     setPrevScrollPos(currentScrollPos)
    // }

    // useEffect( () => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll)
    // })

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
        <nav id="nav" className={`mx-auto inset-x-0 h-auto z-40 w-full max-w-none mx-auto py-4 md:py-8 bg-white text-xl transition-all duration-300 sticky top-0 md:fixed md:top-0`}>
            <div className='md:max-w-screen-xl flex md:mx-auto justify-center px-6 lg:px-0'>
                <NavLink to={`/`}>
                    <img className="w-32 md:w-36 lg:w-48 h-auto" src={logo} alt="Logo" />
                </NavLink>
                <div className='flex space-x-4 lg:space-x-10 justify-between items-center ml-auto'>
                    <NavLink to={`/#about-us`} className='link text-slate-900 max-md:hidden'>
                        {t('nav-about')}
                    </NavLink>
                    <NavLink to={`/#hours-location`} className='link text-slate-900 max-md:hidden'>
                        {t('nav-hourslocation')}
                    </NavLink>
                    <NavLink to={`/#contact-us`} className='link text-slate-900 max-md:hidden'>
                        {t('nav-contact')}
                    </NavLink>
                </div>
                <div className='flex space-x-4 justify-between items-center ml-auto'>
                    <button
                      className="nav-order-button"
                      type="button"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      {t("order-now-button")}
                    </button>
                    <div className='flex items-center space-x-1 cursor-pointer font-medium text-slate-900 hover:text-main fill-slate-900 hover:fill-main duration-100 ease-in-out' onClick={() => changeLocale()}>
                        {/* <svg className="w-8 h-8 bg-black" src={world} alt="Languages"></svg> */}
                        {/* <img className="w-3.5 h-auto" src={world} alt="Languages"/> */}
                        <World className='-mb-0.5 stroke-2 mb-px lg:mb-0 w-3.5 h-auto'/>
                        <NavLink className='text-base md:text-sm lg:text-lg font-normal'>
                            {t('language')}
                        </NavLink>
                    </div>
                </div>
                {showModal && <Modal setOpenModal={setShowModal} />}
            </div>
        </nav>
    );
};

export default Navigation;