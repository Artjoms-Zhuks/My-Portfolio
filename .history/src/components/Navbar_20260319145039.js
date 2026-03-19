import React from 'react';
import './App.css';

const Navbar = ({ profile }) => (
    <nav className="nav">
        <div className="nav-content">
            <span className="logo">
                {profile.name.toUpperCase()}<span>{profile.surname.toUpperCase()}</span>
            </span>
            <div className="links">
                <a href="#projects">Projects</a>
                <a href="#skills">My Toolbox</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>
);

export default Navbar;