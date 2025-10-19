import React from 'react';
import { experience } from '../utils/constants'; // Adjust the import path as needed
import '../styles/components/Experience.css';

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-container">
                {experience.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-header">
                            <h3 className="position">{exp.position}</h3>
                            <div className="company-period">
                                <span className="company">{exp.company}</span>
                                <span className="period">{exp.period}</span>
                            </div>
                        </div>
                        <ul className="responsibilities">
                            {exp.responsibilities.map((responsibility, i) => (
                                <li key={i} className="responsibility-item">
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;