import React from 'react';

const Contact = () => {
    return (
        <div className="px-6 py-24 bg-sky-900 text-gray-100">
            <h2 className='text-3xl text-center text-gray-100 font-bold sm:text-4xl py-6'><span className='text'>Contact</span> Me</h2>
          
            <hr />
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
      <div className="w-full px-4 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3 dark:bg-gray-900">
                
                <form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm"><span className="label-text text-gray-50 text-2xl">Your name</span></label>
                          <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 py-2 " />
                    </div>
                    
                    <div>
                        <label for="email" className="text-sm ">
                         <span className="label-text text-gray-50 text-2xl">Email address</span></label>
                         <input id="email" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 py-2 " />
                    </div>

                    <div>
                        <label for="message" className="text-sm ">
                         <span className="label-text text-gray-50 text-2xl">Message</span></label>
                         <textarea name='message' id="message" type="text" placeholder="message" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 py-2 " />
                    </div>

                    <button type="button" className="w-full py-2 font-semibold rounded bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 from-violet-500 to-pink-500 dark:text-gray-900">Submit</button>
                </form>
            </div>

            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="" className="object-cover w-full rounded-md xl:col-span-2 dark:bg-gray-500 pt-12 px-6" />
	</div>
		
       
    </div>
        
    );
};

export default Contact;