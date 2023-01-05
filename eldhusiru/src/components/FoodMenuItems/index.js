import React from 'react';
import friedRice from '../../resources/fried-rice.jpeg';
import friedNoodles from '../../resources/fried-noodles.jpeg';
import friedRiceNoodles from '../../resources/fried-rice-noodles.jpeg';
import noodleSoup from '../../resources/noodle-soup.jpeg';
import chickenSatay from '../../resources/chicken-satay.jpeg';



const FoodMenuItems = () => {
    
    return (
        <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto relative z-10">
            <div className="w-full md:w-4/6">
                <h3 className="text-2xl md:text-4xl text-center mb-10">Réttir</h3>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full max-w-md rounded-3xl mr-5" src={friedRice} alt="friedRice"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">1. Steikt hrísgrjón</h5>
                        <ul className='leaders'>
                            <li>
                                <span>Með rækjum</span>
                                <span>2.590 kr.</span>
                            </li>
                            <li>
                                <span>Með kjúkling</span>
                                <span>2.490 kr.</span>
                            </li>
                            <li>
                                <span>Með grænmeti</span>
                                <span>2.090 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-5" src={friedNoodles} alt="friedNoodles"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">2. Steiktar eggjanúðlur</h5>
                        <ul className='leaders'>
                            <li>
                                <span>Með rækjum</span>
                                <span>2.590 kr.</span>
                            </li>
                            <li>
                                <span>Með kjúkling</span>
                                <span>2.490 kr.</span>
                            </li>
                            <li>
                                <span>Með grænmeti</span>
                                <span>2.090 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-5" src={friedRiceNoodles} alt="friedRiceNoodles"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">3. Steiktar hrísgrjónanúðlur</h5>
                        <ul className='leaders'>
                            <li>
                                <span>Með rækjum</span>
                                <span>2.590 kr.</span>
                            </li>
                            <li>
                                <span>Með kjúkling</span>
                                <span>2.490 kr.</span>
                            </li>
                            <li>
                                <span>Með grænmeti</span>
                                <span>2.090 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-5" src={chickenSatay} alt="chickenSatay"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">4. Kjúklinga-Satay</h5>
                        <ul className='leaders'>
                            <li>
                                <span>Með hnetusósu og hrísgrjónum</span>
                                <span>2.690 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row items-start w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <img className="h-full rounded-3xl mr-5" src={noodleSoup} alt="noodleSoup"/>
                    <div className="flex flex-col justify-center w-full">
                        <h5 className="text-sm md:text-xl text-black text-left">5. Núðlusúpa</h5>
                        <ul className='leaders'>
                            <li>
                                <span>Með Indónesískum kjötbollum, kjúklingi og grænmeti</span>
                                <span>2.590 kr.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-4/6 md:w-2/6 mt-12">
                <h3 className="text-2xl md:text-4xl text-center mb-10">Drykkir</h3>
                <div className='w-full h-20 md:h-32 mb-14 lg:mb-6'>
                    <div className="flex flex-col justify-center w-full">
                        <ul className='leaders'>
                            <li>
                                <span>Gos</span>
                                <span>390 kr.</span>
                            </li>
                            <li>
                                <span>Svali</span>
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