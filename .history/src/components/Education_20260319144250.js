import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Education = ({ education }) => (
    <section className="section education-section">
        <h2 className="section-title">Education</h2>
        <div className="edu-grid">
            {education.map(edu => (
                <div className="edu-card" key={edu.id}>
                    <div className="edu-header">
                        <h4>{edu.degree}</h4>
                        <span className="edu-date">{edu.period}</span>
                    </div>
                    <p className="edu-inst">{edu.institution}</p>
                    <p className="edu-desc">{edu.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Education;