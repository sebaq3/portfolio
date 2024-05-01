import React, { useEffect } from 'react';

function Projects({ language }) {

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
            },
            {
                id: 3,
                title: "Proyecto 3",
                description: "Descripción del proyecto 3",
                imageUrl: "https://via.placeholder.com/150",
                demoUrl: "https://example.com/demo3",
                githubUrl: "https://github.com/username/project3"
            },
            {
                id: 4,
                title: "Proyecto 4",
                description: "Descripción del proyecto 4",
                imageUrl: "https://via.placeholder.com/150",
                demoUrl: "https://example.com/demo4",
                githubUrl: "https://github.com/username/project4"
            },
            {
                id: 5,
                title: "Proyecto 5",
                description: "Descripción del proyecto 5",
                imageUrl: "https://via.placeholder.com/150",
                demoUrl: "https://example.com/demo5",
                githubUrl: "https://github.com/username/project5"
            },
            {
                id: 6,
                title: "Proyecto 6",
                description: "Descripción del proyecto 6",
                imageUrl: "https://via.placeholder.com/150",
                demoUrl: "https://example.com/demo6",
                githubUrl: "https://github.com/username/project6"
            },
            // Agrega más proyectos según sea necesario
        ];

        // Función para dividir los proyectos en filas de 3 columnas
        const chunkArray = (arr, size) => {
            return arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
        };

        // Dividir los proyectos en filas de 3 columnas
        const projectsRows = chunkArray(projects, 3);

        return (
            <section className="container project-section" id="projects">
                <table className="project-table"> {/* Agrega una tabla para la sección de proyectos */}
                    <tbody>
                        <tr>
                            <td> {/* Agrega una celda para el contenido */}
                                <h2>Proyectos</h2>
                                
                                    {/* Contenido adicional en una tabla */}
                                    <div className="additional-content">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="left-content">Datos personales</td>
                                                    <td className="right-content">Intereses</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Separador entre contenido adicional y proyectos */}
                                    <div className="project-separator"></div>
                                    {/* Mapear filas de proyectos */}
                                    {projectsRows.map((row, rowIndex) => (
                                        <div key={rowIndex} className="projects-row">
                                            {/* Mapear proyectos en cada fila */}
                                            {row.map(project => (
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
                                    ))}
                                   
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
}

export default Projects;
