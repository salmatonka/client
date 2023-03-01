import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Projects = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch ('https://portfolio-server-topaz-ten.vercel.app')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
       
     <div className="pt-24">
       <h2 className=" pb-10 lg:text-4xl text-3xl font-bold  text-center text-gray-100">Some of My Projects</h2>
     
          <div className='py-15  flex flex-wrap gap-14 justify-center'>
            
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