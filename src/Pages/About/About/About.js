import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/image/Snapchat-815282604.jpg'

const About = () => {
    return (
        
      <div className="home pt-24 pb-10 px-20 text-gray-100">
          
      <h2 className='text-3xl text-center text-gray-100 font-bold sm:text-4xl py-6'>Learn More<span className='text'> About </span>Me</h2>
       <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
         <div className="card flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-gray-100">
         
            <div className='lines'></div>
              <div className='imgBox'>
                 <img src={img} alt=""  />
               </div>
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <p className="text-2xl font-bold sm:text-3xl pb-4">Full Stack Web <span className='text'>Developer </span></p>
              <p className="homeAnima mt-6 text-lg sm:mb-12">I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Google Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.</p>
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

                            <hr className='mt-4 '/>
                    
                            <p className=' text-1xl pt-4'>Completed Projects: 25+</p>
                            <p className=' text-1xl'>Year Experience: 1+ Year</p>
                       

                            </div>
                    </div>

               <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
               <a href='https://docs.google.com/document/d/1hAdMY7tKltGKWNBpT1IN0IhKjrh2NXfa/edit?usp=share_link&ouid=105236247118606659868&rtpof=true&sd=true' 
        download='https://docs.google.com/document/d/1hAdMY7tKltGKWNBpT1IN0IhKjrh2NXfa/edit?usp=share_link&ouid=105236247118606659868&rtpof=true&sd=true'
        Download Resume
        rel="noopener noreferrer"  className="btn btn-outline btn-white btn-sm rounded text-gray-100">Download Resume</a> 
                 <Link rel="noopener noreferrer" href="#" className=" btn btn-outline btn-info btn-sm rounded text-gray-100">Download CV</Link>
                </div>
            </div>
       </div>
   </div>


    );
};

export default About;