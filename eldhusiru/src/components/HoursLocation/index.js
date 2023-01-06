import React from 'react';
import { useTranslation } from 'react-i18next';
import grandiMathollUti from '../../resources/grandi-matholl-uti.jpeg';

const HoursLocation = () => {

    const { t } = useTranslation();
    
    return (
        <div id="Opnunartimi&Stadsetning" className="flex flex-col md:flex-row justify-start max-w-none md:max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-5 md:pt-0">
                <h2 className="text-center">{t('opening-header')}</h2>
                <p className="mt-1 mb-20">{t('opening-text-days')}<span className="tab"></span>{t('opening-text-hours')}</p>

                <h2 className="text-center">{t('location-header')}</h2>
                <p className="mt-1">{t('location-text')}</p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center pt-5">
                <img className="w-full h-auto object-cover rounded-3xl md:max-w-[35rem] max-w-[24rem]" src={grandiMathollUti} alt="Matholl Granda Uti"/>
                {/* <div className='w-11/12 border-2 border-black-500 rounded-3xl mb-6 h-56'>
                </div> */}
            </div>
        </div>
    );
};

export default HoursLocation;