import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import IndexHero from '../components/Index/IndexHero';
import ContactContainer from '../components/Contact/ContactContainer';

import GridContainer from '../components/Layouts/GridContainer';
import GridColumn from '../components/Layouts/GridColumn';
import GridRow from '../components/Layouts/GridRow';
import GridRowCol from '../components/Layouts/GridRowCol';

import SectionContainer from '../components/Layouts/SectionContainer';
import '../components/Index/index.scss';

// Index images
import img1 from '../img/house_outdoor.jpg'

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark
    const greyBG = { background: '#f6f6f6' }
    return (
      <Layout>
        <div className="index__landing">
          <IndexHero />
          {/* Intro Inner */}
          <SectionContainer css={greyBG}>
            <GridContainer>
              <GridColumn>
                <div className="promo-section promo__inner--text">
                  <p>You’re a small business owner with lots to do. We’re professional bookkeepers with experience serving entrepreneurs. </p>
                  <p>
                  Let us take bookkeeping off your hands forever—so you can focus on what matters most.</p>
                </div>
                <hr />
              </GridColumn>
            </GridContainer>
          </SectionContainer>
          {/* First Intro */}
            <GridRowCol>
              <aside className="flex-item">
                <img src={img1} alt="Patio outdoor image" />
              </aside>
              <div className="promo-section flex-item">
                <h2 className="title">Service you need</h2>
                <p>Data you can’t do without
                Monthly financial statements and expense overviews keep you in control of your money. At-a-glance visual reports help you see the big picture and give you actionable insights to help you grow your business. You’ll never be in the dark again.</p>
              </div>
            </GridRowCol>
            {/* Second Intro */}
            <GridRowCol>
              <div className="promo-section flex-item">
                <h2 className="title">Service you need</h2>
                <p>Data you can’t do without
                Monthly financial statements and expense overviews keep you in control of your money. At-a-glance visual reports help you see the big picture and give you actionable insights to help you grow your business. You’ll never be in the dark again.</p>
              </div>
              <aside className="flex-item">
                <img src={img1} alt="Patio outdoor image" />
              </aside>
            </GridRowCol>
            <GridRowCol>
              <aside className="flex-item">
                <img src={img1} alt="Patio outdoor image" />
              </aside>
              <div className="promo-section flex-item">
                <h2 className="title">Service you need</h2>
                <p>Data you can’t do without
                Monthly financial statements and expense overviews keep you in control of your money. At-a-glance visual reports help you see the big picture and give you actionable insights to help you grow your business. You’ll never be in the dark again.</p>
              </div>
            </GridRowCol>
          </div>
          <ContactContainer />
          {/* Footer Here */}
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
