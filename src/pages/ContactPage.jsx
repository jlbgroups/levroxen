import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
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
            <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>Send us a message</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Email Address</label>
                <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Service Needed</label>
                <select style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif', color: 'var(--text-secondary)', background: '#FFF' }}>
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
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." style={{ width: '100%', padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical' }} />
              </div>
              <button className="btn-primary" style={{ justifyContent: 'center', padding: '14px 32px', fontSize: '16px' }}>
                Send Message <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Contact Information</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>Reach out to us directly — we typically respond within 24 business hours.</p>
            </div>

            {[
              { icon: <Mail size={22} color="#0066FF" />, label: 'Email', value: 'admin@levroxen.com', href: 'mailto:admin@levroxen.com' },
              { icon: <Phone size={22} color="#0066FF" />, label: 'Phone', value: '+91 83412 96994', href: 'tel:+918341296994' },
              { icon: <Phone size={22} color="#0066FF" />, label: 'Alternate Phone', value: '+91 86884 56559', href: 'tel:+918688456559' },
              { icon: <MapPin size={22} color="#0066FF" />, label: 'Headquarters', value: 'USA', href: null },
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
