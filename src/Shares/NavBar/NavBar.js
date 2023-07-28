import React, { useState } from 'react';
import { FaLockOpen } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const navItems = [
        { id: '1', name: 'Home', path: '/home' },
        { id: '2', name: 'Projects', path: '/projects' },
        { id: '3', name: 'Skills', path: '/skills' },
        { id: '4', name: 'About', path: '/about' },
        { id: '5', name: 'Blog', path: '/blog' },
        { id: '6', name: 'Contact', path: '/contact' },
    ]
    return (
            <div style={{
                backgroundColor: '#8f8f8f38',
               backdropFilter: 'blur(10px)',
               zIndex: '100'
           }} >
                <div className='fixed z-10  w-full'>
                    <div onClick={() => setOpen(!open)} className='text-gray-400 lg:hidden pl-4 pt-4  '>
                        {
                            open ? < FaLockOpen className='w-6 h-6' /> : < HiLockClosed className='w-6 h-6' />
                        }
                    </div>
                    <div className='lg:flex justify-between text-gray-400 py-6 px-10 '>
                        <div className='font-extrabold text-2xl '>
                            <Link to='/'>Po<span className='p-text'>rtfo</span>lio</Link>
                        </div>
                        <ul className={`absolute md:static duration-500 ease-in ${open ? 'top-12' : 'top-[-200px] '} md:flex gap-6`}>
                            {
                                navItems.map(navItem =>

                                    <NavLink to={navItem.path} className='text-xl font-semibold ' ><li className={(isActive) => isActive ? 'active' : undefined}>{navItem.name}</li> </NavLink>

                                )

                            }
                        </ul>

                    </div>
                </div>
            </div>   
);
};

export default NavBar;