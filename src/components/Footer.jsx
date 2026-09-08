import React from 'react';
import { Link } from 'react-router-dom';
import {
    Globe,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return ( <
        footer className = "footer" >
        <
        div className = "container" >
        <
        div className = "footer-grid" >

        {
            /* =========================
                                    BRAND SECTION
                                ========================== */
        } <
        div className = "footer-col brand-col" >

        <
        div className = "footer-logo" >
        <
        img src = "/logo.png"
        alt = "Levroxen Logo"
        className = "logo-image"
        style = {
            {
                height: '75px',
                objectFit: 'contain',
                marginBottom: '16px'
            }
        }
        /> < /
        div >

        <
        p className = "footer-desc" >
        Levroxen LLC provides IT consulting, software development, and managed services across the USA. <
        /p>

        { /* Social Links */ } <
        div className = "social-links" >

        { /* Website */ } <
        a href = "https://www.levroxen.com"
        className = "social-icon"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        Globe size = { 20 }
        /> < /
        a >

        { /* LinkedIn */ } <
        a href = "https://www.linkedin.com/company/levroxenllc/"
        className = "social-icon"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaLinkedin size = { 20 }
        /> < /
        a >

        <
        /div> < /
        div >


        {
            /* =========================
                                    NAVIGATION SECTION
                                ========================== */
        } <
        div className = "footer-col" >

        <
        h4 > NAVIGATION < /h4>

        <
        ul >
        <
        li >
        <
        Link to = "/" >
        Home <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/services" >
        Services <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/industries" >
        Industries <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/about" >
        About Us <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/careers" >
        Careers <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/contact" >
        Contact <
        /Link> < /
        li > <
        /ul>

        <
        /div>


        {
            /* =========================
                                    EXPERTISE SECTION
                                ========================== */
        } <
        div className = "footer-col" >

        <
        h4 > EXPERTISE < /h4>

        <
        ul >
        <
        li >
        <
        Link to = "/services" >
        Cloud Management <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/services" >
        Enterprise Management <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/services" >
        Data & AI <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/services" >
        Consulting & Staffing <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/services" >
        Background Verification <
        /Link> < /
        li >

        <
        li >
        <
        Link to = "/services" >
        Network Management <
        /Link> < /
        li > <
        /ul>

        <
        /div>


        {
            /* =========================
                                    LET'S CONNECT SECTION
                                ========================== */
        } <
        div className = "footer-col contact-col" >

        <
        h4 > LET 'S CONNECT</h4>


        { /* EMAIL */ } <
        div className = "contact-item" >

        <
        Mail size = { 16 }
        color = "#0066FF"
        style = {
            {
                flexShrink: 0,
                marginTop: '3px'
            }
        }
        />

        <
        a href = "mailto:admin@levroxen.com" >
        admin @levroxen.com <
        /a>

        <
        /div>


        { /* PHONE */ } <
        div className = "contact-item" >

        <
        Phone size = { 16 }
        color = "#0066FF"
        style = {
            {
                flexShrink: 0,
                marginTop: '3px'
            }
        }
        />

        <
        a href = "tel:+919703296994" >
        +91 9703296994 <
        /a>

        <
        /div>


        { /* ADDRESS */ } <
        div className = "contact-item"
        style = {
            {
                alignItems: 'flex-start',
                marginTop: '12px'
            }
        } >

        <
        MapPin size = { 16 }
        color = "#0066FF"
        style = {
            {
                marginTop: '4px',
                flexShrink: 0
            }
        }
        />

        <
        div >
        905 N Pershing Ave <
        br / >
        Salem, MO 65560 - 1144 <
        br / >
        United States <
        /div>

        <
        /div>

        <
        /div>

        <
        /div> < /
        div > <
        /footer>
    );
};

export default Footer;