import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h3>Hello, It's Me</h3>
                <h1 className="color-changing-name">Leonard Mawire</h1>
                <h2>And I'm a <span className="typing-text">Full Stack Developer</span></h2>
                <p>
                    Professional Full Stack Software Engineer, proficient in Java backend development
                    and Frontend development with 4+ years of experience.
                </p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/leonard-mawire-a66bb3105?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/leonardmawire"><i className="fab fa-github"></i></a>
                    <a href="https://x.com/Lentso7?t=0xIUVWEvVs7hPQrXuTdDSQ&s=08"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/lentsolux?igsh=YzljYTk1ODg3Zg=="><i className="fab fa-instagram"></i></a>
                </div>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
            <div className="hero-image">
                <div className="glowing-circle">
                    <span></span>
                    <span></span>
                    <div className="image">
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`} 
                            alt="About Leonard" 
                            className="rotating-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;