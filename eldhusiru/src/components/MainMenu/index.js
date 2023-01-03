import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import diskur from '../../resources/stadurinn.jpeg';


const MainMenu = () => {

    let navigate = useNavigate();

    useEffect(() => {
    console.log('Initializing...');
    }, []);
    
    return (
        // <div id="main-section" className="flex flex-row justify-start max-w-screen-xl mx-auto pt-48 min-h-screen relative z-10">
        //     <div className="w-1/2 pt-16">
        //         <h3 className="main-menu-text red-text">Bragðaðu á ekta Indónesískum mat</h3>
        //         <h5 className="text-2xl font-bold pt-5">Pantaðu í síma 848-5143</h5>
        //         <div className='pt-2'>
        //             <button className="red-background text-white text-xl py-4 px-8 rounded-full mt-5 hover:bg-red-700 ease-in-out" onClick={() => navigate('/menu')}>Sjá matseðil</button>
        //         </div>
        //     </div>
        //     <div className="w-1/2 ">
        //         <div className='w-11/12 h-5/6 border-2 border-black-500 rounded-3xl '></div>
        //     </div>
        // </div>

        <div id="main-section" className="px-6 md:px-0 flex flex-col-reverse md:flex-row justify-start max-w-none md:max-w-screen-xl mx-auto pt-16 md:pt-48 md:max-h-screen">
            <div className="w-full md:w-1/2 md:pt-16">
                <h3 className="md:main-menu-text md:text-6xl text-2xl font-bold red-text w-10/12 max-md:mt-5">Smakkaðu ekta Indónesískann mat</h3>
                <h5 className="text-lg md:text-2xl font-bold pt-2 md:pt-5">Pantaðu í síma 848-5143</h5>
                <div className="md:pt-2 max-md:flex max-md:justify-center">
                    <button
                        className="red-background text-white text-lg md:text-xl py-4 px-8 rounded-full mt-5 hover:bg-red-700 ease-in-out"
                        onClick={()=> navigate('/menu')}>Sjá matseðil</button>
                </div>
            </div>
            <div className="flex justify-center w-full h-full md:w-1/2 md:max-h-screen">
                {/* <div className='w-full md:w-11/12 h-full md:h-5/6 border-2 border-black-500 rounded-3xl'></div> */}
                <div>
                    <img className="md:max-h-screen max-h-80 md:h-5/6 rounded-3xl" src={diskur} alt="diskur"/>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;