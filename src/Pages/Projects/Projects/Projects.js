import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Projects = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch ('http://localhost:5000')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className='py-10'>
            <h2 className=" py-14 text-4xl font-bold  text-center text-gray-100">Some of My Projects</h2>
          <div>
          <div className='py-15 grid grid-cols-1 gap-4 '>
            
            {
                services.map(service =><Card
                key={service._id}
                  service={service}
                ></Card>

                )
            }
           </div>
          </div>

        </div>
    );
};

export default Projects;