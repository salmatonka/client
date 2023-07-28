import React from 'react';
import About from '../../About/About/About';
import Contact from '../../Contact/Contact/Contact';
import HomeBanner from '../../HomeBanner/HomeBanner/HomeBanner';
import Projects from '../../Projects/Projects/Projects';
import Skills from '../../Skills/Skills/Skills';
import './Home';
import Services from '../../Services/Services/Services';
const Home = () => {
    return (
	    // <div className='mx-auto md:max-w-[1240px] sm:max-w-[420px]'>
        //  <HomeBanner />
        //  <Skills />
        //  <Projects />
        //  <Services />
        //  <About />
        //  <Contact />
        // </div>

        <div>
            <HomeBanner />
            <Skills />
        </div>
    );
};

export default Home;