import React from 'react';

function FoodItemCard({ name, prices, ingredients, image, imageAlt }) {

    return (
        <div className='flex flex-row items-center w-full max-[407px]:h-56 bg-white rounded-3xl p-5 hover:shadow-md hover:cursor-pointer'>
            <div className="flex flex-col justify-center w-full min-h-fit relative h-full">
                <div className='absolute inset-x-0 top-0'>
                    <h5 className="menu-item-header">{name}</h5>
                    <div className='flex flex-row mt-1 items-start md:justify-start space-x-4 md:space-x-8'>
                        {prices.map(({ desc, price }) => (
                            <div className=''>
                            <p className='menu-item-price'>{desc}</p>
                            <p className='menu-item-price'>{price}</p>
                        </div>
                        ))}
                    </div>
                </div>
                <p className='menu-item-description absolute inset-x-0 bottom-0'>{ingredients}</p>
            </div>
            <img className="h-auto max-w-[7rem] rounded-3xl md:rounded-3xl ml-3 md:ml-5 my-5" src={image} alt={imageAlt}/>
        </div>
    );
}

export default FoodItemCard