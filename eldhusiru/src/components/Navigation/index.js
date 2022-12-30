import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../resources/eldhusiru-nav-logo-white.png';


const Navigation = () => {

    let navigate = useNavigate();

    const handleClickScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className='fixed top-0 inset-x-0 h-auto z-40 w-full p-12 text-xl bg-slate-50'>
            <div className='max-w-screen-2xl flex'>
                <Link to={`/`}>
                    <img className="h-20" src={logo} alt="Logo" onClick={() => handleClickScroll('main-section')}/>
                </Link>
                <div className='flex space-x-14 justify-between items-center mx-auto'>
                    <button className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out'>Matseðill</button>
                    <Link to={`/#UmOkkur`}>
                        <button className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out' onClick={() => handleClickScroll('aboutus-section')}>Um okkur</button>
                    </Link>
                    <Link to={`/#Opnunartimi&Stadsetning`}>
                        <button className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out' onClick={() => handleClickScroll('hourslocation-section')} >Opnunartími & staðsetning</button>
                    </Link>
                    <Link to={`/#HafaSamband`}>
                        <button className='cursor-pointer hover:text-rose-700 duration-100 ease-in-out' onClick={() => handleClickScroll('contactus-section')}>Hafa samband</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;