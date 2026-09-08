import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ArrowRight,
    Menu,
    X,
    ChevronDown,
    Cloud,
    Briefcase,
    Brain,
    Users,
    ShieldCheck,
    Network,
    TrendingUp,
    Code,
    Globe,
} from 'lucide-react';

import './Navbar.css';

const serviceLinks = [{
        name: 'Cloud Management',
        icon: < Cloud size = { 16 }
        />,
    },
    {
        name: 'Enterprise Management',
        icon: < Briefcase size = { 16 }
        />,
    },
    {
        name: 'Data & Artificial Intelligence',
        icon: < Brain size = { 16 }
        />,
    },
    {
        name: 'Consulting & Staffing',
        icon: < Users size = { 16 }
        />,
    },
    {
        name: 'Background Verification',
        icon: < ShieldCheck size = { 16 }
        />,
    },
    {
        name: 'Network Management',
        icon: < Network size = { 16 }
        />,
    },
    {
        name: 'Sales',
        icon: < TrendingUp size = { 16 }
        />,
    },
    {
        name: 'Custom Software Development',
        icon: < Code size = { 16 }
        />,
    },
    {
        name: 'Managed IT Services',
        icon: < Globe size = { 16 }
        />,
    },
];

const Navbar = () => {
    const location = useLocation();

    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileOpen(false);
        setShowDropdown(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileOpen((prev) => !prev);
        setShowDropdown(false);
    };

    return ( <
        nav className = "navbar" >
        <
        div className = "container navbar-container" >

        { /* Logo */ } <
        div className = "navbar-logo" >
        <
        Link to = "/"
        onClick = { closeMobileMenu } >
        <
        img src = "/logo.png"
        alt = "Levroxen Logo"
        className = "logo-image" /
        >
        <
        /Link> <
        /div>

        { /* Navigation Links */ } <
        ul className = { `navbar-links ${
            isMobileOpen ? 'active' : ''
          }` } >
        { /* Home */ } <
        li >
        <
        Link to = "/"
        className = { location.pathname === '/' ? 'active' : '' }
        onClick = { closeMobileMenu } >
        Home <
        /Link> <
        /li>

        { /* About */ } <
        li >
        <
        Link to = "/about"
        className = {
            location.pathname === '/about' ? 'active' : ''
        }
        onClick = { closeMobileMenu } >
        About Us <
        /Link> <
        /li>

        { /* Services */ } <
        li className = "dropdown-parent"
        onMouseEnter = {
            () => {
                if (window.innerWidth > 992) {
                    setShowDropdown(true);
                }
            }
        }
        onMouseLeave = {
            () => {
                if (window.innerWidth > 992) {
                    setShowDropdown(false);
                }
            }
        } >
        <
        Link to = "/services"
        className = {
            location.pathname === '/services' ?
            'active' :
                ''
        }
        onClick = {
            (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    setShowDropdown((prev) => !prev);
                } else {
                    closeMobileMenu();
                }
            }
        } >
        <
        span > Services < /span> <
        ChevronDown size = { 14 }
        /> <
        /Link>

        { /* Services Dropdown */ } {
            showDropdown && ( <
                div className = "services-dropdown" > {
                    serviceLinks.map((item) => ( <
                        Link to = "/services"
                        key = { item.name }
                        className = "dropdown-item"
                        onClick = { closeMobileMenu } >
                        <
                        span className = "dropdown-icon" > { item.icon } <
                        /span>

                        <
                        span > { item.name } < /span> <
                        /Link>
                    ))
                } <
                /div>
            )
        } <
        /li>

        { /* Industries */ } <
        li >
        <
        Link to = "/industries"
        className = {
            location.pathname === '/industries' ?
            'active' :
                ''
        }
        onClick = { closeMobileMenu } >
        Industries <
        /Link> <
        /li>

        { /* Careers */ } <
        li >
        <
        Link to = "/careers"
        className = {
            location.pathname === '/careers' ?
            'active' :
                ''
        }
        onClick = { closeMobileMenu } >
        Careers <
        /Link> <
        /li>

        { /* Contact */ } <
        li >
        <
        Link to = "/contact"
        className = {
            location.pathname === '/contact' ?
            'active' :
                ''
        }
        onClick = { closeMobileMenu } >
        Contact <
        /Link> <
        /li>

        { /* Mobile CTA */ } <
        li className = "mobile-only-cta" >
        <
        Link to = "/contact"
        onClick = { closeMobileMenu } >
        <
        button type = "button"
        className = "btn-primary"
        style = {
            {
                width: '100%',
                marginTop: '16px',
            }
        } >
        Let 's Connect <
        ArrowRight size = { 16 }
        /> <
        /button> <
        /Link> <
        /li> <
        /ul>

        { /* Desktop CTA */ } <
        div className = "navbar-cta hidden-mobile" >
        <
        Link to = "/contact" >
        <
        button type = "button"
        className = "btn-primary" >
        Let 's Connect <
        ArrowRight size = { 16 }
        /> <
        /button> <
        /Link> <
        /div>

        { /* Mobile Menu Button */ } <
        button type = "button"
        className = "mobile-menu-btn"
        onClick = { toggleMobileMenu } >
        {
            isMobileOpen ? ( <
                X size = { 24 }
                />
            ) : ( <
                Menu size = { 24 }
                />
            )
        } <
        /button>

        <
        /div> <
        /nav>
    );
};

export default Navbar;