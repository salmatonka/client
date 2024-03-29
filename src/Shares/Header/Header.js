import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    // <div className="navbar bg-sky-700  homeAnima text-gray-100 hover:bg-sky-900 py-6 fixed z-10 mx-auto md:max-w-[1240px]">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //       </label>
    //       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 trans ">
    //         <li><Link to="/home">Home</Link></li>
    //         <li><Link to="/skills">Skills</Link></li>
    //         <li><Link to="/projects">Projects</Link></li>
    //         <li><Link to="/services">Services</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/blog">Blog</Link></li>
    //         <li><Link to="/contact">Contact</Link></li>
    //       </ul>
    //     </div>
    //     <Link className="btn btn-ghost normal-case  text-2xl font-bold sm:text-4xl "> Um<span className='text'>meSal</span>ma</Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex text-xl">
    //     <ul className="menu menu-horizontal px-1 ">
    //       <li><Link to="/home">Home</Link></li>
    //       <li><Link to="/skills">Skills</Link></li>
    //       <li><Link to="/projects">Projects</Link></li>
    //       <li><Link to="/services">Services</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //       <li><Link to="/blog">Blog</Link></li>
    //       <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    //   </div>

    // </div>

    <div style={{
      backgroundColor: '#8f8f8f38',
     backdropFilter: 'blur(10px)',
     zIndex: '100'
 }} className="navbar   text-gray-100 hover:bg-sky-900 py-6 fixed z-10 mx-auto md:max-w-[1240px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 trans ">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case  text-2xl font-bold sm:text-4xl "> Um<span className='text'>meSal</span>ma</Link>
      </div>
      <div className="navbar-center hidden lg:flex text-xl">
        <ul className="menu menu-horizontal px-1 ">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

    </div>

  );
};

export default Header;