import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo, Lupa, Profile } from '../../../public/Icons';

const Header = () => {
    const list = [
        { id: 1, title: "Movies", path: "/movies" },
        { id: 2, title: "Series", path: "/series" },
        { id: 3, title: "Channels", path: "/channels" },
        { id: 4, title: "Music", path: "/music" },
    ]

    return (
        <header className='bg-[#0000004D] flex items-center justify-between py-[20px] px-[65px]'>
            <div className='flex items-center gap-[58px]'>
                <NavLink to="/"><Logo /></NavLink>
                <nav className='flex items-center gap-[44px]'>
                    {list.map(item => (
                        <NavLink key={item.id} to={item.path} className={({ isActive }) => `text-white text-lg font-medium transition-colors duration-200 hover:text-[#E13C52] ${isActive ? 'text-[#E13C52] border-b-2 border-[#E13C52] pb-1' : ''}`}>
                            {item.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className="flex items-center gap-[19px]">
                <label className='flex items-center bg-black rounded-lg px-3 py-2'>
                    <Lupa />
                    <input type='text' placeholder='Search' className='bg-black placeholder:text-white text-white outline-none hover:bg-transparent border-black hover:border-black' />
                </label>
                <Link to={'/profile'} className='flex items-center gap-[8px]'>
                    <div><Profile /></div>
                    <span className='text-[24px] leading-[100%] font-medium text-white'>Profile</span>
                </Link>
            </div>
        </header>
    )
}

export default Header