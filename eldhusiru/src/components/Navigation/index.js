import React from 'react';
import logo from '/Users/PalmiGudmunds/Desktop/EldhusIruVefur/eldhusiru/src/resources/eldhusiru-nav-logo.png';


const Navigation = () => {

    return (
        <nav className='fixed top-0 inset-x-0 h-auto z-10 w-full p-12 text-xl'>
            <div className='max-w-screen-2xl flex'>
                <img className="h-20" src={logo} alt="Logo" />
                <div className='flex space-x-14 justify-between items-center mx-auto'>
                    <a className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out'>Matseðill</a>
                    <a className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out'>Um okkur</a>
                    <a className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out'>Opnunartími & staðsetning</a>
                    <a className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out'>Hafa samband</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;