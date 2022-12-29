import React from 'react';
import  '../Experience/Experience.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { DiMongodb} from 'react-icons/di';
 import { SiFirebase } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
// import { SiMaterialui } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
// import { TbBrandNextjs } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { SiVercel} from 'react-icons/si';
const Experience = () => {
    return (
        <div className='py-24 text-gray-100 text-center '>
            <h2 className='text-4xl text-center text-gray-100 font-bold sm:text-4xl pb-24 '>Others<span className='text'>Information</span></h2>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className="experienceCard">
			            <div className='lines'></div>
                            <div className='icons'>
                            <p className='text-2xl text-center text-gray-100 font-bold py-6'>My<span className='text'>Skills</span></p>
                                <div className='iconsBtn grid  grid-cols-6 gap-4'>
                               
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><FaHtml5></FaHtml5></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><FaCss3Alt></FaCss3Alt></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><FaJs></FaJs></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><FaBootstrap></FaBootstrap></button>
                                     </div>
                                     <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><SiTailwindcss></SiTailwindcss></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><FaReact></FaReact></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><SiFirebase></SiFirebase></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><DiMongodb></DiMongodb></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><FaGithub></FaGithub></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><FaGitAlt></FaGitAlt></button>
                                    </div>
                                    <div> 
                                        <button className="btn btn-circle btn-outline text-2xl"><FaFigma></FaFigma></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle btn-outline text-2xl"><SiVercel></SiVercel></button>
                                   </div>
            
                                </div>
                            </div>    
                    </div>
            
                    <div>
                    <div className="experienceCard">
			            <div className='lines'></div>
                            <div className='icons'>
                            <p className='text-2xl text-center text-gray-100 font-bold py-5'>Work<span className='text'>Information</span></p>

                                <div className='iconsBtn'>
                                    <h2 className="text-2xl font-bold">13+</h2>
                                        <p className='pb-4 font-bold'>Completed Projects</p>

                                       <hr className='py-2' />

                                    <h2 className="text-2xl font-bold">7+</h2>
                                        <p className='font-bold'>Months Experience</p>

                                </div>
                            </div>    
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Experience;




               
			  
	          