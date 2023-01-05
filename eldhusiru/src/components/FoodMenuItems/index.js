import React from 'react';
import { useTranslation } from 'react-i18next';
import friedRice from '../../resources/fried-rice.jpeg';
import friedNoodles from '../../resources/fried-noodles.jpeg';
import friedRiceNoodles from '../../resources/fried-rice-noodles.jpeg';
import noodleSoup from '../../resources/noodle-soup.jpeg';
import chickenSatay from '../../resources/chicken-satay.jpeg';



const FoodMenuItems = () => {

    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto relative z-10">
            <div className="w-full md:w-4/6">
                <h3 className="text-2xl md:text-4xl text-center mb-10">{t('menu-dishes-header')}</h3>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-9 lg:mb-6'>
                    <img className="h-full max-w-md rounded-3xl mr-3 md:mr-5" src={friedRice} alt="friedRice"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">{t('menu-dish-1')}</h5>
                        <ul className='leaders'>
                            <li>
                                <span>{t('menu-dish-with-shrimp')}</span>
                                <span>2.490 kr.</span>
                            </li>
                            <li>
                                <span>{t('menu-dish-with-chicken')}</span>
                                <span>2.390 kr.</span>
                            </li>
                            <li>
                                <span>{t('menu-dish-with-veg')}</span>
                                <span>1.990 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-9 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-3 md:mr-5" src={friedNoodles} alt="friedNoodles"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">{t('menu-dish-2')}</h5>
                        <ul className='leaders'>
                            <li>
                                <span>{t('menu-dish-with-shrimp')}</span>
                                <span>2.590 kr.</span>
                            </li>
                            <li>
                                <span>{t('menu-dish-with-chicken')}</span>
                                <span>2.490 kr.</span>
                            </li>
                            <li>
                                <span>{t('menu-dish-with-veg')}</span>
                                <span>2.090 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-9 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-3 md:mr-5" src={friedRiceNoodles} alt="friedRiceNoodles"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">{t('menu-dish-3')}</h5>
                        <ul className='leaders'>
                            <li>
                                <span>{t('menu-dish-with-shrimp')}</span>
                                <span>2.590 kr.</span>
                            </li>
                            <li>
                                <span>{t('menu-dish-with-chicken')}</span>
                                <span>2.490 kr.</span>
                            </li>
                            <li>
                                <span>{t('menu-dish-with-veg')}</span>
                                <span>2.090 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-9 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-3 md:mr-5" src={chickenSatay} alt="chickenSatay"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">{t('menu-dish-4')}</h5>
                        <ul className='leaders'>
                            <li>
                                <span>{t('menu-dish-4-with')}</span>
                                <span>2.690 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-9 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-3 md:mr-5" src={noodleSoup} alt="noodleSoup"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">{t('menu-dish-5')}</h5>
                        <ul className='leaders'>
                            <li>
                                <span>{t('menu-dish-5-with')}</span>
                                <span>2.590 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-4/6 md:w-2/6 mt-12">
                <h3 className="text-2xl md:text-4xl text-center mb-10">{t('menu-drinks-header')}</h3>
                <div className='w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <div className="flex flex-col justify-center w-full">
                        <ul className='leaders'>
                            <li>
                                <span>{t('menu-soda')}</span>
                                <span>390 kr.</span>
                            </li>
                            <li>
                                <span>{t('menu-juice')}</span>
                                <span>250 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodMenuItems;