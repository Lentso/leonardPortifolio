import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/components/Contact.css';
import { emailConfig } from '../utils/constants';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Make sure you have these values set in your constants.js
        const { serviceId, templateId, userId } = emailConfig;

        emailjs.sendForm(serviceId, templateId, form.current, userId)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <section id="contact" className="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" name="user_name" placeholder="Full Name" required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="email" name="user_email" placeholder="Email Address" required />
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="tel" name="user_phone" placeholder="Phone Number" />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" name="subject" placeholder="Email Subject" required />
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="textarea-field">
                    <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                    <span className="focus"></span>
                </div>
                <div className="btn-box">
                    <button type="submit" className="btn">Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;