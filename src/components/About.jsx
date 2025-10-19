import React from 'react';
import '../styles/components/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-img">
                <img src={`${process.env.PUBLIC_URL}/assets/images/profile1.jpg`} alt="About Leonard" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Full Stack Developer!</h3>
                <p>
                    I'm a professionally qualified Full Stack Software Engineer with expertise in
                    Java backend development and React frontend development. I have a strong
                    foundation in computer science principles and extensive experience in building
                    scalable web applications.
                </p>
                <p>
                    My technical skills include Java, Android, HTML & CSS, JavaScript, React, Node.js, PHP, mySQL, NoSQL,
                    and Cloud Technologies. I'm passionate about creating efficient,
                    user-friendly applications that solve real-world problems.
                </p>
                <div className="skills">
                    <div className="skill-item">
                        <h4>Frontend Development</h4>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h4>Backend Development</h4>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h4>Database Design</h4>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
                <a href="/assets/documents/Leonard_Mawire_CV.pdf"
                    className="btn"
                    download="Leonard_Mawire_FullStack_Developer_CV.pdf">Download CV</a>
            </div>
        </section>
    );
};

export default About;