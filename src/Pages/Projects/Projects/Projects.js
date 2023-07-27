import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch ('https://portfolio-server-topaz-ten.vercel.app')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
       
     <div className="pt-24">
       <h2 className=" pt-6 pb-3 lg:text-3xl text-2xl font-bold  text-center text-gray-100">My latest Projects </h2>
       <Link className='flex justify-center' to="/someProjects"><button className="btn btn-outline btn-info btn-sm rounded text-gray-100">See All Projects</button></Link>

          <div className='pb-20 pt-10  flex flex-wrap gap-14 justify-center'>
            
            {
                services.map(service =><Card
                key={service._id}
                  service={service}
                ></Card>

                )
            }
           </div>
           </div>
    );
};

export default Projects;