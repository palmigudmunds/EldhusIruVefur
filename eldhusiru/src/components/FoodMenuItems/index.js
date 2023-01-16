import React from 'react';
import { useTranslation } from 'react-i18next';

import friedRiceNoodles from '../../resources/eldhusiru-friedricenoodles-new.jpeg';
import friedNoodles from '../../resources/eldhusiru-friednoodles-new.jpeg';
import friedRice from '../../resources/eldhusiru-friedrice-new.jpeg';
import noodleSoup from '../../resources/eldhusiru-noodlesoup-new.jpeg';
import chickenSatay from '../../resources/eldhusiru-chickensatay-new.jpeg';



const FoodMenuItems = () => {

    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-start max-w-screen-xl mx-auto relative z-10">
            <h2 className="text-start pl-3 md:pl-0 mb-6 md:mb-10">{t('menu-dishes-header')}</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className='flex flex-row items-center w-full max-[407px]:h-56 border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-dish-1')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-shrimp')}</p>
                                    <p className='menu-item-price'>2.490 kr.</p>
                                </div>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-chicken')}</p>
                                    <p className='menu-item-price'>2.390 kr.</p>
                                </div>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-veg')}</p>
                                    <p className='menu-item-price'>1.990 kr.</p>
                                </div>
                            </div>
                        </div>
                        <p className='menu-item-description absolute inset-x-0 bottom-0'>{t('menu-dish-1-ingredients')}</p>
                    </div>
                    <img className="h-auto md:max-w-[7rem] max-w-[5rem] rounded-3xl md:rounded-3xl ml-3 md:ml-5 my-5" src={friedRice} alt="Fried rice"/>
                </div>

                <div className='flex flex-row items-center w-full max-[407px]:h-56 border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-dish-2')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-shrimp')}</p>
                                    <p className='menu-item-price'>2.590 kr.</p>
                                </div>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-chicken')}</p>
                                    <p className='menu-item-price'>2.490 kr.</p>
                                </div>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-veg')}</p>
                                    <p className='menu-item-price'>2.090 kr.</p>
                                </div>
                            </div>
                        </div>
                        <p className='menu-item-description absolute inset-x-0 bottom-0'>{t('menu-dish-2-ingredients')}</p>
                    </div>
                    <img className="h-auto md:max-w-[7rem] max-w-[5rem] rounded-3xl md:rounded-3xl ml-3 md:ml-5 my-5" src={friedNoodles} alt="Fried egg noodles"/>
                </div>

                <div className='flex flex-row items-center w-full max-[407px]:h-56 border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-dish-3')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-shrimp')}</p>
                                    <p className='menu-item-price'>2.590 kr.</p>
                                </div>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-chicken')}</p>
                                    <p className='menu-item-price'>2.490 kr.</p>
                                </div>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-with-veg')}</p>
                                    <p className='menu-item-price'>2.090 kr.</p>
                                </div>
                            </div>
                        </div>
                        <p className='menu-item-description absolute inset-x-0 bottom-0'>{t('menu-dish-3-ingredients')}</p>
                    </div>
                    <img className="h-auto md:max-w-[7rem] max-w-[5rem] rounded-3xl md:rounded-3xl ml-3 md:ml-5 my-5" src={friedRiceNoodles} alt="Fried rice noodles"/>
                </div>

                <div className='flex flex-row items-center w-full max-[407px]:h-56 border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-dish-4')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-4-with')}</p>
                                    <p className='menu-item-price'>2.690 kr.</p>
                                </div>
                            </div>
                        </div>
                        <p className='menu-item-description absolute inset-x-0 bottom-0'>{t('menu-dish-4-ingredients')}</p>
                    </div>
                    <img className="h-auto md:max-w-[7rem] max-w-[5rem] rounded-3xl md:rounded-3xl ml-3 md:ml-5 my-5" src={chickenSatay} alt="Chicken Satay"/>
                </div>

                <div className='flex flex-row items-center w-full max-[407px]:h-56 border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-dish-5')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>{t('menu-dish-5-with')}</p>
                                    <p className='menu-item-price'>2.590 kr.</p>
                                </div>
                            </div>
                        </div>
                        <p className='menu-item-description absolute inset-x-0 bottom-0'>{t('menu-dish-5-ingredients')}</p>
                    </div>
                    <img className="h-auto md:max-w-[7rem] max-w-[5rem] rounded-3xl md:rounded-3xl ml-3 md:ml-5 my-5" src={noodleSoup} alt="Noodle soup"/>
                </div>

            </div>
            <h2 className="mt-6 md:mt-10 text-main text-start pl-3 md:pl-0 mb-6 md:mb-10">{t('menu-soda-header')}</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-cocacola')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>390 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-3 md:ml-5 md:mr-5 -my-2" src={"https://www.cocacola.is/content/dam/one/is/is/coca-cola/coca-cola.png"} alt="Coca-cola"/>
                </div>

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-cocacola-zero')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>390 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[6rem] max-h-[4rem] ml-3 mr-7 md:ml-5 md:mr-10" src={"https://www.coca-cola.se/content/dam/one/se/sv/products/coca-cola-zero-sugar-new-sept-22.png"} alt="Coca-cola Zero"/>
                </div>

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-fanta')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>390 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-3 md:ml-5 md:mr-5 -my-2 md:my-0" src={"https://www.cocacola.is/content/dam/one/is/is/fanta/fanta-an-sykurs.png"} alt="Fanta"/>
                </div>

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-sprite')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>390 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[6rem] max-h-[4rem] ml-3 mr-7 md:ml-5 md:mr-10" src={"https://www.coca-cola.se/content/dam/one/se/sv/products/sprite-zero-px1500.jpg"} alt="Sprite"/>
                </div>

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-toppur')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>390 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-3 md:ml-5 md:mr-5 -my-2" src={"https://www.cocacola.is/content/dam/one/is/is/toppur/toppur-anbragoefna.png"} alt="Coca-cola"/>
                </div>

            </div>

            <h2 className="mt-6 md:mt-10 text-main text-start pl-3 md:pl-0 mb-6 md:mb-10">{t('menu-juice-header')}</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-juice-orange')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>250 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-3 md:ml-5 md:mr-5" src={"https://www.cocacola.is/content/dam/one/is/is/svali/svali-appelsinu.png"} alt="Svali Appelsínu"/>
                </div>

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-juice-apple')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>250 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-3 md:ml-5 md:mr-5" src={"https://www.cocacola.is/content/dam/one/is/is/svali/svali-epla.png"} alt="Svali Epla"/>
                </div>

                <div className='flex flex-row items-center w-full min-h-fit border border-slate-200 rounded-3xl p-5 hover:bg-slate-100'>
                    <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                        <div className='absolute inset-x-0 top-0'>
                            <h5 className="menu-item-header">{t('menu-juice-strawberry')}</h5>
                            <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                                <div className=''>
                                    <p className='menu-item-price'>250 kr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-3 md:ml-5 md:mr-5" src={"https://www.cocacola.is/content/dam/one/is/is/svali/svali-jardaberja.png"} alt="Svali Jarðarberja"/>
                </div>

            </div>

        </div>
    );
};

export default FoodMenuItems;