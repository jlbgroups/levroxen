import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, ChevronDown, Cloud, Briefcase, Brain, Users, ShieldCheck, Network, TrendingUp, Code, Globe } from 'lucide-react';
import './Navbar.css';

const serviceLinks = [
  { name: 'Cloud Management', icon: <Cloud size={16} /> },
  { name: 'Enterprise Management', icon: <Briefcase size={16} /> },
  { name: 'Data & Artificial Intelligence', icon: <Brain size={16} /> },
  { name: 'Consulting & Staffing', icon: <Users size={16} /> },
  { name: 'Background Verification', icon: <ShieldCheck size={16} /> },
  { name: 'Network Management', icon: <Network size={16} /> },
  { name: 'Sales', icon: <TrendingUp size={16} /> },
  { name: 'Custom Software Development', icon: <Code size={16} /> },
  { name: 'Managed IT Services', icon: <Globe size={16} /> },
];

const Navbar = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo.png" alt="Levroxen Logo" className="logo-image" style={{ height: '65px', objectFit: 'contain' }} />
          </Link>
        </div>

        <ul className="navbar-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li
            className="dropdown-parent"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services <ChevronDown size={14} />
            </Link>
            {showDropdown && (
              <div className="services-dropdown">
                {serviceLinks.map((item, i) => (
                  <Link to="/services" key={i} className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    <span className="dropdown-icon">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''}>Industries</Link></li>
          <li><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>

        <div className="navbar-cta">
          <Link to="/contact">
            <button className="btn-primary">
              Let's Connect <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
