import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import './ApplyPage.css';

const ApplyPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: 'Software Engineer Trainee',
    resumeLink: '',
    message: ''
  });

  // Pre-fill position if passed via state
  useEffect(() => {
    if (location.state && location.state.jobTitle) {
      setFormData(prev => ({ ...prev, position: location.state.jobTitle }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email subject and body
    const subject = encodeURIComponent(`Application for ${formData.position} - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Hello HR Team,\n\nI am applying for the position of ${formData.position}.\n\n` +
      `Here are my details:\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Resume / Portfolio Link: ${formData.resumeLink}\n\n` +
      `Message / Cover Letter:\n${formData.message}\n\n` +
      `Looking forward to hearing from you.\n\nBest regards,\n${formData.firstName} ${formData.lastName}`
    );

    // Trigger mailto link
    window.location.href = `mailto:admin@levroxen.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="apply-page section">
      <div className="container apply-container">
        <div className="apply-header">
          <span className="text-gradient apply-badge">JOIN THE TEAM</span>
          <h1 className="apply-title">Application Form</h1>
          <p className="apply-desc">Fill out the details below. This will generate an email to our HR team (admin@levroxen.com) with your application details.</p>
        </div>

        <div className="apply-form-wrapper">
          <form className="apply-form" onSubmit={handleSubmit}>
            
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="johndoe@gmail.com" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="form-group">
              <label>Applying For Position *</label>
              <input type="text" name="position" value={formData.position} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Resume / LinkedIn / Portfolio Link *</label>
              <input type="url" name="resumeLink" value={formData.resumeLink} onChange={handleChange} required placeholder="https://drive.google.com/file/..." />
            </div>

            <div className="form-group">
              <label>Cover Letter / Additional Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us why you are a good fit..."></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              Submit Application via Email <Send size={16} />
            </button>
            <p className="form-note">
              Note: Clicking submit will open your email client with the details pre-filled to send to <strong>admin@levroxen.com</strong>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyPage;
