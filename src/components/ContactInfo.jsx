import React from "react";
import '../styles/components/ContactInfo.css';
import { contactInfo } from "../utils/constants";

const ContactInfo = () => {
    return (
        <div className="contact-container">
            {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                    <i className={info.icon}></i>
                    <span className="contact-type">{info.type.toUpperCase()}:</span>
                    <span className="contact-value">{info.value}</span>
                </div>
            ))}
        </div>
    );
};

export default ContactInfo;
