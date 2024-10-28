import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { FaGithub } from 'react-icons/fa';

// services data
const services = [
  {
    name: 'React.js Development',
    description: 'I develop dynamic and responsive web applications using React.js. My approach focuses on creating intuitive and efficient interfaces, delivering an exceptional user experience.',
    link: 'Learn More',
  },
  {
    name: 'React Native Development',
    description: 'I create cross-platform mobile applications using React Native. My goal is to build seamless and engaging user experiences, ensuring high performance on both iOS and Android devices.',
    link: 'Learn More',
  },
  {
    name: 'Next.js Development',
    description: 'I build server-rendered applications using Next.js, leveraging its powerful features for optimized performance and SEO. My focus is on delivering fast, scalable solutions that enhance the user experience.',
    link: 'Learn More',
  },
  {
    name: 'Vue.js Development',
    description: 'I specialize in building interactive user interfaces using Vue.js. My approach emphasizes component-based architecture, enabling scalable and maintainable applications that provide a smooth user experience.',
    link: 'Learn More',
  },
]


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              What I Do.
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Developer with over 12 months of experience.
            </h3>
            <a 
              href="https://github.com/hugoh1dev?tab=repositories" 
              target="_blank"
              className='btn btn-sm flex items-center justify-center gap-x-4 h-[50px] w-[200px]'
            >
              See my work
              <FaGithub size={24} />
            </a>
          </motion.div>
          {/* services */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* services list */}
            <div >
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
};

export default Services;
