import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/image/Snapchat-815282604.jpg'

const About = () => {
    return (
        
        <div className="home py-24 px-20 text-gray-100">
           <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
             <div className="card flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-gray-100">
             
                <div className='lines'></div>
                  <div className='imgBox'>
                     <img src={img} alt=""  />
                   </div>
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <p className="text-4xl font-bold sm:text-4xl "> <span className='text'>About</span>  Me</p>
                  <p className="homeAnima mt-4 text-lg sm:mb-12">I am Salma. I am from Narsingdi, Bangladesh. I am a Front End developer.I like to do coding in my free time. I am totally confident about myself.</p>
                     <hr className='pb-4 text'/>
                    
                       <div className="">
                          <div className="">
                              <h3 className=' text-2xl font-bold py-4'>PERSONAL <span className='text'> INFORMATION</span></h3>
                               <p className=' text-1xl'>Name: Umme Salma</p>
                               <p className=' text-1xl'>Address: Narsingdi,Dhaka Bangladesh</p>
                               <p className=' text-1xl'>Email: ommesalma858@gmail.com</p>
                            </div> 
                           <hr className='mt-4 '/>
                                <div className="py-4">
                                <p className=' text-1xl'>Phone: (+88) 01930053708</p>
                                <p className=' text-1xl'> Github: salmatonka</p>
                                <p className=' text-1xl'>Language: Bangla,English,Hindi</p>
                           

                                </div>
                        </div>

                   <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                   <a href='https://docs.google.com/document/d/1hAdMY7tKltGKWNBpT1IN0IhKjrh2NXfa/edit?usp=share_link&ouid=105236247118606659868&rtpof=true&sd=true' 
				download='https://docs.google.com/document/d/1hAdMY7tKltGKWNBpT1IN0IhKjrh2NXfa/edit?usp=share_link&ouid=105236247118606659868&rtpof=true&sd=true'
				Download Resume
				rel="noopener noreferrer"  className="btn-outline bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-8 py-3 text-lg font-semibold rounded text-gray-100">Download Resume</a> 
                     <Link rel="noopener noreferrer" href="#" className=" bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-violet-500 hover:to-pink-500 px-8 py-3 text-lg font-semibold rounded  dark:text-gray-900">Download CV</Link>
                    </div>
                </div>
           </div>
       </div>

    );
};

export default About;