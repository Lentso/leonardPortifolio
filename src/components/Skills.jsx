// src/components/Skills.jsx
import React from 'react';
import '../styles/components/Skills.css';
import { skills } from '../utils/constants';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <h2 className="heading">My <span>Skills</span></h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">
                                <i className={skill.icon}></i>
                            </div>
                            <h3>{skill.name}</h3>
                            <div className="skill-progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${skill.level}%` }}
                                    data-level={skill.level}
                                >
                                    <span>{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 