import React from 'react';
import img from '../../img/outdoor_place.jpg';

const style = {
   background: `url(${img})`,
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'top',
   backgroundSize: 'cover'
}

const IndexHero = () => (
   <section className="index__hero" style={ style }>
      <header className="index-hero__header">
         <h3>You enjoy your swimming pool. We'll do the maintaining.</h3>
         <span className="detail">Atlanta swimming pool, maintenance business.</span>
         <button className="index-hero__cta">Get Started Now</button>
      </header>
   </section>
);

export default IndexHero;