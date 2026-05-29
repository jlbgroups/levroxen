import React from 'react';
import { Cloud, Briefcase, Brain, Users, ShieldCheck, Network, TrendingUp, Code, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesList = [
  {
    title: 'Cloud Management',
    description: 'AWS, Google Cloud & Azure solutions — design, deploy, and manage for efficiency, security, and scalability.',
    icon: <Cloud size={24} />,
    color: '#0066FF'
  },
  {
    title: 'Enterprise Management',
    description: 'ERP, SAP Outsourcing, business process automation, and IT infrastructure management.',
    icon: <Briefcase size={24} />,
    color: '#475569'
  },
  {
    title: 'Data & Artificial Intelligence',
    description: 'ML models, predictive analytics, AI-powered automation to transform data into actionable decisions.',
    icon: <Brain size={24} />,
    color: '#475569'
  },
  {
    title: 'Consulting & Staffing',
    description: 'Expert IT consulting and top-tier talent acquisition — from short-term projects to long-term growth.',
    icon: <Users size={24} />,
    color: '#475569'
  },
  {
    title: 'Background Verification',
    description: 'AI-powered, compliance-first background checks completed in 24-48 hours with clear actionable reports.',
    icon: <ShieldCheck size={24} />,
    color: '#0066FF',
    featured: true
  },
  {
    title: 'Network Management',
    description: 'Proactive monitoring, security management and expert support to keep your network running smoothly.',
    icon: <Network size={24} />,
    color: '#475569'
  },
  {
    title: 'Sales',
    description: 'Strategic sales outsourcing and lead generation to scale your revenue pipeline efficiently.',
    icon: <TrendingUp size={24} />,
    color: '#475569'
  },
  {
    title: 'Custom Software Development',
    description: 'End-to-end software engineering, from mobile apps to complex enterprise platforms.',
    icon: <Code size={24} />,
    color: '#475569'
  },
  {
    title: 'Managed IT Services',
    description: 'Comprehensive IT support, 24/7 helpdesk, and strategic technology consulting for your business.',
    icon: <Globe size={24} />,
    color: '#475569'
  }
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className={`service-card hover-lift ${service.featured ? 'featured' : ''}`} key={index}>
              <div className="service-icon" style={{ 
                backgroundColor: service.featured ? '#0066FF' : '#F1F5F9',
                color: service.featured ? '#FFF' : '#0F172A'
              }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <Link to="/services" className="service-link">
                Explore Solutions <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
