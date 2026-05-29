import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to scale your business with top talent?</h2>
            <p className="cta-desc">IT Staffing + Software Development expertise, under one roof.</p>
          </div>
          <Link to="/contact">
            <button className="btn-primary cta-btn">
              Get in Touch <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
