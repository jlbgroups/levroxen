import React, { useState } from 'react';
import { MessageSquare, X, Mail, Phone } from 'lucide-react';
import './QuickConnect.css';

const QuickConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="quick-connect-wrapper">
      {/* Expanded Menu */}
      <div className={`quick-connect-menu ${isOpen ? 'open' : ''}`}>
        <a href="mailto:admin@levroxen.com" className="qc-item">
          <div className="qc-icon mail"><Mail size={18} /></div>
          <span>Email Us</span>
        </a>
        <a href="tel:+918341296994" className="qc-item">
          <div className="qc-icon phone"><Phone size={18} /></div>
          <span>Call Support</span>
        </a>
      </div>

      {/* Main Floating Button */}
      <button 
        className={`quick-connect-btn ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Quick Connect"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="qc-pulse"></span>}
      </button>
    </div>
  );
};

export default QuickConnect;
