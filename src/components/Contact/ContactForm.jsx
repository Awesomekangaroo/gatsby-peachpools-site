import React from 'react';

const ContactForm = () => (
   <form id="contact__form" onSubmit={ (e) => e.preventDefault() }>
      <div className="contact-form__section">
         <label htmlFor="name" hidden>First Name: </label>
         <input type="text" autoComplete="off" name="name" placeholder="First Name" />
      </div>
      <div className="contact-form__section">
         <label htmlFor="email" hidden>Email </label>
         <input type="email" autoComplete="off" name="email" placeholder="Email" />
      </div>
      <button type="submit" className="contact-form__btn">Submit</button>
   </form>
);

export default ContactForm;