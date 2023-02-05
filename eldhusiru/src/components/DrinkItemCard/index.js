import React from 'react';

function DrinkItemCard({ name, price, image }) {

    return (
        <div className='flex flex-row items-center w-full h-36 bg-white rounded-3xl p-5 hover:shadow-md hover:cursor-pointer'>
            <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                <div className='absolute inset-x-0 top-0'>
                    <h5 className="menu-item-header">{name}</h5>
                    <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                        <div className=''>
                            <p className='menu-item-price'>{price}</p>
                        </div>
                    </div>
                </div>
            </div>
            {image}
        </div>
    );
}

export default DrinkItemCard