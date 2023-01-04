import React from 'react';
import friedRice from '../../resources/fried-rice.jpeg';
import friedNoodles from '../../resources/fried-noodles.jpeg';
import friedRiceNoodles from '../../resources/fried-rice-noodles.jpeg';
import noodleSoup from '../../resources/noodle-soup.jpeg';
import chickenSatay from '../../resources/chicken-satay.jpeg';



const FoodMenuItems = () => {
    
    return (
        <div className="flex justify-center items-center max-w-screen-xl mx-auto pt-16 lg:pt-24 relative z-10">
            <div className="w-11/12 md:w-4/6">
                <h3 className="text-2xl md:text-4xl text-center mb-10">Réttir</h3>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full max-w-md rounded-3xl" src={friedRice} alt="friedRice"/>
                    <div className="flex flex-col justify-center">
                        <h5 className="text-base md:text-xl text-black text-left ml-5">1. Steikt hrísgrjón</h5>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5 mb-1 md:mb-4">með kjúklingi / rækjum / grænmeti</h6>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5">2.499 kr.</h6>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl" src={friedNoodles} alt="friedNoodles"/>
                    <div className="flex flex-col justify-center">
                        <h5 className="text-base md:text-xl text-black text-left ml-5">2. Steiktar eggjanúðlur</h5>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5 mb-1 md:mb-4">með kjúklingi / rækjum / grænmeti</h6>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5">2.499 kr.</h6>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl" src={friedRiceNoodles} alt="friedRiceNoodles"/>
                    <div className="flex flex-col justify-center">
                        <h5 className="text-base md:text-xl text-black text-left ml-5">3. Steiktar hrísgrjónanúðlur</h5>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5 mb-1 md:mb-4">með kjúklingi / rækjum / grænmeti</h6>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5">2.499 kr.</h6>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl" src={chickenSatay} alt="chickenSatay"/>
                    <div className="flex flex-col justify-center">
                        <h5 className="text-base md:text-xl text-black text-left ml-5">4. Kjúklinga-Satay</h5>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5 mb-1 md:mb-4">með hnetusósu og hrísgrjónum</h6>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5">2.499 kr.</h6>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl" src={noodleSoup} alt="noodleSoup"/>
                    <div className="flex flex-col justify-center">
                        <h5 className="text-base md:text-xl text-black text-left ml-5">5. Núðlusúpa</h5>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5 mb-1 md:mb-4">með Indónesískum kjötbollum og grænmeti</h6>
                        <h6 className="text-sm md:text-lg text-zinc-600 text-left ml-5">2.499 kr.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodMenuItems;