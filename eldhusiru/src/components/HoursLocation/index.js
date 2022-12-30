import React from 'react';

const HoursLocation = () => {
    
    return (
        <div className="flex flex-row justify-start max-w-screen-xl pt-48 mx-auto">
            <div className="w-1/2">
                <h3 className="opn-sta-text red-text text-center">Opnunartími</h3>
                <p className="opn-sta-text-under mb-20">Mán - Sun<span className="tab"></span>11:30 - 21:00</p>

                <h3 className="opn-sta-text red-text text-center">Staðsetning</h3>
                <p className="opn-sta-text-under">Grandagarður 16, Reykjavík</p>
            </div>
            <div className="w-1/2">
                <div className='w-11/12 border-2 border-black-500 rounded-3xl h-full mb-6'>
                </div>
            </div>
        </div>
    );
};

export default HoursLocation;