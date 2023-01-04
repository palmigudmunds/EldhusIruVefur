import React from 'react';
import { useNavigate } from 'react-router-dom';
import diskur from '../../resources/stadurinn.jpeg';


const MainMenu = () => {

    let navigate = useNavigate();
    
    return (
        <div id="main-section" className="flex flex-col md:flex-row justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 md:space-x-4">
            <div className="w-full md:w-1/2 md:pt-16">
                <h1 className="max-md:mt-5">Smakkaðu ekta Indónesískan mat</h1>
                <h3 className="pt-2 md:pt-5">Pantaðu í síma 848-5143</h3>
                <div className="md:pt-2">
                    <button
                        className="bg-main text-white text-lg md:text-xl font-bold py-4 px-8 rounded-full mt-5 hover:bg-red-700 ease-in-out"
                        onClick={()=> navigate('/menu')}>Sjá matseðil</button>
                </div>
            </div>
            <div className="flex justify-center w-full h-full md:w-1/2 md:max-h-screen mt-4 md:mt-0">
                {/* <div className='w-full md:w-11/12 h-full md:h-5/6 border-2 border-black-500 rounded-3xl'></div> */}
                <img className="w-full h-auto object-cover rounded-3xl md:max-w-[35rem] max-w-[24rem]" src={diskur} alt="diskur"/>
            </div>
        </div>
    );
};

export default MainMenu;