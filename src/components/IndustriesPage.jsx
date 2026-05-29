import React from 'react';
import { ShoppingCart, Landmark, Factory, Cloud, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './IndustriesPage.css';

const industries = [
  {
    badge: 'DIGITAL SOLUTIONS',
    icon: <ShoppingCart size={20} />,
    title: 'Retail & E-commerce',
    description: 'We empower retailers and e-commerce businesses with robust digital platforms and seamless customer experiences. From custom storefronts to integrated inventory management — we help you win in the digital marketplace.',
    features: ['Custom E-commerce Platforms', 'Inventory & OMS Integration', 'Digital Payment Solutions', 'Omnichannel Experience Design'],
    image: '/svc-software.png'
  },
  {
    badge: 'FINANCIAL SOFTWARE',
    icon: <Landmark size={20} />,
    title: 'FinTech & Banking',
    description: 'We deliver secure, scalable, and compliant financial technology solutions. Whether it\'s building digital wallets, payment gateways, or clinical analytics for finance — our expertise ensures your platform is future-ready and safe.',
    features: ['Digital Banking Solutions', 'Secure Payment Gateways', 'Financial Data Analytics', 'Regulatory Compliance IT'],
    image: '/svc-ai.png'
  },
  {
    badge: 'ENTERPRISE MANAGEMENT',
    icon: <Factory size={20} />,
    title: 'Enterprise & Manufacturing',
    description: 'Our Enterprise Management solutions help businesses across manufacturing, finance, and services operate smarter. From ERP implementation and SAP outsourcing to business process automation — we deliver end-to-end services that align with your goals and enhance productivity.',
    features: ['ERP Implementation & SAP Outsourcing', 'Business Process Automation (BPA)', 'Data Management & Analytics', 'IT Infrastructure Management'],
    image: '/svc-cloud.png'
  },
  {
    badge: 'CLOUD MANAGEMENT',
    icon: <Cloud size={20} />,
    title: 'Technology & SaaS',
    description: 'In today\'s digital era, cloud is a necessity. We help technology companies harness the full potential of AWS, Google Cloud, and Microsoft Azure to optimize operations, improve collaboration, and reduce infrastructure costs.',
    features: ['Cloud Architecture & Migration', 'SaaS Product Development', 'DevOps & CI/CD Pipelines', 'Scalability & Performance Tuning'],
    image: '/svc-cloud.png'
  },
  {
    badge: 'CONSULTING & STAFFING',
    icon: <Users size={20} />,
    title: 'Professional Services',
    description: 'We provide expert IT consulting and specialized staffing solutions to help professional services businesses achieve their goals faster. Our team connects you with top-tier talent and industry expertise — ensuring the right skills for the right roles. Smart people. Smarter solutions.',
    features: ['IT & Technology Consulting', 'Temporary & Permanent Staffing', 'Talent Acquisition & Workforce Management', 'Project-Based Staffing Solutions'],
    image: '/svc-consulting.png'
  },
  {
    badge: 'REVENUE GROWTH',
    icon: <TrendingUp size={20} />,
    title: 'Sales',
    description: 'We provide strategic sales solutions and high-performing talent to help businesses scale their revenue and market share. From lead generation to closing complex B2B deals — our sales experts drive results in the USA market.',
    features: ['B2B Sales & Lead Generation', 'Sales Team Augmentation', 'Revenue Strategy Consulting', 'CRM & Pipeline Optimization'],
    image: '/svc-consulting.png'
  }
];

const IndustriesPage = () => {
  return (
    <section className="industries-page">
      {/* Hero Header */}
      <div className="container industries-header">
        <span className="ind-badge text-gradient">INDUSTRIES</span>
        <h1 className="ind-title">Industries We Serve</h1>
        <p className="ind-subtitle">From sales and retail to fintech and manufacturing — Levroxen Software Innovations delivers tailored IT solutions across the sectors that matter most.</p>
      </div>

      {/* Industry Sections */}
      <div className="industries-list">
        {industries.map((industry, index) => (
          <div className={`industry-section ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
            <div className="container industry-row">
              <div className="industry-image-col">
                <img src={industry.image} alt={industry.title} className="industry-img" />
              </div>
              <div className="industry-content-col">
                <div className="industry-badge-row">
                  <div className="industry-icon">{industry.icon}</div>
                  <span className="industry-badge-text text-gradient">{industry.badge}</span>
                </div>
                <h2 className="industry-name">{industry.title}</h2>
                <p className="industry-desc">{industry.description}</p>
                <div className="industry-features">
                  {industry.features.map((f, i) => (
                    <div className="ind-feature" key={i}>
                      <span className="ind-dot"></span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Markets We Operate In */}
      <div className="markets-section">
        <div className="container markets-content">
          <h2>Markets We Operate In</h2>
          <p className="markets-sub">Connecting businesses across the USA.</p>
          <div className="market-card">
            <span className="market-flag">US</span>
            <strong>USA</strong>
            <span className="market-label">Headquarters</span>
          </div>
        </div>
      </div>

      {/* Don't See Your Industry CTA */}
      <div className="container">
        <div className="ind-cta-card">
          <div>
            <h3>Don't see your industry?</h3>
            <p>We work across many more sectors — let's discuss your specific challenges.</p>
          </div>
          <Link to="/contact">
            <button className="btn-primary">
              Talk to an Expert <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;
