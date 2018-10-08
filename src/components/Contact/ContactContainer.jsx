import React, { Component } from 'react';
import ContactForm from './ContactForm';

import './contact.scss';

class ContactContainer extends Component {
   render() {
      return(
         <div className="contact__container">
            <header className="contact__header">
               <h2>Call me and try our services.</h2>
               <p>Call me to begin a free consultation and provide a swimming pool service plan.</p>
            </header>
            <ContactForm />
         </div>
      )
   }
};

export default ContactContainer;