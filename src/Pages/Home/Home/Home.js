import React from 'react';
import About from '../../About/About/About';
import Contact from '../../Contact/Contact/Contact';
import Experience from '../../Experience/Experience/Experience';
import HomeBanner from '../../HomeBanner/HomeBanner/HomeBanner';
import Projects from '../../Projects/Projects/Projects';
import Skills from '../../Skills/Skills/Skills';
import './Home';
const Home = () => {
    return (
	    <div className='mx-auto md:max-w-[1240px] sm:max-w-[420px]'>
         <HomeBanner></HomeBanner> 
         <Skills></Skills>
         <Projects></Projects>
         <About></About> 
         <Experience></Experience> 
         <Contact></Contact>
        </div>
    );
};

export default Home;