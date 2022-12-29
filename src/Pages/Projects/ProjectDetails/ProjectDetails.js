import React from 'react';
import { useLoaderData} from 'react-router-dom';
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
const ProjectDetails = () => {
    const allServices = useLoaderData();
    const {title,image} = allServices;

    return (
       
        <div className=" text-gray-100 py-24 ">
	         <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		         <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			         <h1 className="text-3xl font-bold leading-none ">{title}</h1>
			         <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer</p>
                        <hr />
                     <div>
                        <h3 className='text-2xl'>Tools & Function:</h3>
                        <div className='grid grid-cols-5 gap-2 py-4 projectIcons '>

                        <div>
                            <button className="btn btn-circle"><FaHtml5></FaHtml5></button>
                        </div>

                        <div>
                         <button className="btn btn-circle"><FaCss3Alt ></FaCss3Alt></button>
                        </div>

                        <div><button className="btn btn-circle"><FaJs></FaJs></button></div>

                       <div><button className="btn btn-circle"><FaReact></FaReact></button></div>

                       <div><button className="btn btn-circle"><DiMongodb></DiMongodb></button></div>

                       <div><button className="btn btn-circle"><SiFirebase></SiFirebase></button></div>

                       <div><button className="btn btn-circle"><SiTailwindcss></SiTailwindcss></button></div>

                       <div><button className="btn btn-circle"><FaNode></FaNode></button></div>

                      <div><button className="btn btn-circle"><FaGithub></FaGithub></button></div>

                      <div><button className="btn btn-circle"><SiVercel></SiVercel></button></div>
                 </div> 
                </div>
                      <hr />

			        <div className='divBtn grid grid-cols-3 gap-2 py-6'>

                        <div> <button type="button" className="px-4 py-3 font-semibold border rounded border-gray-100 text-gray-100">LiveDemo</button></div>
                        <div> <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100">Code</button></div>
                        <div> <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100">Home</button></div>
                  </div> 
                  
                <div>
            </div>
	  </div>
		          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			    <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		         </div>
	         </div>
	      </div>
	

       
    );
};

export default ProjectDetails;