import React from 'react';
import './Services.css';
import { FaMobileAlt } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLogoDesignernews } from 'react-icons/io';
import { CgWebsite } from 'react-icons/cg';
import { BiSupport } from 'react-icons/bi';
const Services = () => {
    return (
        <div className='pb-20 pt-36 text-white'>
            <h3 className='text-center text-2xl font-bold pb-10'>Services I Provide</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
                <div className='service-cart hover:bg-sky-700 '>
                    <button className='mt-8'><FaMobileAlt className=' text-3xl ' /></button>
                    <h3 className='pt-4 text-2xl font-bold'>Responsive Design</h3>
                    <p className='pt-4 text-xl semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!</p>

                </div>
                <div className='service-cart hover:bg-sky-700 '>
                    <button className='mt-8'><FaLaptopCode className=' text-3xl ' /></button>
                    <h3 className='pt-4 text-2xl font-bold'>Web Design</h3>
                    <p className='pt-4 text-xl semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!</p>

                </div>
                <div className='service-cart hover:bg-sky-700 '>
                    <button className='mt-8'><CgWebsite  className=' text-3xl ' /></button>
                    <h3 className='pt-4 text-2xl font-bold'>Web Development</h3>
                    <p className='pt-4 text-xl semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!</p>

                </div>
                <div className='service-cart hover:bg-sky-700 '>
                    <button className='mt-8'><IoLogoDesignernews className=' text-3xl ' /></button>
                    <h3 className='pt-4 text-2xl font-bold'>Friendly Design</h3>
                    <p className='pt-4 text-xl semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!</p>

                </div>
                <div className='service-cart hover:bg-sky-700 '>
                    <button className='mt-8'><BsCodeSlash  className=' text-3xl ' /></button>
                    <h3 className='pt-4 text-2xl font-bold'>Clean Code</h3>
                    <p className='pt-4 text-xl semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!</p>

                </div>
                <div className='service-cart hover:bg-sky-700 '>
                    <button className='mt-8'><BiSupport className=' text-3xl ' /></button>
                    <h3 className='pt-4 text-2xl font-bold'>Great Support</h3>
                    <p className='pt-4 text-xl semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!</p>

                </div>
                    
            </div>
        </div>
    );
};

export default Services;