import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GlobalReach from '../components/GlobalReach';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <GlobalReach />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
