import React from 'react';
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
import '../Projects/Projects.css';
import { Link } from 'react-router-dom';
const Card = ({service}) => {
     const {_id,title,image} = service;
    return (
        <div className=' text-gray-100'>
        {/* <h1 className="text-3xl font-bold leading-none text-center">Project</h1>  */}
       
       <div className='grid grid-cols-1 lg:grid-cols-2'>
           {/* left parts */}
           <div>
           <div className="experienceCard">
                   <div className='lines'></div>
                       <div className='icons'>
                       
                       <img src={image} alt="" className=" h-70  sm:h-80 lg:h-full xl:h-112 2xl:h-128 lg:w-full" />
                       </div>    
               </div> 

           </div> 
          
   {/* right parts */}
        <div>
             <div className='flex align-center justify-center'>
               <div>LiveDemo</div>
               <div>Code</div>
              

              
             </div>

           <h3  className="text-3xl font-bold leading-none ">{title}</h3>
            <p><Link to={`/projectDetails/${_id}`}>Details</Link></p>
            <p>Uses Technologies</p>

            <div className='flex align-center justify-center'>
               <div><button>tools</button></div>
               <div><button>tools</button></div>
               <div><button>tools</button></div>
            </div>
        </div>
       </div>




   </div>
        
    );
};

export default Card;