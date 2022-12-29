import React from 'react';
import About from '../../About/About/About';
import Contact from '../../Contact/Contact/Contact';
import Experience from '../../Experience/Experience/Experience';
import HomeBanner from '../../HomeBanner/HomeBanner/HomeBanner';
import Projects from '../../Projects/Projects/Projects';
import Skills from '../../Skills/Skills/Skills';

const Home = () => {
    return (
	    <div>
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