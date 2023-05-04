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
import './SomeCart.css';
const SomeCart = (props) => {
    const { title, image, details, tool1, tool2, tool3, tool4, tool5, live } = props.product;
    console.log(props.product)
    return (
        <div className='some-cart'>

            <div>
                <img src={image} alt="" className=" h-40 w-80  lg:h-full  lg:w-full sm:w-full md:h-60" />
            </div>

            <div>
                <h2 className='text-2xl font-bold pt-8 py-4 pl-4'>{title}</h2>
                <button className="btn btn-outline btn-info btn-sm ml-4 "><a href={live}>Live demo</a></button>

                <div className='pl-4 pt-3'>
                    <h5>USE TOOLS: <small>{tool1}, {tool2},{tool3},{tool4},{tool5}</small></h5>
                </div>
                <h5 className='py-6 pl-4 '>DETAILS: <small>{details}</small> </h5>
            </div>



            {/* <div className='py-24 text-gray-100 '>
            {/*1st site */}

            {/* <h3 className='text-3xl font-bold text-center pt-12 '>{title}</h3>


            <div className='ptDetail flex align-center justify-center gap-2 pt-4 '>
                <div><button className="btn btn-outline btn-info btn-sm"><a href={live}>Live demo</a></button></div>
                
            </div> */}

            {/* <div className='ptDetailBtn py-4  flex align-center justify-center '>
                <div className='mx-1'><button className="btn btn-info btn-sm ">{tool1}</button></div>
                <div ><button className="btn btn-info btn-sm ">{tool2}</button></div>
                <div className='mx-1'><button className="btn btn-info btn-sm">{tool3}</button></div>
                <div ><button className="btn btn-info btn-sm">{tool4}</button></div>
                <div className='mx-1 '><button className="btn  btn-info btn-sm">{tool5}</button></div>

            </div>

            <div>
                {/* 2nd site */}
            {/* <div className='py-14 flex flex-wrap gap-14 justify-center'>
                    <div className="projectDetailsCard">
                        <div className='lines'></div>
                        <div className='icons'>

                            <img src={image} alt="" className=" h-40 w-80  lg:h-full  lg:w-full sm:w-full md:h-60" />
                        </div>
                    </div>
                   
                </div> */}

            {/* 3nd site */}
            {/* <div className='text-center'>
                    <h3 className='text-3xl font-bold text-center pt-12 pb-6'>Project Details:</h3>
                    <p>{details}</p>
                </div>
            </div> */}

            {/* </div> */}

        </div>
    );
};

export default SomeCart;