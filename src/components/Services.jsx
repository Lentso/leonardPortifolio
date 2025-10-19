import React, { useState } from 'react';
import '../styles/components/Services.css';
import { FaCode, FaServer, FaDatabase, FaCloud, FaPaintBrush, FaChartLine, FaMobile, FaShieldAlt, FaRobot, FaNetworkWired } from 'react-icons/fa';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            title: "Web Development",
            shortDescription: "Full stack web development using modern technologies.",
            fullDescription: "Building responsive, scalable web applications with React, Node.js, and modern frameworks. Specializing in clean architecture and performance optimization.",
            icon: <FaCode size={40} />,
            technologies: ["React", "Node.js", "Express", "Next.js"]
        },
        {
            title: "API Development",
            shortDescription: "Design and implementation of RESTful APIs.",
            fullDescription: "Professional API development with proper documentation, authentication, and security best practices for seamless frontend-backend communication.",
            icon: <FaServer size={40} />,
            technologies: ["REST", "GraphQL", "Postman", "Swagger"]
        },
        {
            title: "Database Design",
            shortDescription: "Relational and NoSQL database solutions.",
            fullDescription: "Designing efficient database architectures with proper indexing, query optimization, and security measures for high-performance applications.",
            icon: <FaDatabase size={40} />,
            technologies: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"]
        },
        {
            title: "Cloud Solutions",
            shortDescription: "Cloud deployment and management.",
            fullDescription: "Deploying and managing applications on cloud platforms with CI/CD pipelines, containerization, and auto-scaling capabilities.",
            icon: <FaCloud size={40} />,
            technologies: ["AWS", "Azure", "Google Cloud", "Docker"]
        },
        {
            title: "UI/UX Design",
            shortDescription: "User-centered interface design.",
            fullDescription: "Creating intuitive and beautiful user interfaces with a focus on accessibility, responsiveness, and user experience principles.",
            icon: <FaPaintBrush size={40} />,
            technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Material UI"]
        },
        {
            title: "Technical Consulting",
            shortDescription: "System architecture guidance.",
            fullDescription: "Expert advice on technology selection, system architecture, and best practices to optimize your development process.",
            icon: <FaChartLine size={40} />,
            technologies: ["System Design", "Microservices", "SOLID Principles"]
        },
        // NEW SERVICES ADDED BELOW
        {
            title: "Mobile Development",
            shortDescription: "Cross-platform mobile applications.",
            fullDescription: "Building performant mobile apps for iOS and Android using React Native with native module integration when needed.",
            icon: <FaMobile size={40} />,
            technologies: ["React Native", "Flutter", "Expo", "Mobile APIs"]
        },
        {
            title: "DevOps Engineering",
            shortDescription: "CI/CD and infrastructure automation.",
            fullDescription: "Implementing robust deployment pipelines with automated testing, monitoring, and infrastructure-as-code practices.",
            icon: <FaNetworkWired size={40} />,
            technologies: ["GitHub Actions", "Jenkins", "Terraform", "Kubernetes"]
        },
        {
            title: "Cybersecurity",
            shortDescription: "Application security hardening.",
            fullDescription: "Implementing security best practices including authentication, encryption, and vulnerability testing to protect your applications.",
            icon: <FaShieldAlt size={40} />,
            technologies: ["JWT", "OAuth", "Pen Testing", "CORS"]
        },
        {
            title: "AI Integration",
            shortDescription: "Smart features implementation.",
            fullDescription: "Adding machine learning capabilities and AI-powered features to applications using modern AI APIs and custom models.",
            icon: <FaRobot size={40} />,
            technologies: ["OpenAI API", "TensorFlow", "LLMs", "LangChain"]
        }
    ];

    const handleReadMore = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <section id="services" className="services">
            <h2 className="heading">My <span>Services</span></h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-box" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.shortDescription}</p>
                        <button 
                            className="btn" 
                            onClick={() => handleReadMore(service)}
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedService && (
                <div className="service-modal-overlay" onClick={closeModal}>
                    <div className="service-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="modal-content">
                            <div className="modal-icon">{selectedService.icon}</div>
                            <h3>{selectedService.title}</h3>
                            <p>{selectedService.fullDescription}</p>
                            {selectedService.technologies && (
                                <div className="technologies">
                                    <h4>Technologies:</h4>
                                    <ul>
                                        {selectedService.technologies.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;