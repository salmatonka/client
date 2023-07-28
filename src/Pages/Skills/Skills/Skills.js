import React from 'react';
import SkillCards from '../SkillCards/SkillCards';
// import '../Skills.css';

export const Skills = () => {

   const allSkills = [
      {
         id: 1,
         icon: "https://i.ibb.co/w0nnFJ1/html-5.png",
         title: "HTML",
      },
      {
         id: 2,
         icon: "https://i.ibb.co/nBsgZtL/css-3.png",
         title: "CSS",
      },
      {
         id: 3,
         icon: "https://i.ibb.co/QCgRmm4/kindpng-1636552.png",
         title: "BootStrap",
      },
      {
         id: 4,
         icon: "https://i.ibb.co/6cMQVCf/tailwind-css-icon.png",
         title: "TailwindCSS",
      },

      {
         id: 5,
         icon: "https://i.ibb.co/dpTdxmf/js.png",
         title: "JavaScript",
      },
      // {
      //     id: 6,
      //     icon: "https://i.ibb.co/Cb8hyCX/typescript.png",
      //     title: "TypeScript",
      // },
      { id: '6',
      icon:'https://w7.pngwing.com/pngs/620/609/png-transparent-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-angle-rectangle-triangle-thumbnail.png', 
      title: "Firebase" },
      {
         id: 7,
         icon: "https://i.ibb.co/Fqc5ymR/Daco-5903330.png",
         title: "ReactJS",

      },
      {
         id: 8,
         icon: "https://i.ibb.co/611STf5/pngwing-com-4.png",
         title: "NodeJS",

      },
      {
         id: 9,
         icon: "https://i.ibb.co/NFTYfwY/pngwing-com-5.png",
         title: "ExpressJS",

      },
      {
         id: 10,
         icon: "https://i.ibb.co/SVxwf9x/pngwing-com-6.png",
         title: "MongoDB",

      },
      {
         id: 11,
         icon: 'https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png',
         title: "Metarial UI"
      },
      {
         id: 12,
         icon: "https://i.ibb.co/dbCJ9G9/github-logo.png",
         title: "GitHub",

      },

      {
         id: '13',
         icon: 'https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png',
         title: "Vercel"
      }
   ]

   return (
      //     <section className='py-24 text-gray-100'>
      //       <div className='mh-skills' id='skills-section'>
      //         <div className='header skill-head '>
      //           <h2 className='text-4xl font-bold sm:text-3xl pb-6'>My <span className='text'>Skills</span></h2>
      //           <p className='text-2xl'>Here is my skills to represent my Expertise</p>

      //       </div>

      //        <div className='skill-menu'>
      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Html</p>
      //                 <p className='percent'>95%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='html'></span>
      //                  </div>
      //               </div>



      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Javascript</p>
      //                 <p className='percent'>70%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='javascript'></span>
      //                  </div>
      //               </div>

      //               <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Css</p>
      //                 <p className='percent'>95%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='css'></span>
      //                  </div>
      //               </div>


      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Tailwind</p>
      //                 <p className='percent'>90%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='tailwind'></span>
      //                  </div>
      //               </div>

      //               <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Bootstrap</p>
      //                 <p className='percent'>90%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='bootstrap'></span>
      //                  </div>

      //               </div>

      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>react.js</p>
      //                 <p className='percent'>80%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='react'></span>
      //                  </div>
      //               </div>

      //               <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Material Ui</p>
      //                 <p className='percent'>70%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='materialui'></span>
      //                  </div>
      //               </div>

      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Mongodb</p>
      //                 <p className='percent'>60%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='mongodb'></span>
      //                  </div>
      //               </div>

      //               <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Firebase</p>
      //                 <p className='percent'>65%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='firebase'></span>
      //                  </div>
      //               </div>

      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Node JS</p>
      //                 <p className='percent'>60%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='nodejs'></span>
      //                  </div>
      //               </div>

      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Next JS</p>
      //                 <p className='percent'>50%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='nextjs'></span>
      //                  </div>
      //               </div>
      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Github</p>
      //                 <p className='percent'>85%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='github'></span>
      //                  </div>
      //               </div>

      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Vercel</p>
      //                 <p className='percent'>80%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='vercel'></span>
      //                  </div>
      //               </div>
      //             <div className='skill-bar'>
      //                <div className='info'>
      //                 <p>Figma</p>
      //                 <p className='percent'>50%</p>
      //                 </div>
      //                  <div className='bar'>
      //                   <span className='figma'></span>
      //                  </div>
      //               </div>
      //       </div>

      //   </div>
      //  </section>


      <div className=' text-gray-400 '>
         <div className='' id=''>
            <div className=' '>
               <h2 className='text-4xl font-bold sm:text-3xl pb-6'>My <span className=''>Skills</span></h2>
               <p className='text-2xl'>Here is my skills to represent my Expertise</p>

            </div>

<div className=''>
   {
      allSkills.map(allSkill => <SkillCards></SkillCards>
       )
   }
</div>







            {/* <div className='skill-menu'>
            <div className='skill-bar'>
               <div className='info'>
                <p>Html</p>
                <p className='percent'>95%</p>
                </div>
                 <div className='bar'>
                  <span className='html'></span>
                 </div>
              </div>

              

            <div className='skill-bar'>
               <div className='info'>
                <p>Javascript</p>
                <p className='percent'>70%</p>
                </div>
                 <div className='bar'>
                  <span className='javascript'></span>
                 </div>
              </div>

              <div className='skill-bar'>
               <div className='info'>
                <p>Css</p>
                <p className='percent'>95%</p>
                </div>
                 <div className='bar'>
                  <span className='css'></span>
                 </div>
              </div>

              
            <div className='skill-bar'>
               <div className='info'>
                <p>Tailwind</p>
                <p className='percent'>90%</p>
                </div>
                 <div className='bar'>
                  <span className='tailwind'></span>
                 </div>
              </div>

              <div className='skill-bar'>
               <div className='info'>
                <p>Bootstrap</p>
                <p className='percent'>90%</p>
                </div>
                 <div className='bar'>
                  <span className='bootstrap'></span>
                 </div>

              </div>

            <div className='skill-bar'>
               <div className='info'>
                <p>react.js</p>
                <p className='percent'>80%</p>
                </div>
                 <div className='bar'>
                  <span className='react'></span>
                 </div>
              </div>

              <div className='skill-bar'>
               <div className='info'>
                <p>Material Ui</p>
                <p className='percent'>70%</p>
                </div>
                 <div className='bar'>
                  <span className='materialui'></span>
                 </div>
              </div>

            <div className='skill-bar'>
               <div className='info'>
                <p>Mongodb</p>
                <p className='percent'>60%</p>
                </div>
                 <div className='bar'>
                  <span className='mongodb'></span>
                 </div>
              </div>

              <div className='skill-bar'>
               <div className='info'>
                <p>Firebase</p>
                <p className='percent'>65%</p>
                </div>
                 <div className='bar'>
                  <span className='firebase'></span>
                 </div>
              </div>

            <div className='skill-bar'>
               <div className='info'>
                <p>Node JS</p>
                <p className='percent'>60%</p>
                </div>
                 <div className='bar'>
                  <span className='nodejs'></span>
                 </div>
              </div>

            <div className='skill-bar'>
               <div className='info'>
                <p>Next JS</p>
                <p className='percent'>50%</p>
                </div>
                 <div className='bar'>
                  <span className='nextjs'></span>
                 </div>
              </div>
            <div className='skill-bar'>
               <div className='info'>
                <p>Github</p>
                <p className='percent'>85%</p>
                </div>
                 <div className='bar'>
                  <span className='github'></span>
                 </div>
              </div>
            
            <div className='skill-bar'>
               <div className='info'>
                <p>Vercel</p>
                <p className='percent'>80%</p>
                </div>
                 <div className='bar'>
                  <span className='vercel'></span>
                 </div>
              </div>
            <div className='skill-bar'>
               <div className='info'>
                <p>Figma</p>
                <p className='percent'>50%</p>
                </div>
                 <div className='bar'>
                  <span className='figma'></span>
                 </div>
              </div>
      </div> */}

         </div>
      </div>


   );
};


export default Skills;

