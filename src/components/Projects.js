// Projects.js
import React from 'react';

function Projects({language}) {
    const projects = [
        {
            id: 1,
            title: "Proyecto 1",
            description: "Descripción del proyecto 1",
            imageUrl: "https://via.placeholder.com/150",
            demoUrl: "https://example.com/demo1",
            githubUrl: "https://github.com/username/project1"
        },
        {
            id: 2,
            title: "Proyecto 2",
            description: "Descripción del proyecto 2",
            imageUrl: "https://via.placeholder.com/150",
            demoUrl: "https://example.com/demo2",
            githubUrl: "https://github.com/username/project2"
        }
        // Puedes agregar más proyectos según sea necesario
    ];

    return (
        <section id="projects">
            <h2>Proyectos</h2>
            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
