import React, { useState } from 'react';
import {
    MessageSquare,
    X,
    Phone,
    Mail,
} from 'lucide-react';

import './QuickConnect.css';

const QuickConnect = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleQuickConnect = () => {
        setIsOpen((prev) => !prev);
    };

    return ( <
        div className = "quick-connect-wrapper" >

        { /* Expanded Menu */ } <
        div className = { `quick-connect-menu ${
          isOpen ? 'open' : ''
        }` } >

        { /* Phone Option */ } <
        a href = "tel:+919703296994"
        className = "qc-item" >
        <
        div className = "qc-icon phone" >
        <
        Phone size = { 18 }
        /> < /
        div >

        <
        span >
        +91 9703296994 <
        /span> < /
        a >

        { /* Email Option */ } <
        a href = "mailto:hiring@levroxen.com"
        className = "qc-item" >
        <
        div className = "qc-icon mail" >
        <
        Mail size = { 18 }
        /> < /
        div >

        <
        span > { 'admin@levroxen.com' } <
        /span> < /
        a >

        <
        /div>

        { /* Main Floating Button */ } <
        button type = "button"
        className = { `quick-connect-btn ${
          isOpen ? 'active' : ''
        }` }
        onClick = { toggleQuickConnect } > {
            isOpen ? ( <
                X size = { 24 }
                />
            ) : ( <
                MessageSquare size = { 24 }
                />
            )
        }

        {
            !isOpen && ( <
                span className = "qc-pulse" > < /span>
            )
        } <
        /button>

        <
        /div>
    );
};

export default QuickConnect;