import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import logo from '../../img/logo_transparent.png'
import icon from '../../img/favicon.ico'

import '../../sass/css-reset.scss';
import './navigation.scss';

class Navbar extends Component {
  state = {
    isMenuOpen: null
  }

  componentDidMount() {
    console.info('Development by http://eloydev.com - @eloydev');
  }

  handleMenu = () =>
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }))

  render() {
    const menu = this.state;
    return (
      <nav className="navigation is-transparent">
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${icon}` }
          ]}
        />
        <div className="flex-item">
          <button className="navbar-menu--btn" onClick={this.handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-menu__container">
            <div className="navbar-brand">
              <Link to="/">
                <figure className="image">
                  <img src={logo} alt="Peachpool brand logo" style={{ width: '150px' }} />
                </figure>
              </Link>
            </div>
            <div className={`nav-section flex-left ${menu.isMenuOpen ? 'is-active' : ''}`}>
              <div className="navbar-menu__item">
                <Link to="/about">
                  About
                    </Link>
              </div>
              <div className="navbar-menu__item">
                <Link to="/products">
                  Services
                    </Link>
              </div>
              <div className="navbar-menu__item">
                <Link to="/contact">
                  Contact
                    </Link>
              </div>
            </div>
            <div className={`nav-section flex-right ${menu.isMenuOpen ? 'is-active' : ''}`}>
              <div className="navbar-menu__item nav__number">
                <span>+1 (678) 732-6400</span>
              </div>
              <Link
                className="navbar-menu__cta"
                to="/contact"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
