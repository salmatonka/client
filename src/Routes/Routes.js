import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import Main from '../Layout/Main';
import About from '../Pages/About/About/About';


import Blog from '../Pages/Blog/Blog/Blog';
import Contact from '../Pages/Contact/Contact/Contact';
import Experience from '../Pages/Experience/Experience/Experience';
import Home from '../Pages/Home/Home/Home';
import ProjectDetails from '../Pages/Projects/ProjectDetails/ProjectDetails';
import Projects from '../Pages/Projects/Projects/Projects';
import Skills from '../Pages/Skills/Skills/Skills';
import SomeProjects from '../Pages/Projects/SomeProjects/SomeProjects';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
          
           {
                path:'/',
                element:<Home></Home>
            },
           {
                path:'/home',
                element:<Home></Home>
            },
            
            {
                path:'/skills',
                element:<Skills></Skills>
            },
            
            {
                path:'/someProjects',
                element:<SomeProjects></SomeProjects>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/projectDetails/:id',
                element:<ProjectDetails></ProjectDetails>,
                loader:({params})=>
                    fetch(`https://portfolio-server-topaz-ten.vercel.app/services/${params.id}`)
            },
           {
                path:'/about',
                element:<About></About> 
            },
           
           {
                path:'/blog',
                element:<Blog></Blog>
            }, 
           {
                path:'/contact',
                element:<Contact></Contact>
            },
           
            
        ]}
    ])
export default router;