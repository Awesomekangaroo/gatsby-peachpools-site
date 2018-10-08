import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

const Footer = () => (
   <footer className="main__footer">
      <img src={logo} alt="Brand logo for footer" style={{ width: '88px' }}/>
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