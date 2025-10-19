import React from 'react';
import '../styles/components/Education.css';

const Education = ({ id }) => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Software Engineering (hons)",
            institution: "Zimbabwe Open University",
            year: "2018 - 2023",
            description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Neural Networks for Image Recognition'.",
            
        },
        {
            id: 2,
            degree: "Diploma in Cyber Security Management",
            institution: "University of Zimbabwe",
            year: "2025 -   ",
            description: "Focus on Computer Systems security.",
            
        },

    ];


    return (
        <section id={id} className="education-section">
            <div className="container">
                <h2>My Education</h2>
                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div key={edu.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="degree-title">{edu.degree}</h3>
                                <div className="institution-info">
                                    <span className="institution-name">{edu.institution}</span>
                                    <span className="year">{edu.year}</span>
                                </div>
                                <p className="education-description">{edu.description}</p>
                                {edu.honors && (
                                    <span className="honors-badge">{edu.honors}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;