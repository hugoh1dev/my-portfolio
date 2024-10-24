import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              HUGO <span>JUNIOR</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Digital Creator',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='flex items-center justify-between gap-3 btn btn-lg'>
                  Contact me
                  <FaWhatsapp size={24} />
                </button>
              <a href='https://www.github.com/hugoh1dev' className='text-gradient btn-link' target='blank'>
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.github.com/hugoh1dev' target='blank'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/hugo-junior-a5315a263/' target='blank'>
                <FaLinkedin />
              </a>
              {/* <a href='#' target='blank'>
                <FaWhatsapp />
              </a> */}
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial='hidden' 
            whileInView={'show'}
            className='hidden lg:flex flex-1 maw-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
