import React from 'react';

const Navbar = ({ display }) => {
  return (
    <nav>
      <ul className={display}>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about us</a>
        </li>
        <li>
          <a href='#'>dance classes</a>
        </li>
        <li>
          <a href='#'>prices</a>
        </li>
        <li>
          <a href='#'>contact</a>
        </li>
        <li>
          <a href='#'>sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
