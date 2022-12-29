import React from 'react';
import '../Blog.css'
const Blog = () => {
    return (
        <div className='py-24 text-gray-100'>
             <h1 className="text-3xl font-bold leading-none sm:text-3xl text-center">Blog</h1> 
            
            <div className='grid lg:grid-cols-2 grid-cols-1 p-10'>
                {/* left parts */}
                <div>
                <div className="experienceCard">
			            <div className='lines'></div>
                            <div className='icons'>
                            
                               <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" alt="" />
                            </div>    
                    </div>
                </div>
               
        {/* right parts */}
             <div>
                  <div className='flex align-center justify-center'>
                    <div>LiveDemo</div>
                    <div>Code</div>
                    <div>Details</div>
                  </div>

                <h3>title</h3>
                 <p>details</p>
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

export default Blog;