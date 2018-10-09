import React from 'react'

import Navbar from '../components/Navigation/Navbar.jsx'
import Footer from './Footer';
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
