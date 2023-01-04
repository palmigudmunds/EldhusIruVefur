import React from 'react';
import grandiMathollUti from '../../resources/grandi-matholl-uti.jpeg';

const HoursLocation = () => {
    
    return (
        <div id="Opnunartimi&Stadsetning" className="flex flex-col md:flex-row justify-start max-w-none md:max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-5 md:pt-0">
                <h2 className="text-center">Opnunartími</h2>
                <p className="mb-20">Mán - Sun<span className="tab"></span>11:30 - 21:00</p>

                <h2 className="text-center">Staðsetning</h2>
                <p>Grandagarður 16, Reykjavík</p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center pt-5">
                <img className="w-full h-auto object-cover rounded-3xl md:max-w-[35rem]" src={grandiMathollUti} alt="Matholl Granda Uti"/>
                {/* <div className='w-11/12 border-2 border-black-500 rounded-3xl mb-6 h-56'>
                </div> */}
            </div>
        </div>
    );
};

export default HoursLocation;