import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Добавь эту строку

const Footer = ({ }) => (
    <footer id="contact" className="footer">
        <h3>Let's create something cool</h3>
        <p>Email: <a href={`mailto:${profile.email}`}>artjoms.zuks@gmail.com</a></p>
        <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
    </footer>
);

export default Footer;