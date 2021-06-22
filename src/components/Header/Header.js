import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuIcon from './menu.png';
import { useState } from 'react';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState('close');
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className='navbar padding-x'>
      <Logo />
      <NavMenu display={navbarOpen ? 'close' : ''} />
      <div className='menu-btn' onClick={handleToggle}>
        <div className='menu-btn__burger'></div>
      </div>
    </div>
  );
};

export default Header;
