import React from 'react';
import { ArrowRight } from 'lucide-react';
import './GlobalReach.css';

const GlobalReach = () => {
  return (
    <section className="global-reach section" id="industries">
      <div className="container">
        <div className="global-reach-container">
          <div className="global-reach-content">
            <span className="global-reach-badge">OUR PRESENCE</span>
            <h2 className="global-reach-title">
              Global Reach.<br />
              <span className="text-gradient">Local Expertise.</span>
            </h2>
            <p className="global-reach-desc">
              Headquartered in USA — operating across the United States, building strong tech bridges and lasting partnerships nationwide.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h3>1</h3>
                <p>Country</p>
              </div>
              <div className="stat-card">
                <h3>100+</h3>
                <p>Clients</p>
              </div>
              <div className="stat-card">
                <h3>USA</h3>
                <p>HQ</p>
              </div>
            </div>

            <button className="btn-primary" style={{ marginTop: '24px' }}>
              View Our Presence <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="global-reach-map">
            <img src="/map-image.png" alt="Global Reach Map" className="map-image" />
            <div className="map-overlay">
              <div className="overlay-text">
                <div className="pulse-dot blue"></div>
                STRATEGIC TRADE INFRASTRUCTURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
