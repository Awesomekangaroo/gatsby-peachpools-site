import React from 'react';
import './layout.scss';

const SectionContainer = ({ children, css }) => (
   <section className="SectionContainer" style={ css }>
      { children }
   </section>
);

export default SectionContainer;
