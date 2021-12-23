import React from 'react';
import './style.css';

const Portfolio = () => {
    return (
        <>
            <section className="section">
                <h2 className="title">Technologies</h2>
                <ul className="list">
                    <li className="list-item">React</li>
                    <li className="list-item">Node.js</li>
                    <li className="list-item">Express</li>
                    <li className="list-item">MongoDB</li>
                    <li className="list-item">GraphQL</li>
                    <li className="list-item">Next.js</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="projects">Projects</h2>
                <ul className="list">
                    <li className="list-item">Senior Tutor Web Development</li>
                    <li className="list-item">Clouch</li>
                </ul>
            </section>
        </>
    );
};

export default Portfolio;
