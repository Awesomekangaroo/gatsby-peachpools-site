import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navigation/Navbar.jsx'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Peachpools" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
