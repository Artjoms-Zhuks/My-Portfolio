import React from 'react';
import './App.css';
import { portfolioData } from './portfolioData';
import { FaGithub } from 'react-icons/fa';

function App() {
  const { profile, projectsBackend, projectsFrontend, skills } = portfolioData;
  return (
    <div className="app-container">
      {/* 1. NAVIGATION */}
      <nav className="nav">
        <div className="nav-content">
          <span className="logo">{profile.name.toUpperCase()}<span>{profile.surname.toUpperCase()}</span></span>
          <div className="links">
            <a href="#projects">Projects</a>
            <a href="#skills">My Toolbox</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <div className="badge">Open to new opportunities</div>
          <h1>{profile.role} <br/> <span className="text-dim" style={{fontSize: '0.6em'}}>{profile.subRole}</span></h1>
          <p>{profile.description}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View projects</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="github-btn"><FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />My GitHub</a>

            
          </div>
        </div>
      </header>

      {/* 3. PROJECTS SECTION */}
    <section id="projects" className="section">
        <h2 className="section-title">Selected Work</h2>
        <h4>Backend projects</h4>
        <div className="project-grid">
          {projectsBackend.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                 <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                      onError={(e) => { e.target.style.display='none'; }}/>
              </div>
              <div className="project-body">
              <div className="tags">
              {/* Backend tags */}
              {project.tagsbackend && project.tagsbackend.map(tag => (
                <span key={tag} className="tag-backend">{tag}</span>
              ))}

              {/* Frontend tags */}
              {project.tagsfrontend && project.tagsfrontend.map(tag => (
                <span key={tag} className="tag-frontend">{tag}</span>
              ))}

              {/*DB tags */}
              {project.tagsdb && project.tagsdb.map(tag => (
                <span key={tag} className="tag-db">{tag}</span>
              ))}

              {/* Test tags */}
              {project.tagstesting && project.tagstesting.map(tag => (
                <span key={tag} className="tag-test">{tag}</span>
              ))}
              </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="github-btn"><FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />View Project on GitHub <span>→</span></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4>Frontend projects</h4>
        <div className="project-grid">
          {projectsFrontend.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                 <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                      onError={(e) => { e.target.style.display='none'; }}/>
              </div>
              <div className="project-body">
              <div className="tags">
              {/* Backend tags */}
              {project.tagsbackend && project.tagsbackend.map(tag => (
                <span key={tag} className="tag-backend">{tag}</span>
              ))}

              {/* Frontend tags */}
              {project.tagsfrontend && project.tagsfrontend.map(tag => (
                <span key={tag} className="tag-frontend">{tag}</span>
              ))}

              {/* DB tags */}
              {project.tagsdb && project.tagsdb.map(tag => (
                <span key={tag} className="tag-db">{tag}</span>
              ))}
              {/* Test tags */}
              {project.tagstesting && project.tagstesting.map(tag => (
                <span key={tag} className="tag-test">{tag}</span>
              ))}
              </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="github-btn"><FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />View Project on GitHub <span>→</span></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. EDUCATION */}
      <section className="section education-section">
  <h2 className="section-title">Education</h2>
  <div className="edu-grid">
    {portfolioData.education.map(edu => (
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

      {/* 5. TECH STACK (SKILLS) */}
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

<footer id="contact" className="footer">
  <h3>Let's create something cool</h3>
  <p>Email: <a href="mailto:artjoms.zuks@gmail.com">artjoms.zuks@gmail.com</a></p>
  
  <div className="social-links">
    <a href="https://github.com/Artjoms-Zhuks" target="_blank" rel="noreferrer">GitHub</a>
    <a href="https://linkedin.com/in/artjoms-zhuks" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</footer>
    </div>
  );
}

export default App;