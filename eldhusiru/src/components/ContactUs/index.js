import React from 'react';
import { useNavigate } from "react-router-dom";


const ContactUs = () => {

    let navigate = useNavigate();
    
    return (
        <div className="flex flex-row justify-center max-w-screen-xl mx-auto pt-48 pb-32">
            <div className='w-8/12 red-background rounded-3xl h-96 mb-6'>
                <h4 className="text-xl font-black text-white text-center mt-6">Hafa samband</h4>
                <div className="mb-6 mt-4 flex flex-row justify-between">
                    <div className='w-5/12 ml-12'>
                        <label className="block text-white text-base font-bold mb-2" for="name">
                            Nafn
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500" 
                            id="name" 
                            type="text"
                            />
                    </div>
                    <div className='w-5/12 mr-12'>
                        <label className="block text-white text-base font-bold mb-2" for="email">
                            Netfang
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500" 
                            id="email" 
                            type="text"
                            />
                    </div>
                </div>
                <div className="mb-6 flex flex-row justify-center h-24">
                    <div className='w-11/12 mr-12 ml-12 h-full'>
                        <label className="block text-white text-base font-bold mb-2" for="message">
                            Skilaboð
                        </label>
                        <textarea 
                            className="block shadow appearance-none h-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500" 
                            id="message" 
                            type="text"
                        ></textarea>
                    </div>
                </div>
                <div className="mt-14 flex items-center justify-center">
                    <button 
                        className="w-3/12 red-background border border-white hover:bg-white text-white hover:bg-red-700 text-xl py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline duration-100 ease-in-out" 
                        type="button"
                        onClick={() => navigate('/')}>Senda</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;