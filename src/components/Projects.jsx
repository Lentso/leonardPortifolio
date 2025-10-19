import React from 'react';
import '../styles/components/Projects.css';
import { projects } from '../utils/constants';

const Projects = () => {

    return (
        <section id="projects" className="projects">
            <h2 className="heading">Latest <span>Projects</span></h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-box" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                            <a href="#!"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;