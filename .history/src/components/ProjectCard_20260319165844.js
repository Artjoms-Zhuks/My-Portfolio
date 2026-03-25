import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <div className="project-image">
            <img
                src=${process.env.PUBLIC_URL}{project.image}
                alt={project.title}
                onError={(e) => { e.target.style.display = 'none'; }}
            />
        </div>
        <div className="project-body">
            <div className="tags">
                {project.tagsbackend?.map(tag => <span key={tag} className="tag-backend">{tag}</span>)}
                {project.tagsfrontend?.map(tag => <span key={tag} className="tag-frontend">{tag}</span>)}
                {project.tagsdb?.map(tag => <span key={tag} className="tag-db">{tag}</span>)}
                {project.tagstesting?.map(tag => <span key={tag} className="tag-test">{tag}</span>)}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-footer">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="github-btn">
                    <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    View Project <span>→</span>
                </a>
            </div>
        </div>
    </div>
);

export default ProjectCard;