import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// icons
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Freelance Front-end Developer with over 12 months of experience.
            </h3>
            <p className='mb-6'>
              Specialized in JavaScript/TypeScript development, learning technologies: React | Next | React Native
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={22} duration={4} /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Months of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={15} duration={4} /> : null }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={6} duration={4} /> : null }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br/>
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <button className='flex items-center gap-x-4 btn btn-lg'>
              Contact me
              <FaWhatsapp size={24} />
            </button>
            <a href='https://www.github.com/hugoh1dev' className='text-gradient btn-link' target='blank'>
              My Portfolio
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
