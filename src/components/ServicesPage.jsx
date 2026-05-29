import React, { useState } from 'react';
import { Cloud, Briefcase, Brain, Users, ShieldCheck, Network, TrendingUp, Code, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const servicesData = [
  {
    id: 'cloud-management',
    title: 'Cloud Management',
    icon: <Cloud size={20} />,
    image: '/svc-cloud.png',
    description: "In today's digital era, the cloud is no longer an option — it's a necessity. At Levroxen, we help businesses harness the full potential of cloud technology to optimize operations, improve collaboration, and reduce infrastructure costs.",
    features: [
      'AWS Cloud Solutions', 'Google Cloud Platform (GCP)',
      'Microsoft Azure', 'Cloud Migration & Lift-and-Shift',
      'Multi-Cloud Architecture Design', 'Cloud Security & Compliance',
      'Cost Optimization & FinOps', '24/7 Cloud Monitoring'
    ],
    details: "Our certified cloud architects work closely with your team to design, deploy, and manage scalable cloud solutions tailored to your business needs. Whether you're migrating legacy systems or building cloud-native applications, we ensure a seamless transition with minimal downtime."
  },
  {
    id: 'enterprise-management',
    title: 'Enterprise Management',
    icon: <Briefcase size={20} />,
    image: '/svc-consulting.png',
    description: "Streamline your enterprise operations with our comprehensive management solutions. We specialize in ERP implementation, SAP outsourcing, and business process automation that drives efficiency across your organization.",
    features: [
      'ERP Implementation & Support', 'SAP Outsourcing & Consulting',
      'Business Process Automation', 'IT Infrastructure Management',
      'Digital Transformation Strategy', 'Enterprise Application Integration',
      'Workflow Optimization', 'Change Management'
    ],
    details: "Our enterprise management team brings decades of combined experience in transforming complex business operations. We help organizations modernize their IT infrastructure, automate repetitive processes, and build a foundation for sustainable growth."
  },
  {
    id: 'data-ai',
    title: 'Data & Artificial Intelligence',
    icon: <Brain size={20} />,
    image: '/svc-ai.png',
    description: "Transform your raw data into actionable business intelligence with our AI and data analytics solutions. We build custom ML models, predictive analytics platforms, and AI-powered automation systems that give you a competitive edge.",
    features: [
      'Machine Learning Models', 'Predictive Analytics',
      'Natural Language Processing', 'Computer Vision Solutions',
      'Data Pipeline Engineering', 'Business Intelligence Dashboards',
      'AI-Powered Automation', 'Data Strategy & Governance'
    ],
    details: "Our data science team leverages cutting-edge AI frameworks and methodologies to extract meaningful insights from your data. From building recommendation engines to implementing intelligent chatbots, we deliver AI solutions that directly impact your bottom line."
  },
  {
    id: 'consulting-staffing',
    title: 'Consulting & Staffing',
    icon: <Users size={20} />,
    image: '/svc-consulting.png',
    description: "Access top-tier IT talent and expert consulting services to accelerate your projects. Our staffing solutions range from short-term contract placements to long-term strategic partnerships, ensuring you always have the right talent at the right time.",
    features: [
      'IT Staff Augmentation', 'Contract-to-Hire Solutions',
      'Permanent Placement', 'Remote Team Building',
      'Technical Consulting', 'Project-Based Staffing',
      'Executive Search', 'Vendor Management'
    ],
    details: "With an extensive network of pre-vetted IT professionals across the USA, we provide rapid, quality staffing solutions. Our rigorous screening process ensures cultural fit and technical excellence, reducing your time-to-hire by up to 60%."
  },
  {
    id: 'background-verification',
    title: 'Background Verification',
    icon: <ShieldCheck size={20} />,
    image: '/svc-cloud.png',
    description: "Protect your organization with our AI-powered, compliance-first background verification services. We deliver thorough background checks completed in 24-48 hours with clear, actionable reports that help you make confident hiring decisions.",
    features: [
      'Criminal Background Checks', 'Employment Verification',
      'Education Verification', 'Reference Checks',
      'Drug Screening Coordination', 'Identity Verification',
      'Social Media Screening', 'Continuous Monitoring'
    ],
    details: "Our verification platform combines AI-powered automation with human expertise to deliver fast, accurate results. We maintain full compliance with FCRA, EEOC, and state-specific regulations, ensuring your hiring process is both efficient and legally sound."
  },
  {
    id: 'network-management',
    title: 'Network Management',
    icon: <Network size={20} />,
    image: '/svc-cloud.png',
    description: "Keep your business connected and secure with our proactive network management services. From monitoring and maintenance to security and optimization, we ensure your network infrastructure runs smoothly around the clock.",
    features: [
      'Network Monitoring 24/7', 'Firewall & Security Management',
      'VPN Configuration', 'Bandwidth Optimization',
      'Network Architecture Design', 'Wireless Network Solutions',
      'Disaster Recovery Planning', 'Performance Analytics'
    ],
    details: "Our network operations center provides continuous monitoring and rapid incident response. We use advanced tools to predict and prevent network issues before they impact your business, maintaining 99.9% uptime for our managed clients."
  },
  {
    id: 'sales',
    title: 'Sales',
    icon: <TrendingUp size={20} />,
    image: '/svc-consulting.png',
    description: "Scale your revenue pipeline with our strategic sales outsourcing and lead generation services. We combine data-driven strategies with seasoned sales professionals to help you reach new markets and close more deals.",
    features: [
      'Lead Generation & Qualification', 'Sales Pipeline Management',
      'Account-Based Marketing', 'CRM Implementation',
      'Sales Process Optimization', 'Market Research & Analysis',
      'Inside Sales Teams', 'Revenue Analytics'
    ],
    details: "Our sales team integrates seamlessly with your existing operations, bringing proven methodologies and market expertise. We focus on building sustainable revenue streams through relationship-based selling and strategic market positioning."
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: <Code size={20} />,
    image: '/svc-software.png',
    description: "From concept to deployment, we build custom software solutions tailored to your unique business requirements. Our full-stack development team creates scalable, secure, and high-performance applications across web, mobile, and enterprise platforms.",
    features: [
      'Full-Stack Web Development', 'Mobile App Development',
      'API Design & Integration', 'UI/UX Design',
      'DevOps & CI/CD Pipelines', 'Quality Assurance & Testing',
      'Microservices Architecture', 'Legacy System Modernization'
    ],
    details: "We follow agile development methodologies to deliver software that evolves with your business. Our tech stack includes React, Node.js, Python, Java, .NET, and more — chosen based on what best fits your project requirements and long-term scalability goals."
  },
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    icon: <Globe size={20} />,
    image: '/svc-ai.png',
    description: "Focus on your core business while we handle your IT. Our comprehensive managed IT services provide 24/7 helpdesk support, proactive maintenance, and strategic technology consulting to keep your systems running at peak performance.",
    features: [
      '24/7 IT Helpdesk Support', 'Proactive System Monitoring',
      'Patch Management & Updates', 'Asset Management',
      'IT Strategy & Planning', 'Vendor Management',
      'Cybersecurity Services', 'Compliance Management'
    ],
    details: "Our managed IT services give you enterprise-level IT support without the overhead of a full in-house team. We become your trusted technology partner, aligning IT initiatives with your business goals and ensuring you stay ahead of the technology curve."
  }
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(servicesData[0].id);

  const currentService = servicesData.find(s => s.id === activeService);

  return (
    <section className="services-page">
      {/* Service Detail Section */}
      <div className="container services-page-layout">
        <div className="services-sidebar">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`sidebar-item ${activeService === service.id ? 'active' : ''}`}
              onClick={() => setActiveService(service.id)}
            >
              <span className="sidebar-icon">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        <div className="services-detail">
          <div className="detail-image-wrapper">
            <img src={currentService.image} alt={currentService.title} className="detail-image" />
            <div className="detail-image-overlay">
              <span className="detail-overlay-icon">{currentService.icon}</span>
              <h3>{currentService.title}</h3>
            </div>
          </div>

          <div className="detail-content">
            <p className="detail-description">{currentService.description}</p>

            <div className="detail-features">
              {currentService.features.map((feature, i) => (
                <div className="feature-item" key={i}>
                  <CheckCircle2 size={16} color="#0066FF" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <p className="detail-extra">{currentService.details}</p>

            <Link to="/contact">
              <button className="btn-primary" style={{ marginTop: '24px' }}>
                Get Started <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* All Services at a Glance */}
      <div className="services-glance">
        <div className="container">
          <span className="glance-badge text-gradient">ALL SERVICES AT A GLANCE</span>
          <div className="glance-grid">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`glance-card hover-lift ${activeService === service.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveService(service.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="glance-icon">{service.icon}</div>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Not Sure CTA */}
      <div className="services-cta-banner">
        <div className="container">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Talk to our team. We'll assess your situation and recommend the right solution for your business.</p>
          <Link to="/contact">
            <button className="btn-primary" style={{ background: '#fff', color: 'var(--text-primary)' }}>
              Schedule a Consultation <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
