import React from 'react';
import './App.css';
import { portfolioData } from './portfolioData';

// Импортируем наши новые компоненты
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';
import { FaGithub } from 'react-icons/fa';

function App() {
  const { profile, projectsBackend, projectsFrontend, skills, education } = portfolioData;

  return (
    <div className="app-container">
      <Navbar profile={profile} />
      <Hero profile={profile} />
      {/* HERO SECTION */}
      {/*<header className="hero">
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
      </header>*/}

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2 className="section-title">Selected Work</h2>

        <h4>Backend projects</h4>
        <div className="project-grid">
          {projectsBackend.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        <h4>Frontend projects</h4>
        <div className="project-grid">
          {projectsFrontend.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      {/* EDUCATION */}
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

      {/* SKILLS */}
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

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <h3>Let's create something cool</h3>
        <p>Email: <a href={`mailto:${profile.email}`}>artjoms.zuks@gmail.com</a></p>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;