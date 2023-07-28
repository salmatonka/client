import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css';
// import { FaGithub } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaReact } from 'react-icons/fa';
// import { FaNode } from 'react-icons/fa';
// import { FaDownload } from 'react-icons/fa';
// import { FaJs } from 'react-icons/fa';
// import image1 from '../../../assets/image/Snapchat-815282604.jpg';

import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { AiTwotoneMail } from "react-icons/ai";
// import './ProfileBio.css'
// import AutoMessage from '../AutoMessage/AutoMessage';
import { useState } from 'react';


const HomeBanner = () => {
	const [onMouse, setOnMouse] = useState(false)
	return (
		// {/* <section className="pt-24 home px-20 text-gray-100">
		// <div className="container flex flex-col justify-center lg:p-6 mx-auto sm:py-12 lg:pt-12 lg:flex-row lg:justify-around">
		// 	<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		// 		<h1 className="homeAnima  text-5xl font-bold sm:text-4xl ">Hi
		// 			<h1 className="homeAnima"> I'm <span className='text'>Salma</span> </h1>
		// 		</h1>
		// 		<p className="homeAnima mt-6  text-lg sm:mb-12">I'm a web developer. I am from Narsingdi, Bangladesh. I am a Front End developer.I like to do coding in my free time. I am totally confident about myself.</p>


		// 		<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start pb-8 ">


		// 			<div className='lg:pr-12'>
		// 			<p className="text-lg pt-6 pb-2">Find With Me</p>
		// 			<button className='mr-2 text-xl '><a className='btn btn-outline btn-info btn-sm' href='https://github.com/salmatonka'><FaGithub></FaGithub></a></button>
		// 			  <button className='mr-2 text-xl'><a className='btn btn-outline btn-info btn-sm' href='https://www.facebook.com/'><FaFacebook></FaFacebook></a></button>
		// 			  <button className='mr-2 text-xl'> <a className='btn btn-outline btn-info btn-sm' href='https://www.linkedin.com/in/omme-salma-46708625b/'> <FaLinkedin></FaLinkedin></a></button>
		// 			</div>

		// 			<div className=''>
		// 			<p className="text-lg pt-6 pb-2">Best Skill On</p>
		// 			<button className='mr-2 text-xl'><a className='btn btn-info btn-sm ' href='https://github.com/salmatonka'><FaJs></FaJs></a></button>
		// 			  <button className='mr-2 text-xl'><a className='btn btn-info btn-sm ' href='https://www.facebook.com/'><FaReact></FaReact></a></button>
		// 			  <button className='mr-2 text-xl'> <a className='btn btn-info btn-sm ' href='https://www.linkedin.com/in/omme-salma-46708625b/'> <FaNode></FaNode></a></button>
		// 			</div>

		// 		   </div>


		// 		   <div>

		// 			<a href='https://docs.google.com/document/d/1hAdMY7tKltGKWNBpT1IN0IhKjrh2NXfa/edit?usp=share_link&ouid=105236247118606659868&rtpof=true&sd=true' 
		// 			   download='https://docs.google.com/document/d/1hAdMY7tKltGKWNBpT1IN0IhKjrh2NXfa/edit?usp=share_link&ouid=105236247118606659868&rtpof=true&sd=true'
		// 			   Download Resume
		// 			   rel="noopener noreferrer"  className=" btn btn-outline btn-info lg:btn-sm  rounded text-gray-100 mr-6 mb-2"><FaDownload className='mr-1'></FaDownload> Download Resume</a> 

		// 			   <a rel="noopener noreferrer" href="https://github.com/salmatonka" className=" btn btn-outline btn-info lg:btn-sm  rounded text-gray-100 "><FaGithub className='mr-1'></FaGithub>Github Link</a>


		// 		   </div>

		// 	</div>
		// 	<div className=" card  flex items-center justify-center lg:p-6   mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
		// 		<div className='lines'></div>
		// 		<div className='imgBox'>

		// 		<img src={image1} alt=""  />
		// 		</div>
		// 	</div>

		// </div>

		// </section> */}



		<div>
			
		</div>



	);
};

export default HomeBanner;