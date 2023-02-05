import React from 'react';
import { useTranslation } from 'react-i18next';

import friedRiceNoodles from '../../resources/menu-images/rice-noodles.png';
import friedNoodles from '../../resources/menu-images/egg-noodles.png';
import friedRice from '../../resources/menu-images/fried-rice.png';
import noodleSoup from '../../resources/menu-images/noodle-soup.png';
import chickenSatay from '../../resources/menu-images/chicken-satay.png';
import FoodItemCard from '../FoodItemCard';
import DrinkItemCard from '../DrinkItemCard';



const FoodMenuItems = () => {

    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-start max-w-screen-xl mx-auto relative z-10">
            <h2 className="text-start pl-3 md:pl-0 mb-6 md:mb-10">{t('menu-dishes-header')}</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FoodItemCard 
                    name={t('menu-dish-1')} 
                    prices={[
                        {desc: t('menu-dish-with-shrimp'), price: '2.490 kr.'}, 
                        {desc: t('menu-dish-with-chicken'), price: '2.390 kr.'}, 
                        {desc: t('menu-dish-with-veg'), price: '1.990 kr.'}]} 
                    ingredients={t('menu-dish-1-ingredients')} 
                    image={friedRice} 
                    imageAlt="Fried rice"
                />
                <FoodItemCard 
                    name={t('menu-dish-2')} 
                    prices={[
                        {desc: t('menu-dish-with-shrimp'), price: '2.590 kr.'}, 
                        {desc: t('menu-dish-with-chicken'), price: '2.490 kr.'}, 
                        {desc: t('menu-dish-with-veg'), price: '2.090 kr.'}
                        ]} 
                    ingredients={t('menu-dish-2-ingredients')} 
                    image={friedNoodles} 
                    imageAlt="Fried egg noodles"
                />
                <FoodItemCard 
                    name={t('menu-dish-3')} 
                    prices={[
                        {desc: t('menu-dish-with-shrimp'), price: '2.590 kr.'}, 
                        {desc: t('menu-dish-with-chicken'), price: '2.490 kr.'}, 
                        {desc: t('menu-dish-with-veg'), price: '2.090 kr.'}
                        ]} 
                    ingredients={t('menu-dish-3-ingredients')} 
                    image={friedRiceNoodles} 
                    imageAlt="Fried rice noodles"
                />
                <FoodItemCard 
                    name={t('menu-dish-4')} 
                    prices={[
                        {desc: t('menu-dish-4-with'), price: '2.690 kr.'}
                        ]} 
                    ingredients={t('menu-dish-3-ingredients')} 
                    image={chickenSatay} 
                    imageAlt="Chicken Satay"
                />
                <FoodItemCard 
                    name={t('menu-dish-5')} 
                    prices={[
                        {desc: t('menu-dish-5-with'), price: '2.590 kr.'}
                        ]} 
                    ingredients={t('menu-dish-5-ingredients')} 
                    image={noodleSoup} 
                    imageAlt="Noodle soup"
                />
            </div>

            <h2 className="mt-6 md:mt-10 text-main text-start pl-3 md:pl-0 mb-6 md:mb-10">{t('menu-soda-header')}</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

                <DrinkItemCard 
                    name={t('menu-cocacola')}
                    price={"390 kr."}
                    image={<img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-8 md:ml-5 md:mr-5 -my-2" src={"https://www.cocacola.is/content/dam/one/is/is/coca-cola/coca-cola.png"} alt="Coca-cola"/>}
                />
                <DrinkItemCard 
                    name={t('menu-cocacola-zero')}
                    price={"390 kr."}
                    image={<img className="h-auto md:max-h-[6rem] max-h-[4rem] ml-3 mr-11 md:ml-5 md:mr-10" src={"https://www.coca-cola.se/content/dam/one/se/sv/products/coca-cola-zero-sugar-new-sept-22.png"} alt="Coca-cola Zero"/>}
                />
                <DrinkItemCard 
                    name={t('menu-fanta')}
                    price={"390 kr."}
                    image={<img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-8 md:ml-5 md:mr-5 -my-2 md:my-0" src={"https://www.cocacola.is/content/dam/one/is/is/fanta/fanta-an-sykurs.png"} alt="Fanta"/>}
                />
                <DrinkItemCard 
                    name={t('menu-sprite')}
                    price={"390 kr."}
                    image={<img className="h-auto md:max-h-[6rem] max-h-[4rem] ml-3 mr-12 md:ml-5 md:mr-10" src={"https://www.coca-cola.se/content/dam/one/se/sv/products/sprite-zero-px1500.jpg"} alt="Sprite"/>}
                />
                <DrinkItemCard 
                    name={t('menu-toppur')}
                    price={"390 kr."}
                    image={<img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-8 md:ml-5 md:mr-5 -my-2" src={"https://www.cocacola.is/content/dam/one/is/is/toppur/toppur-anbragoefna.png"} alt="Toppur"/>}
                />

            </div>

            <h2 className="mt-6 md:mt-10 text-main text-start pl-3 md:pl-0 mb-6 md:mb-10">{t('menu-juice-header')}</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <DrinkItemCard 
                    name={t('menu-juice-orange')}
                    price={"250 kr."}
                    image={<img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-8 md:ml-5 md:mr-5" src={"https://www.cocacola.is/content/dam/one/is/is/svali/svali-appelsinu.png"} alt="Svali Appelsínu"/>}
                />
                <DrinkItemCard 
                    name={t('menu-juice-apple')}
                    price={"250 kr."}
                    image={<img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-8 md:ml-5 md:mr-5" src={"https://www.cocacola.is/content/dam/one/is/is/svali/svali-epla.png"} alt="Svali Epla"/>}
                />
                <DrinkItemCard 
                    name={t('menu-juice-strawberry')}
                    price={"250 kr."}
                    image={<img className="h-auto md:max-h-[7rem] max-h-[5rem] ml-3 mr-8 md:ml-5 md:mr-5" src={"https://www.cocacola.is/content/dam/one/is/is/svali/svali-jardaberja.png"} alt="Svali Jarðarberja"/>}
                />
            </div>

        </div>
    );
};

export default FoodMenuItems;