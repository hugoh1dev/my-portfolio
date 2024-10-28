import React from 'react';
// images
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <Link 
            to='home'
            smooth={true}
            className='cursor-pointer w-[111px] h-[48px] flex items-center justify-center'
          >
            <img src={Logo} alt='logo' />
          </Link>
          {/* button */}
          <Link
            to='contact'
            smooth={true}
            className='cursor-pointer flex items-center justify-center'
          >
            <button className='btn btn-sm'>
              Work with me
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
