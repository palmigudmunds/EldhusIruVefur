import React from 'react';

const HoursLocation = () => {
    
    return (
        <div id="hourslocation-section" className="px-6 md:px-0 flex flex-col md:flex-row justify-start max-w-none md:max-w-screen-xl mx-auto pt-16 md:pt-48">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-5 md:pt-0">
                <h3 className="opn-sta-text red-text text-center">Opnunartími</h3>
                <p className="opn-sta-text-under mb-20">Mán - Sun<span className="tab"></span>11:30 - 21:00</p>

                <h3 className="opn-sta-text red-text text-center">Staðsetning</h3>
                <p className="opn-sta-text-under">Grandagarður 16, Reykjavík</p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center pt-5">
                <div className='w-11/12 border-2 border-black-500 rounded-3xl mb-6 h-56'>
                </div>
            </div>
        </div>
    );
};

export default HoursLocation;