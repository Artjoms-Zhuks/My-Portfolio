import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Добавь эту строку
import './App.css';

const Skills = ({ skills }) => (
    <section id="skills" className="section bg-dark">
        <h2 className="section-title">My Toolbox</h2>
        <div className="skills-container">
            {skills.map((group, index) => (
                <div className={`skill-group ${group.highlight ? 'highlight-group' : ''}`} key={index}>
                    <h4>{group.category}</h4>
                    <ul>
                        {group.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;