import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, ChevronDown, Cloud, Briefcase, Brain, Users, ShieldCheck, Network, TrendingUp, Code, Globe } from 'lucide-react';
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo.png" alt="Levroxen Logo" className="logo-image" style={{ height: '65px', objectFit: 'contain' }} />
          </Link>
        </div>

        <ul className={`navbar-links ${isMobileOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}>About Us</Link></li>
          <li
            className="dropdown-parent"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={(e) => {
               if(window.innerWidth <= 992) {
                 e.preventDefault();
               } else {
                 closeMobileMenu();
               }
            }}>
              Services <ChevronDown size={14} />
            </Link>
            {showDropdown && (
              <div className="services-dropdown">
                {serviceLinks.map((item, i) => (
                  <Link to="/services" key={i} className="dropdown-item" onClick={closeMobileMenu}>
                    <span className="dropdown-icon">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''} onClick={closeMobileMenu}>Industries</Link></li>
          <li><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''} onClick={closeMobileMenu}>Careers</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link></li>
          
          <li className="mobile-only-cta">
            <Link to="/contact" onClick={closeMobileMenu}>
              <button className="btn-primary" style={{width: '100%', marginTop: '16px'}}>
                Let's Connect <ArrowRight size={16} />
              </button>
            </Link>
          </li>
        </ul>

        <div className="navbar-cta hidden-mobile">
          <Link to="/contact">
            <button className="btn-primary">
              Let's Connect <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
