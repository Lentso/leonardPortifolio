import React, { useState, useEffect } from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check scroll position for navbar style
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Check which section is in view
            const sections = ['home', 'about', 'services', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <a href="#!" className="logo">
                <span className="logo-gradient">LENTSO</span>
                <span className="logo-text">.dev</span></a>
            <nav>
                <ul>
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
                    <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>
            </nav>
            <div className="menu-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </header>
    );
};

export default Navbar;