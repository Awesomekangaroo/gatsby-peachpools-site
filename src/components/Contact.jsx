import React from 'react';
import ContactContainer from './Contact/ContactContainer';
import Layout from '../components/Layout';

const ContactTemplate = () => (
   <Layout>
      <section className="contact__template">
         <h2>ContactTemplate.jsx</h2>
      </section>
      <ContactContainer />
   </Layout>
);

export default ContactTemplate;