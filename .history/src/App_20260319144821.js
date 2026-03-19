import React from 'react';
import './App.css';
import { portfolioData } from './portfolioData';

// Импортируем наши новые компоненты
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  const { profile, projectsBackend, projectsFrontend, skills, education } = portfolioData;

  return (
    <div className="app-container">
      <Navbar profile={profile} />
      {/* HERO SECTION */}
      <Hero profile={profile} />


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
      <Education education={education} />

      {/* SKILLS */}
      <Skills skills={skills} />

      {/* FOOTER */}

      <Footer profile={profile} />
    </div>
  );
}

export default App;