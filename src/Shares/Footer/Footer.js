import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer footer-center p-10 bg-sky-800 text-primary-content">
         <div>
           <h2 className="text-2xl font-bold">UmmeSalma</h2> 
           <p>Copyright © 2022 - All right reserved</p>

           <div className="grid grid-flow-col gap-4 text-2xl pt-2">
                    <button className='btn btn-outline btn-info btn-sm'>
                      <a href='https://github.com/salmatonka'>
                       <FaGithub></FaGithub></a>
                    </button>
                    <button className='btn btn-outline btn-info btn-sm'>
                      <a href='https://www.facebook.com/'>
                       <FaFacebook></FaFacebook></a>
                    </button>
				            <button className='btn btn-outline btn-info btn-sm'>
                       <a href='https://www.linkedin.com/in/omme-salma-46708625b/'>
                         <FaLinkedin></FaLinkedin></a>
                    </button>
			            </div>
         </div> 
            
                 
                
      </footer>
   );
};

export default Footer;