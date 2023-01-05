import React from 'react';
import { useTranslation } from 'react-i18next';


const FoodMenuHeader = () => {

    const { t } = useTranslation();
    
    return (
        <div className="px-6 md:px-0 flex flex-row justify-center max-w-none md:max-w-screen-xl mx-auto md:pt-0">
            <div className="md:pt-16">
                <h2 className="menu-header">{t('menu-header')}</h2>
            </div>
        </div>
    );
};

export default FoodMenuHeader;