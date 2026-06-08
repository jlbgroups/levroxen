import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Select a service...',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic verification
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (First Name, Last Name, Email, and Message).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Fetch the access key from environment variables or use a default one for Web3Forms
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
          from_name: 'Levroxen Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: 'Select a service...',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your internet connection and try again.');
    }
  };

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-color)', minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <span className="text-gradient" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>CONTACT US</span>
          <h1 style={{ fontSize: '52px', color: 'var(--text-primary)', marginBottom: '20px' }}>Get In Touch</h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px' }}>Have a project in mind or want to learn more about our services? We'd love to hear from you.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* Contact Form */}
          <div style={{ background: '#FFF', borderRadius: 'var(--radius-lg)', padding: '48px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.05)' }}>
            {status === 'success' ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#ECFDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981',
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.2)'
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2 style={{ fontSize: '28px', color: '#064E3B', margin: 0, fontWeight: 700 }}>Message Sent!</h2>
                <p style={{ fontSize: '16px', color: '#047857', maxWidth: '360px', lineHeight: '1.6', margin: 0, fontWeight: 500 }}>
                  Thank you for reaching out. We have received your message and will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                  style={{ marginTop: '16px', padding: '12px 24px', fontSize: '15px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '28px', marginBottom: '32px', fontWeight: 700, color: 'var(--text-primary)' }}>Send us a message</h2>
                
                {status === 'error' && (
                  <div style={{
                    padding: '14px 18px',
                    background: '#FEF2F2',
                    border: '1px solid #FCA5A5',
                    borderRadius: '10px',
                    color: '#991B1B',
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '24px',
                    lineHeight: '1.5'
                  }}>
                    {errorMessage}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John" 
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe" 
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} 
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com" 
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210" 
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Service Needed</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif', color: 'var(--text-secondary)', background: '#FFF' }}
                    >
                      <option>Select a service...</option>
                      <option>Cloud Management</option>
                      <option>Enterprise Management</option>
                      <option>Data & AI</option>
                      <option>Consulting & Staffing</option>
                      <option>Background Verification</option>
                      <option>Network Management</option>
                      <option>Custom Software Development</option>
                      <option>Managed IT Services</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5} 
                      placeholder="Tell us about your project..." 
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical' }} 
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary" 
                    style={{ justifyContent: 'center', padding: '14px 32px', fontSize: '16px', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'submitting' ? (
                      <>
                        Sending... <Loader2 className="animate-spin" size={18} style={{ marginLeft: '8px' }} />
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Contact Information</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>Reach out to us directly — we typically respond within 24 business hours.</p>
            </div>

            {[
              { icon: <Mail size={22} color="#0066FF" />, label: 'Email', value: 'admin@levroxen.com', href: 'mailto:admin@levroxen.com' },
              { icon: <Phone size={22} color="#0066FF" />, label: 'Alternate Phone', value: '+91 86884 56559', href: 'tel:+918688456559' },
              { icon: <MapPin size={22} color="#0066FF" />, label: 'Headquarters', value: <>905 N Pershing Ave<br />Salem, MO 65560-1144<br />United States</>, href: null },
              { icon: <Clock size={22} color="#0066FF" />, label: 'Business Hours', value: 'Mon – Fri: 9:00 AM – 6:00 PM (IST)', href: null },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '24px', background: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '48px', height: '48px', background: '#F0F7FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.value}</a>
                  ) : (
                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
