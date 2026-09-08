import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    ChevronDown,
    ChevronUp,
    AlertTriangle,
    BookOpen,
    Code,
    Database,
    Cloud
} from 'lucide-react';
import './CareersPage.css';


/* =========================================================
   PREREQUISITES
========================================================= */

const prerequisites = [{
        title: 'Programming',
        icon: < Code size = { 20 }
        color = "#0066FF" / > ,
        items: [
            'Object-Oriented Programming (OOP) concepts',
            'Java / C++ / Python proficiency',
            'Inheritance, Interfaces, Exception handling'
        ]
    },
    {
        title: 'Web Basics',
        icon: < BookOpen size = { 20 }
        color = "#0066FF" / > ,
        items: [
            'HTML, CSS, JavaScript core basics',
            'Client-server architecture understanding',
            'Web protocols and API fundamentals'
        ]
    },
    {
        title: 'Databases',
        icon: < Database size = { 20 }
        color = "#0066FF" / > ,
        items: [
            'RDBMS understanding (Tables, Joins, Keys)',
            'Writing efficient SQL queries',
            'Data modeling principles'
        ]
    },
    {
        title: 'CRM & Cloud',
        icon: < Cloud size = { 20 }
        color = "#0066FF" / > ,
        items: [
            'What is CRM and business use-cases',
            'Sales process: Leads, Opportunities',
            'SaaS, PaaS, IaaS differences'
        ]
    }
];


/* =========================================================
   MISSION ITEMS
========================================================= */

