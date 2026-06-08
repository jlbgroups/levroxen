import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/logo.png" alt="Levroxen Logo" className="logo-image" style={{ height: '75px', objectFit: 'contain', marginBottom: '16px' }} />
            </div>
            <p className="footer-desc">
              Levroxen LLC provides IT consulting, software development, and managed services across the USA.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>NAVIGATION</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>EXPERTISE</h4>
            <ul>
              <li><a href="#">Cloud Management</a></li>
              <li><a href="#">Enterprise Management</a></li>
              <li><a href="#">Data & AI</a></li>
              <li><a href="#">Consulting & Staffing</a></li>
              <li><a href="#">Background Verification</a></li>
              <li><a href="#">Network Management</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>LET'S CONNECT</h4>
            <div className="contact-item">
              <Mail size={16} color="#0066FF" />
              <a href="mailto:admin@levroxen.com">admin@levroxen.com</a>
            </div>
            <div className="contact-item">
              <Phone size={16} color="#0066FF" />
              <div>
                <a href="tel:+918688456559">+91 86884 56559</a>
                <a href="tel:+918333837492">+91 8333837492</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
