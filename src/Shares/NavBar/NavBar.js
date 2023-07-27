import React, { useState } from 'react';
import { FaLockOpen} from 'react-icons/fa';
import {HiLockClosed } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const navItems = [
        {id:'1', name:'Home', path:'/home'},
        {id:'2', name:'Projects', path:'/projects'},
        {id:'3', name:'Skills', path:'/skills'},
        {id:'4', name:'About', path:'/about'},
        {id:'5', name:'Blog', path:'/blog'},
        {id:'6', name:'Contact', path:'/contact'},
    ]
    return (
        <div>
            <div onClick={()=>setOpen(!open)} className='text-gray-400 lg:hidden pl-4 pt-4  '>
            {
                open? < FaLockOpen className='w-6 h-6'/> : < HiLockClosed  className='w-6 h-6'/>
            }
            </div>
            <div className='lg:flex justify-between  text-gray-400 py-6 '>
                <div className='pl-4'>
                    <Link to='/'>Portfolio</Link>
                </div>
                <ul className={` absolute md:static duration-500 ease-in ${ open? 'top-12':'top-[-200px] '} md:flex gap-6`}>
                    {
                        navItems.map(navItem =>
                         <li navItem={navItem.id}><NavLink to={navItem.path}>{navItem.name}</NavLink></li> )
                    }
                </ul>

            </div>
        </div>
    );
};

export default NavBar;