import React from 'react';
import { Target, Eye, Award, CheckCircle, Globe2, Layers } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      {/* Intro Section */}
      <div className="container about-intro">
        <div className="about-content">
          <span className="about-badge text-gradient">ABOUT US</span>
          <h2 className="about-title">About Levroxen</h2>
          <p className="about-desc">
            Levroxen Software Innovations is a premier IT Staffing and Consulting firm dedicated to bridging the talent gap in the digital economy. With expertise spanning IT Staffing, Software Development, and Managed Services, we empower businesses with top-tier technology talent and innovative digital solutions.
          </p>
          <p className="about-desc">
            Operating across the <strong>USA</strong>, we help scaling organizations build high-performing teams and deliver robust software products.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src="/hero-image.png" alt="About Levroxen Team" className="about-img" />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mission-vision">
        <div className="mv-card">
          <div className="mv-icon"><Target size={24} /></div>
          <h3>Our Mission</h3>
          <p>
            To provide innovative IT solutions and elite staffing services that empower our clients to build, scale, and succeed in a rapidly evolving digital landscape. We aim to deliver excellence through expert talent, agile processes, and a customer-centric approach.
          </p>
        </div>
        <div className="mv-card">
          <div className="mv-icon"><Eye size={24} /></div>
          <h3>Our Vision</h3>
          <p>
            To be a global leader in IT talent orchestration and software innovation — transforming businesses with smart human capital and cutting-edge technology that drives digital excellence and mutual success.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container about-stats">
        <div className="stat-item">
          <h4>100+</h4>
          <p>Clients Served</p>
        </div>
        <div className="stat-item">
          <h4>1</h4>
          <p>Primary Market</p>
        </div>
        <div className="stat-item">
          <h4>9+</h4>
          <p>Service Verticals</p>
        </div>
        <div className="stat-item">
          <h4>USA</h4>
          <p>Headquartered</p>
        </div>
      </div>

      {/* Approach Section */}
      <div className="approach-section">
        <div className="container">
          <div className="approach-content text-center">
            <span className="about-badge text-gradient">OUR APPROACH</span>
            <h2 className="approach-title">In a world where talent matters, we bring experts and technology together.</h2>
            <p>At Levroxen, we believe talent is the true driver of innovation. Our unique approach focuses on identifying, nurturing, and deploying top IT professionals who can solve complex problems and build future-ready software solutions.</p>
            <p>Our team combines deep industry insights with rigorous vetting to ensure our clients get the best skills for their specific needs. Whether you're seeking to augment your existing team or build a new product from scratch — Levroxen provides the expertise and dedication you need to win.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us section">
        <div className="container">
          <div className="text-center mb-48">
            <span className="about-badge text-gradient">WHY CHOOSE US</span>
            <h2 className="about-title">Why Choose Levroxen?</h2>
          </div>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><Award size={20} /></div>
              <h4>Proven IT Track Record</h4>
              <p>Demonstrated expertise across multiple IT domains with a history of successful delivery.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><CheckCircle size={20} /></div>
              <h4>Quality & Innovation</h4>
              <p>Commitment to quality, innovation, and client satisfaction in every engagement.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Globe2 size={20} /></div>
              <h4>Global Talent Network</h4>
              <p>Extensive network of skilled professionals across the USA.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Layers size={20} /></div>
              <h4>Agile Delivery</h4>
              <p>Faster time-to-market with agile methodologies and lean development processes.</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;
