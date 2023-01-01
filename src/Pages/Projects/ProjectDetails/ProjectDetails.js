import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { DiMongodb} from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiVercel} from 'react-icons/si';
import './ProjectDetails.css';
const ProjectDetails = () => {
    const allServices = useLoaderData();
    const {title,details,image2,image3,image4,image5,image6,tool1,tool2,tool3,tool4,tool5,github,live} = allServices;

    return (
       <div className='py-24 text-gray-100 '>
         {/*1st site */}

               <h3 className='text-4xl font-bold text-center pt-12 '>{title}</h3>

    
               <div className='flex align-center justify-center gap-2 pt-4'>
               <div><button className="btn btn-outline btn-info btn-sm"><a href={live}>Live demo</a></button></div>
              <div><button className="btn btn-outline btn-info btn-sm "><a href={github}>ClientCode</a></button></div>
              <div><button className="btn btn-outline btn-info btn-sm"><a href={github}>ServerCode</a></button></div>

               </div>

         <div className='py-4 flex align-center justify-center '>
         <div className='mx-1'><button className="btn btn-info btn-sm">{tool1}</button></div>
               <div ><button className="btn btn-info btn-sm">{tool2}</button></div>
               <div className='mx-1'><button className="btn btn-info btn-sm">{tool3}</button></div>
               <div ><button className="btn btn-info btn-sm">{tool4}</button></div>
               <div className='mx-1 '><button className="btn  btn-info btn-sm">{tool5}</button></div>
               
            </div>
           
             <div>
                {/* 2nd site */}
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-20'>
               <div className="projectDetailsCard">
                   <div className='lines'></div>
                       <div className='icons'>
                       
                       <img src={image2} alt="" className=" h-70  sm:h-80 lg:h-full xl:h-112 2xl:h-128 lg:w-full" />
                       </div>    
               </div> 
               <div className="projectDetailsCard">
                   <div className='lines'></div>
                       <div className='icons'>
                       
                       <img src={image3} alt="" className=" h-70  sm:h-80 lg:h-full xl:h-112 2xl:h-128 lg:w-full" />
                       </div>    
               </div> 
               <div className="projectDetailsCard">
                   <div className='lines'></div>
                       <div className='icons'>
                       
                       <img src={image4} alt="" className=" h-70  sm:h-80 lg:h-full xl:h-112 2xl:h-128 lg:w-full" />
                       </div>    
               </div> 
               <div className="projectDetailsCard">
                   <div className='lines'></div>
                       <div className='icons'>
                       
                       <img src={image5} alt="" className=" h-70  sm:h-80 lg:h-full xl:h-112 2xl:h-128 lg:w-full" />
                       </div>    
               </div> 
               <div className="projectDetailsCard">
                   <div className='lines'></div>
                       <div className='icons'>
                       
                       <img src={image6} alt="" className=" h-70  sm:h-80 lg:h-full xl:h-112 2xl:h-128 lg:w-full" />
                       </div>    
               </div> 
                <div className="projectDetailsCard">
                   <div className='lines'></div>
                       <div className='icons'>
                       
                       <img src={image5} alt="" className=" h-70  sm:h-80 lg:h-full xl:h-112 2xl:h-128 lg:w-full" />
                       </div>    
               </div>  
            </div>

             {/* 3nd site */}
              <div className='text-center'>
              <h3 className='text-3xl font-bold text-center pt-12 pb-6'>Project Details:</h3>
                <p>{details}</p>
             </div> 
             </div> 
             
        </div>
       
        
   

       
    );
};

export default ProjectDetails;