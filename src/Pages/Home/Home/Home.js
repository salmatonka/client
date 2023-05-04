import React from 'react';
import About from '../../About/About/About';
import Contact from '../../Contact/Contact/Contact';
import HomeBanner from '../../HomeBanner/HomeBanner/HomeBanner';
import Projects from '../../Projects/Projects/Projects';
import Skills from '../../Skills/Skills/Skills';
import './Home';
const Home = () => {
    return (
	    <div className='mx-auto md:max-w-[1240px] sm:max-w-[420px]'>
         <HomeBanner></HomeBanner> 
         <Projects></Projects>
         <Skills></Skills>
         <About></About> 
         <Contact></Contact>
        </div>
    );
};

export default Home;