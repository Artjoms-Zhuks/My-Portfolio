import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Добавь эту строку

const Skills = ({ ptofile }) => (
    <header className="hero">
        <div className="hero-content">
            <div className="badge">Open to new opportunities</div>
            <h1>{profile.role} <br />
                <span className="text-dim" style={{ fontSize: '0.6em' }}>{profile.subRole}</span>
            </h1>
            <p>{profile.description}</p>
            <div className="hero-actions">
                <a href="#projects" className="btn-primary">View projects</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="github-btn">
                    <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />My GitHub
                </a>
            </div>
        </div>
    </header>
);

export default Skills;