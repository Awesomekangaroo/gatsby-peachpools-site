import React, { Component } from 'react';
import './contact.scss';

class ContactContainer extends Component {
   render() {
      return(
         <div className="contact__container">
            <header className="contact__header">
               <h2>Drop me a line and try our services.</h2>
               <p>Call or email to begin a free consultation.</p>
            </header>
            <div className="contact__body-content">
               <span>Call Andres at</span>
               <a href="tel:">
                  <p className="contact__number">+1 (678) 732 6400</p>
               </a>
               <span className="divider">
                  <span>or</span>
               </span>
               <p>send us a line at:</p>
               <a className="contact__body--email" href="mailto:garciandy@hotmail.com">garciandy@hotmail.com</a>
            </div>
         </div>
      )
   }
};

export default ContactContainer;