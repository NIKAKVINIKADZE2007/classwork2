import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <ul className='header-ul'>
        <li>
          <a href=''>home</a>
        </li>
        <li>
          <a href=''>about us</a>
        </li>
        <li>
          <a href=''>products</a>
        </li>
        <li>
          <a href=''>contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
