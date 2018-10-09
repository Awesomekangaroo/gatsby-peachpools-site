import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../img/logo.svg'

import '../../sass/css-reset.scss';
import './navigation.scss';

class Navbar extends Component {
  state = {
    isMenuOpen: null
  }

  handleMenu = () => 
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }))

  render() {
    const menu = this.state;
    return(
      <nav className="navigation is-transparent">
        <div className="flex-item">
          <button className="navbar-menu--btn" onClick={this.handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-menu__container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="Peachpool brand logo" style={{ width: '88px' }} />
                </figure>
              </Link>
            </div>
                <div className={`nav-section flex-left ${menu.isMenuOpen ? 'is-active': ''}`}>
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
              <div className={`nav-section flex-right ${menu.isMenuOpen ? 'is-active': ''}`}>
                <div className="navbar-menu__item">
                  <span>+1 (678) 732-6400</span>
                </div>
                <Link to="/contact">
                  <button className="navbar-menu__cta">Get Started Now</button>
                </Link>
              </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
