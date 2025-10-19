// utils/constants.js

export const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'services', title: 'Services' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' }
];

export const socialMedia = [
    {
        id: 'social-linkedin',
        icon: 'fab fa-linkedin-in',
        url: 'https://linkedin.com/in/yourprofile'
    },
    {
        id: 'social-github',
        icon: 'fab fa-github',
        url: 'https://github.com/yourusername'
    },
    {
        id: 'social-twitter',
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/yourhandle'
    },
    {
        id: 'social-instagram',
        icon: 'fab fa-instagram',
        url: 'https://instagram.com/yourprofile'
    }
];

export const services = [
    {
        title: "Web Development",
        description: "Full stack web development using modern technologies like React, Java, Spring Boot, and more to create responsive and scalable web applications.",
        icon: "fas fa-code"
    },
    {
        title: "API Development",
        description: "Design and implementation of RESTful APIs with proper documentation, authentication, and security best practices.",
        icon: "fas fa-server"
    },
    {
        title: "Database Design",
        description: "Relational and NoSQL database design, optimization, and implementation for high-performance applications.",
        icon: "fas fa-database"
    },
    {
        title: "Cloud Solutions",
        description: "Deployment and management of applications on cloud platforms like AWS, Azure, and Google Cloud.",
        icon: "fas fa-cloud"
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
        icon: "fas fa-paint-brush"
    },
    {
        title: "Technical Consulting",
        description: "Expert advice on system architecture, technology selection, and best practices for your projects.",
        icon: "fas fa-chart-line"
    }
];

export const projects = [
    
    {
        title: "E-Commerce Platform",
        description: "Full-featured online store with payment integration, inventory management, and admin dashboard.",
        image: "/assets/images/about.jpg",
        tags: ["Java", "React", "Spring Boot", "MySQL"],
        url: "#"
    },
    {
        title: "Healthcare Management System",
        description: "Comprehensive system for patient records, appointments, and billing for healthcare providers.",
        image: "/assets/images/about.jpg",
        tags: ["Java", "Angular", "MongoDB", "Docker"],
        url: "#"
    },
    {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team features.",
        image: "/assets/images/about.jpg",
        tags: ["React", "Node.js", "Firebase", "Redux"],
        url: "#"
    },
    {
        title: "Financial Dashboard",
        description: "Interactive dashboard for financial data visualization and analysis.",
        image: "/assets/images/about.jpg",
        tags: ["React", "D3.js", "Java", "PostgreSQL"],
        url: "#"
    },
    {
        title: "Social Media Analytics",
        description: "Tool for analyzing social media metrics and generating reports.",
        image: "/assets/images/about.jpg",
        tags: ["Python", "React", "AWS", "Elasticsearch"],
        url: "#"
    },
    {
        title: "Inventory System",
        description: "Enterprise inventory management system with barcode scanning and reporting.",
        image: "/assets/images/about.jpg",
        tags: ["Java", "Spring", "React", "Oracle"],
        url: "#"
    },

    {
        title: "Face Recognition System",
        description: "A facial recognition system providing restricted access through computer vision",
        image: "/assets/images/project1.png",
        tags: ["Python", "OpenCV", "Pycharm"],
        url: "#"
    },
    {
        title: "Online Voter Registration System",
        description: "An online platform for voter registration and management, ensuring secure and efficient processing of voter data.",
        image: "/assets/images/voterSyst.png",
        tags: ["HTML", "CSS", "PHP"],
        url: "#"
    }
];

export const skills = [
    { name: "Java", level: 95 },
    { name: "Android", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "PHP", level: 85 },
    { name: "SQL", level: 85 },
    { name: "HTML/CSS", level: 80 },
    { name: "AWS", level: 70 }
];

export const education = [
    {
        degree: "MSc Computer Science",
        institution: "University of Technology",
        year: "2020-2022"
    },
    {
        degree: "BSc Software Engineering",
        institution: "Tech University",
        year: "2016-2020"
    }
];

export const experience = [
    {
        position: "Junior Full Stack Developer",
        company: "Ministry of Home Affairs Zimbabwe",
        period: "2023-Present",
        responsibilities: [
            "Participated in a team of 5 developers in building enterprise applications",
            "Designed and implemented microservices architecture",
            "Optimized application performance by 40%"
        ]
    },
    {
        position: "Java Developer",
        company: "Ministry of Home Affairs",
        period: "2018-2023",
        responsibilities: [
            "Developed RESTful APIs for financial systems",
            "Implemented CI/CD pipelines",
            "Mentored junior developers"
        ]
    }
];

export const contactInfo = [
    {
        type: "email",
        value: "lepnardpmawire@gmail.com",
        icon: "fas fa-envelope"
    },
    {
        type: "phone",
        value: "+263 773 754 868",
        icon: "fas fa-phone"
    },
    {
        type: "location",
        value: "Bulawayo, Zimbabwe",
        icon: "fas fa-map-marker-alt"
    }
];

// EmailJS configuration
export const emailConfig = {
    serviceId: 'lentsoMail',
    templateId: 'template_h5urw6l',
    userId: 'cIx25CPmHZAbob-o9'
};