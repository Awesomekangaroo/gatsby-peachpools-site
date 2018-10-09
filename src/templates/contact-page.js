import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import ContactContainer from '../components/Contact/ContactContainer';
import Layout from '../components/Layout';

export const ContactTemplate = (props) => (
  <Fragment>
    <section className="contact__template">
        <h1 className="title">{props.frontmatter.title}</h1>
        <div className="contact__body" dangerouslySetInnerHTML={{ __html: props.html }}></div>
    </section>
    <ContactContainer />
  </Fragment>
);

const ContactPage = ({ data }) => {
   return(
      <Layout>
        <Helmet 
          title={`${data.markdownRemark.frontmatter.title} | PeachPools`}
          meta={[
          { name: "description", content: 'Looking for swimming pool service in Atlanta? Contact PeachPools to begin your service and have your pool stand out.'}
          ]}
        />
        <ContactTemplate { ...data.markdownRemark } />
      </Layout>
   )
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`