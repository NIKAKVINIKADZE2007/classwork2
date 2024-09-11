import React from 'react';
import ReactDOM from 'react-dom/client';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  let footer = 'footer';
  return (
    <div className='footer' key={footer}>
      copyright {year}
    </div>
  );
};

export default Footer;
