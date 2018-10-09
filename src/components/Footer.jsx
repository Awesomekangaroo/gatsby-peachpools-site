import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo_transparent.png';

const Footer = () => (
   <footer className="main__footer">
      <img src={logo} alt="Peachpool brand logo" style={{ width: '200px' }}/>
      <ul className="footer__links">
         <li>
            <Link to="/about">
               About
            </Link>
         </li>
         <li>
            <Link to="/products">
               Products
            </Link>
         </li>
         <li>
            <Link to="/products">
               Services
            </Link>
         </li>
      </ul>
   </footer>
);

export default Footer;