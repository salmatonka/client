import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import '../Projects/Projects.css';
import { Link } from 'react-router-dom';
const Card = ({ service }) => {
  const { _id, title, image1, tool1, tool2, tool3, tool4, tool5, clientCode, live } = service;
  return (
    <div>

      <div className="text-gray-100 py-10 ">

        <div>
          <h3 className="text-2xl text-center  font-bold leading-none ">{title}</h3>
          <div className='pt-4 pb-10 flex justify-center '>

            <div>
              <button className="btn btn-outline btn-info btn-sm"><a href={live}>Live demo</a></button>
            </div>


            <div><button className="btn btn-outline btn-info btn-sm mx-2"><a href={clientCode}>Github</a></button></div>

            <div><button className="btn btn-outline btn-info btn-sm"><Link to={`/projectDetails/${_id}`}>Details</Link></button></div>
          </div>
        </div>


        <div className="projectCard">
          <div className='lines'></div>
          <div className='icons'>

            <img src={image1} alt="" className=" h-40 w-80 md:h-60 lg:h-60  lg:w-full md:w-full sm:w-full " />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Card;