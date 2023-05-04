import React, { useEffect, useState } from 'react';
import SomeCart from '../SomeCart/SomeCart';

const SomeProjects = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
         fetch('products.json')
         .then(res =>res.json())
         .then(data =>setProducts(data))
    },[])
    return (
        <div className=" py-40 text-white">
            {
                products.length
            }
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    products.map(product=><SomeCart 
                      key={product.id}
                      product={product}
                     ></SomeCart>)
                }
            </div>
            
        </div>
    );
};

export default SomeProjects;