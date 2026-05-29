import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, AlertTriangle, BookOpen, Code, Database, Cloud } from 'lucide-react';
import './CareersPage.css';

const prerequisites = [
  {
    title: 'Programming',
    icon: <Code size={20} color="#0066FF" />,
    items: [
      'Object-Oriented Programming (OOP) concepts',
      'Java / C++ / Python proficiency',
      'Inheritance, Interfaces, Exception handling'
    ]
  },
  {
    title: 'Web Basics',
    icon: <BookOpen size={20} color="#0066FF" />,
    items: [
      'HTML, CSS, JavaScript core basics',
      'Client-server architecture understanding',
      'Web protocols and API fundamentals'
    ]
  },
  {
    title: 'Databases',
    icon: <Database size={20} color="#0066FF" />,
    items: [
      'RDBMS understanding (Tables, Joins, Keys)',
      'Writing efficient SQL queries',
      'Data modeling principles'
    ]
  },
  {
    title: 'CRM & Cloud',
    icon: <Cloud size={20} color="#0066FF" />,
    items: [
      'What is CRM and business use-cases',
      'Sales process: Leads, Opportunities',
      'SaaS, PaaS, IaaS differences'
    ]
  }
];

const missionItems = [
  {
    number: '1',
    title: 'IT Career Paths',
    desc: 'Exciting career paths in IT services and enterprise solutions.'
  },
  {
    number: '2',
    title: 'Structured Learning',
    desc: 'Offer structured internships and live industry projects.'
  },
  {
    number: '3',
    title: 'Skill Development',
    desc: 'Conduct skill development workshops and expert mentoring.'
  },
  {
    number: '4',
    title: 'Campus Recruitment',
    desc: 'Recruit talented graduates for permanent roles via PPO.'
  }
];

const opportunities = [
  {
    id: 1,
    title: 'Software Engineer Trainee: Gen AI',
    department: 'AI & Data Science',
    location: 'Remote / WFH',
    type: 'Internship',
    description: 'Join our cutting-edge Gen AI team to build intelligent applications and learn the fundamentals of modern artificial intelligence.',
    requiredSkills: [
      'Proficiency in Python programming',
      'Basic understanding of Machine Learning concepts',
      'Familiarity with LLMs and prompt engineering',
      'Strong analytical and problem-solving skills'
    ]
  },
  {
    id: 2,
    title: 'Software Engineer Trainee: SAP',
    department: 'Enterprise Management',
    location: 'Remote / WFH',
    type: 'Internship',
    description: 'Kickstart your career in enterprise software by learning SAP modules and helping businesses optimize their operations.',
    requiredSkills: [
      'Basic understanding of business processes and ERP systems',
      'Strong logical thinking and analytical abilities',
      'Familiarity with databases (SQL) and OOP concepts',
      'Excellent communication skills'
    ]
  },
  {
    id: 3,
    title: 'Software Engineer Trainee: Application Development',
    department: 'Software Engineering',
    location: 'Remote / WFH',
    type: 'Internship',
    description: 'Build scalable web applications and gain hands-on experience across the full software development lifecycle.',
    requiredSkills: [
      'Strong foundation in Object-Oriented Programming (Java/C++/Python)',
      'Understanding of Web Technologies (HTML, CSS, JavaScript)',
      'Familiarity with version control systems like Git',
      'Knowledge of basic data structures and algorithms'
    ]
  },
  {
    id: 4,
    title: 'Software Engineer Trainee: Salesforce Developer',
    department: 'Cloud Solutions',
    location: 'Remote / WFH',
    type: 'Internship',
    description: 'Learn the world\'s leading CRM platform. You will be trained in Salesforce administration and Apex development.',
    requiredSkills: [
      'Strong OOP concepts (Java or C# experience is highly transferable to Apex)',
      'Understanding of relational databases and data modeling',
      'Basic knowledge of CRM concepts and business workflows',
      'Web development basics (HTML/CSS/JS)'
    ]
  }
];

const CareersPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const scrollToOpportunities = () => {
    document.getElementById('opportunities').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero container">
        <div className="careers-hero-content">
          <span className="careers-badge">STUDENT OPPORTUNITIES</span>
          <h1 className="careers-title">Predict the Future by Creating It.</h1>
          <p className="careers-desc">
            Explore exciting Student opportunities at Levroxen Software Innovations. We offer structured internships and live projects with a modern approach to technology and professional growth in roles like Gen AI, SAP, App Development, and Salesforce Development.
          </p>
          <p className="careers-highlights">
            Duration: 3 Months • Stipend: 10K-12K • PPO: 6 LPA • Work From Home
          </p>
          <button className="btn-primary" onClick={scrollToOpportunities}>
            View Open Positions <ArrowRight size={16} />
          </button>
        </div>
        <div className="careers-hero-image">
          <img src="/hero-office-team.png" alt="Team collaborating" />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="careers-stats-banner">
        <div className="container">
          <div className="stats-banner-grid">
            <div className="stat-banner-item">
              <span className="stat-banner-label">INTERNSHIP DURATION</span>
              <span className="stat-banner-value">3 Months</span>
            </div>
            <div className="stat-banner-item">
              <span className="stat-banner-label">MONTHLY STIPEND</span>
              <span className="stat-banner-value">10K – 12K</span>
            </div>
            <div className="stat-banner-item">
              <span className="stat-banner-label">PPO OPPORTUNITY</span>
              <span className="stat-banner-value">6 LPA</span>
            </div>
            <div className="stat-banner-item">
              <span className="stat-banner-label">WORK MODE</span>
              <span className="stat-banner-value">Remote / WFH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="prerequisites-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-badge">PREREQUISITES</span>
            <h2>Basic Knowledge Areas</h2>
            <p>Must-have or to-be-learned knowledge before joining our Software Engineer Trainee programs.</p>
          </div>
          
          <div className="prerequisites-grid">
            {prerequisites.map((prereq, index) => (
              <div className="prereq-card" key={index}>
                <div className="prereq-title">
                  <span className="prereq-dot"></span>
                  {prereq.title}
                </div>
                <ul className="prereq-list">
                  {prereq.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section container">
        <div className="section-header center">
          <span className="section-badge">OUR MISSION</span>
          <h2>Levroxen Software Innovations Aims To</h2>
          <p>We are committed to nurturing the next generation of technology leaders through structured learning and real-world project exposure.</p>
        </div>
        
        <div className="mission-grid">
          {missionItems.map((item, index) => (
            <div className="mission-card" key={index}>
              <div className="mission-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="opportunities-section container" id="opportunities">
        <div className="section-header center">
          <span className="section-badge">OPEN INTERNSHIPS</span>
          <h2>Latest Opportunities</h2>
          <p>Kickstart your career with our Software Engineer Trainee programs.</p>
        </div>

        <div className="opportunities-list">
          {opportunities.map((job) => (
            <div className={`job-accordion ${expandedId === job.id ? 'expanded' : ''}`} key={job.id}>
              <div className="job-accordion-header" onClick={() => toggleAccordion(job.id)}>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-tags">
                  <span className="job-tag dept">{job.department}</span>
                  <span className="job-tag location">{job.location}</span>
                  <span className="job-tag type">{job.type}</span>
                </div>
                <div className="job-accordion-icon">
                  {expandedId === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {expandedId === job.id && (
                <div className="job-accordion-content">
                  <p className="job-desc">{job.description}</p>
                  
                  <div className="job-skills">
                    <h4>Required Skills & Knowledge:</h4>
                    <ul>
                      {job.requiredSkills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="job-apply">
                    <button 
                      className="btn-primary apply-btn"
                      onClick={() => navigate('/apply', { state: { jobTitle: job.title } })}
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scam Alert */}
        <div className="scam-alert">
          <div className="scam-icon">
            <AlertTriangle size={24} color="#D97706" />
          </div>
          <div className="scam-content">
            <h4>Recruitment Scam Alert</h4>
            <p>At Levroxen Software Innovations, integrity and transparency are at the heart of our recruitment process. We want to alert all job seekers that we <strong>never charge any fees</strong>, request payment, or ask for financial information at any stage of our hiring process.</p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="careers-cta">
          <div className="careers-cta-content">
            <h3>Levroxen Software Innovations — Get the Future You Want!</h3>
            <p>Send your resume to <a href="mailto:admin@levroxen.com">admin@levroxen.com</a></p>
          </div>
          <Link to="/apply" className="btn-primary">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
