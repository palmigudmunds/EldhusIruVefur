import React, { useEffect } from 'react';

const MainMenu = () => {

    useEffect(() => {
    console.log('Initializing...');
    }, []);
    
    return (
        <div className="flex flex-row justify-start max-w-screen-xl mx-auto pt-48 min-h-screen">
            <div className="w-1/2 pt-16">
                <h3 className="main-menu-text red-text">Bragðaðu á ekta Indónesískum mat</h3>
                <h5 className="text-2xl font-bold pt-5">Pantaðu í síma 848-5143</h5>
                <div className='pt-2'>
                    <button className="red-background text-white font-bold py-4 px-8 rounded-full mt-5">Sjá matseðil</button>
                </div>
            </div>
            <div className="w-1/2 ">
                <div className='w-11/12 h-5/6 border-2 border-black-500 rounded-3xl '>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;