const missionItems = [{
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


/* =========================================================
   LATEST OPPORTUNITIES
========================================================= */

const opportunities = [{
        id: 1,
        title: 'Software Engineer Trainee: MERN Stack Developer',
        department: 'Full Stack Development',
        location: 'Remote / WFH',
        type: 'Internship',
        description: 'Join our development team to build modern and scalable web applications using the MERN stack. Gain hands-on experience in frontend and backend development while working on real-world projects.',
        requiredSkills: [
            'Strong understanding of HTML, CSS, and JavaScript',
            'Basic to intermediate knowledge of React.js',
            'Knowledge of Node.js and Express.js',
            'Understanding of MongoDB and database concepts',
            'Familiarity with REST APIs and Git',
            'Strong problem-solving and debugging skills'
        ]
    },

    {
        id: 2,
        title: 'Software Engineer Trainee: Python with FastAPI Developer',
        department: 'Backend Development',
        location: 'Remote / WFH',
        type: 'Internship',
        description: 'Work with our backend development team to build fast, scalable, and secure APIs using Python and FastAPI. Gain practical experience in backend architecture, REST APIs, databases, and real-world application development.',
        requiredSkills: [
            'Strong foundation in Python programming',
            'Basic to intermediate knowledge of FastAPI',
            'Knowledge of REST API development',
            'Understanding of SQL or NoSQL databases',
            'Familiarity with Git and version control',
            'Understanding of API authentication and validation',
            'Strong logical thinking and problem-solving skills'
        ]
    },

    {
        id: 3,
        title: 'Software Engineer Trainee: Springboot Developer with RestAPI',
        department: 'Backend Development',
        location: 'Remote / WFH',
        type: 'Internship',
        description: 'Join our backend development team to build robust and scalable applications using Java, Spring Boot, and REST APIs. Gain hands-on experience in backend development, API integration, database connectivity, and real-world software projects.',
        requiredSkills: [
            'Strong foundation in Java programming',
            'Basic to intermediate knowledge of Spring Boot',
            'Understanding of REST API development',
            'Knowledge of Spring MVC and Spring Data JPA',
            'Understanding of SQL and relational databases',
            'Familiarity with Git and version control',
            'Basic understanding of API authentication and validation',
            'Strong problem-solving and debugging skills'
        ]
    }
];


/* =========================================================
   CAREERS PAGE
========================================================= */

const CareersPage = () => {
    const [expandedId, setExpandedId] = useState(null);
    const navigate = useNavigate();


    /* =====================================================
       ACCORDION
    ===================================================== */

    const toggleAccordion = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };


    /* =====================================================
       SCROLL TO OPPORTUNITIES
    ===================================================== */

    const scrollToOpportunities = () => {
        const opportunitiesSection =
            document.getElementById('opportunities');

        if (opportunitiesSection) {
            opportunitiesSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };


    /* =====================================================
       RETURN
    ===================================================== */

    return ( <
        div className = "careers-page" >

        {
            /* =================================================
                            HERO SECTION
                        ================================================= */
        }

        <
        section className = "careers-hero container" >

        <
        div className = "careers-hero-content" >

        <
        span className = "careers-badge" >
        STUDENT OPPORTUNITIES <
        /span>

        <
        h1 className = "careers-title" >
        Predict the Future by Creating It. <
        /h1>

        <
        p className = "careers-desc" >
        Explore exciting Student opportunities at Levroxen LLC.We offer structured internships and live projects with a modern approach to technology and professional growth in roles like MERN Stack Development, Python with FastAPI, and Spring Boot Development. <
        /p>

        <
        p className = "careers-highlights" >
        Duration: 3 Months• Stipend: 8 K - 12 K• PPO: 6 LPA• Work From Home <
        /p>

        <
        button className = "btn-primary"
        onClick = { scrollToOpportunities } >
        View Open Positions <
        ArrowRight size = { 16 }
        /> < /
        button >

        <
        /div>


        <
        div className = "careers-hero-image" >

        <
        img src = "/hero-office-team.png"
        alt = "Team collaborating" /
        >

        <
        /div>

        <
        /section>


        {
            /* =================================================
                            STATS BANNER
                        ================================================= */
        }

        <
        section className = "careers-stats-banner" >

        <
        div className = "container" >

        <
        div className = "stats-banner-grid" >

        <
        div className = "stat-banner-item" >

        <
        span className = "stat-banner-label" >
        INTERNSHIP DURATION <
        /span>

        <
        span className = "stat-banner-value" >
        3 Months <
        /span>

        <
        /div>


        <
        div className = "stat-banner-item" >

        <
        span className = "stat-banner-label" >
        MONTHLY STIPEND <
        /span>

        <
        span className = "stat-banner-value" >
        8 K– 12 K <
        /span>

        <
        /div>


        <
        div className = "stat-banner-item" >

        <
        span className = "stat-banner-label" >
        PPO OPPORTUNITY <
        /span>

        <
        span className = "stat-banner-value" >
        6 LPA <
        /span>

        <
        /div>


        <
        div className = "stat-banner-item" >

        <
        span className = "stat-banner-label" >
        WORK MODE <
        /span>

        <
        span className = "stat-banner-value" >
        Remote / WFH <
        /span>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /section>


        {
            /* =================================================
                            PREREQUISITES SECTION
                        ================================================= */
        }

        <
        section className = "prerequisites-section" >

        <
        div className = "container" >

        <
        div className = "section-header center" >

        <
        span className = "section-badge" >
        PREREQUISITES <
        /span>

        <
        h2 >
        Basic Knowledge Areas <
        /h2>

        <
        p >
        Must - have or to - be - learned knowledge before joining our Software Engineer Trainee programs. <
        /p>

        <
        /div>


        <
        div className = "prerequisites-grid" >

        {
            prerequisites.map((prereq, index) => (

                <
                div className = "prereq-card"
                key = { index } >

                <
                div className = "prereq-title" >

                <
                span className = "prereq-dot" > < /span>

                { prereq.title }

                <
                /div>


                <
                ul className = "prereq-list" >

                {
                    prereq.items.map((item, i) => (

                        <
                        li key = { i } > { item } <
                        /li>

                    ))
                }

                <
                /ul>

                <
                /div>

            ))
        }

        <
        /div>

        <
        /div>

        <
        /section>


        {
            /* =================================================
                            MISSION SECTION
                        ================================================= */
        }

        <
        section className = "mission-section container" >

        <
        div className = "section-header center" >

        <
        span className = "section-badge" >
        OUR MISSION <
        /span>

        <
        h2 >
        Levroxen LLC Aims To <
        /h2>

        <
        p >
        We are committed to nurturing the next generation of technology leaders through structured learning and real - world project exposure. <
        /p>

        <
        /div>


        <
        div className = "mission-grid" >

        {
            missionItems.map((item, index) => (

                <
                div className = "mission-card"
                key = { index } >

                <
                div className = "mission-number" > { item.number } <
                /div>

                <
                h3 > { item.title } <
                /h3>

                <
                p > { item.desc } <
                /p>

                <
                /div>

            ))
        }

        <
        /div>

        <
        /section>


        {
            /* =================================================
                            OPPORTUNITIES SECTION
                        ================================================= */
        }

        <
        section className = "opportunities-section container"
        id = "opportunities" >

        <
        div className = "section-header center" >

        <
        span className = "section-badge" >
        OPEN INTERNSHIPS <
        /span>

        <
        h2 >
        Latest Opportunities <
        /h2>

        <
        p >
        Kickstart your career with our MERN Stack, Python with FastAPI, and Spring Boot development opportunities. <
        /p>

        <
        /div>


        <
        div className = "opportunities-list" >

        {
            opportunities.map((job) => (

                <
                div className = { `job-accordion ${
                                expandedId === job.id ? 'expanded' : ''
                            }` }
                key = { job.id } >

                {
                    /* =====================================
                                                    JOB HEADER
                                                ===================================== */
                }

                <
                div className = "job-accordion-header"
                onClick = {
                    () =>
                    toggleAccordion(job.id)
                } >

                <
                h3 className = "job-title" > { job.title } <
                /h3>


                <
                div className = "job-tags" >

                <
                span className = "job-tag dept" > { job.department } <
                /span>

                <
                span className = "job-tag location" > { job.location } <
                /span>

                <
                span className = "job-tag type" > { job.type } <
                /span>

                <
                /div>


                <
                div className = "job-accordion-icon" >

                {
                    expandedId === job.id ? ( <
                        ChevronUp size = { 20 }
                        />
                    ) : ( <
                        ChevronDown size = { 20 }
                        />
                    )
                }

                <
                /div>

                <
                /div>


                {
                    /* =====================================
                                                    JOB CONTENT
                                                ===================================== */
                }

                {
                    expandedId === job.id && (

                        <
                        div className = "job-accordion-content" >

                        <
                        p className = "job-desc" > { job.description } <
                        /p>


                        <
                        div className = "job-skills" >

                        <
                        h4 >
                        Required Skills & Knowledge:
                        <
                        /h4>

                        <
                        ul >

                        {
                            job.requiredSkills.map(
                                (skill, i) => (

                                    <
                                    li key = { i } > { skill } <
                                    /li>

                                )
                            )
                        }

                        <
                        /ul>

                        <
                        /div>


                        { /* APPLY BUTTON */ }

                        <
                        div className = "job-apply" >

                        <
                        button className = "btn-primary apply-btn"
                        onClick = {
                            (e) => {
                                e.stopPropagation();

                                navigate('/apply', {
                                    state: {
                                        jobTitle: job.title
                                    }
                                });
                            }
                        } >
                        Apply Now <
                        ArrowRight size = { 16 }
                        /> < /
                        button >

                        <
                        /div>

                        <
                        /div>

                    )
                }

                <
                /div>

            ))
        }

        <
        /div>


        {
            /* =================================================
                                SCAM ALERT
                            ================================================= */
        }

        <
        div className = "scam-alert" >

        <
        div className = "scam-icon" >

        <
        AlertTriangle size = { 24 }
        color = "#D97706" /
        >

        <
        /div>


        <
        div className = "scam-content" >

        <
        h4 >
        Recruitment Scam Alert <
        /h4>

        <
        p >
        At Levroxen LLC, integrity and transparency are at the heart of our recruitment process.We want to alert all job seekers that we { ' ' } <
        strong >
        never charge any fees <
        /strong>, request payment, or ask
        for financial information at any stage of our hiring process. <
        /p>

        <
        /div>

        <
        /div>


        {
            /* =================================================
                                CTA BANNER
                            ================================================= */
        }

        <
        div className = "careers-cta" >

        <
        div className = "careers-cta-content" >

        <
        h3 >
        Levroxen LLC— Get the Future You Want!
        <
        /h3>

        <
        p >
        Send your resume to { ' ' } <
        a href = "mailto:hiring@levroxen.com" >
        hiring @levroxen.com <
        /a> < /
        p >

        <
        /div>


        <
        Link to = "/apply"
        className = "btn-primary" >
        Apply Now <
        ArrowRight size = { 16 }
        /> < /
        Link >

        <
        /div>

        <
        /section>

        <
        /div>
    );
};


export default CareersPage;