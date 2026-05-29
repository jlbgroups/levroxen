import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge text-gradient">EMPOWERING BUSINESS THROUGH TALENT</span>
          <h1 className="hero-title">
            Where Technology Meets Global Talent for <span className="text-gradient">Limitless Growth.</span>
          </h1>
          <p className="hero-description">
            Levroxen Software Innovations specializes in IT Staffing & Consulting, Custom Software Development, and Managed Services across USA.
          </p>
          
          <div className="hero-buttons">
            <Link to="/services">
              <button className="btn-primary">
                Explore Solutions <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-outline-white">
                Talk to an Expert <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          <div className="hero-rating">
            <div className="rating-avatar">LS</div>
            <div className="rating-content">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#0066FF" color="#0066FF" />
                ))}
              </div>
              <p>Top rated by <strong>100+ clients</strong></p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container glass">
            <img src="/hero-image.png" alt="Levroxen Team" className="hero-image" />
            <div className="floating-card glass">
              <div className="pulse-dot"></div>
              <div>
                <strong>USA Pipeline</strong>
                <p>Headquartered in USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
