import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/eldhusiru-nav-logo-new.png';


const Navigation = () => {

    let activeClassName = 'text-main link';

    return (
        <nav className='relative md:fixed top-0 mx-auto inset-x-0 h-auto z-40 w-full py-3 md:py-10 text-xl bg-slate-50'>
            <div className='max-w-screen-2xl flex md:mx-auto justify-center px-6'>
                <NavLink to={`/`}>
                    <img className="w-32 md:w-56 h-auto" src={logo} alt="Logo" />
                </NavLink>
                <div className='flex space-x-4 lg:space-x-10 justify-between items-center ml-auto max-md:hidden'>
                    <NavLink to={`/menu`} 
                            className={({ isActive }) =>
                                isActive ? activeClassName : 'link'
                            }
                            >
                        Matseðill
                    </NavLink>
                    <NavLink to={`/#UmOkkur`} className='link'>
                        Um okkur
                    </NavLink>
                    <NavLink to={`/#Opnunartimi&Stadsetning`}>
                        <button className='link'>Opnunartími & staðsetning</button>
                    </NavLink>
                    <NavLink to={`/#HafaSamband`}>
                        <button className='link'>Hafa samband</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;