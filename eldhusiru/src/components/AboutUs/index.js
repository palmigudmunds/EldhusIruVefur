import React from 'react';
import { useTranslation } from 'react-i18next';
import eigendur from '../../resources/eigendur.jpeg';
import grandiMathollInni from '../../resources/grandi-matholl-inni.jpeg';

const AboutUs = () => {

    const { t } = useTranslation();
    
    return (
        <div id="UmOkkur" className="flex flex-col-reverse md:flex-row justify-start max-w-none md:max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-5 md:pt-0">
                <img className="w-full h-auto object-cover rounded-3xl md:max-w-[35rem] max-w-[24rem] mb-5" src={eigendur} alt="Eigendur"/>
                {/* <div className='w-full md:w-11/12 border-2 border-black-500 rounded-3xl h-56 mb-6'>

                </div> */}
                <img className="w-full h-auto object-cover rounded-3xl md:max-w-[35rem] max-w-[24rem]" src={grandiMathollInni} alt="Matholl Granda Inni"/>
                {/* <div className='w-full md:w-11/12 border-2 border-black-500 rounded-3xl h-56'>

                </div> */}
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
                <h2 className="text-center">{t('aboutus-header')}</h2>
                <p className="pt-5 md:w-8/12">
                    {/* {t('aboutus-text')} */}
                    {t('aboutus-text1')}
                    <br></br><br></br>
                    {t('aboutus-text2')}
                    <br></br><br></br>
                    {t('aboutus-text3')}
                    <br></br><br></br>
                    {t('aboutus-text4')}
                    <br></br><br></br>
                    {t('aboutus-text5')}
                </p>
            </div>
        </div>
    );
};

export default AboutUs;