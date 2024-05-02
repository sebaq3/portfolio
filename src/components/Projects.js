import React, { useEffect } from 'react';

function Projects({ language }) {
    const projects = [
        {
            id: 1,
            title: "Portfolio",
            description: "React con Javascript, uso de componentes, libs, bbdd",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GJnnECLxuC2tHYOvrAdxZamLBlGtKq6Ar5blwcwZGQ&s",
            demoUrl: "https://portfolio-nfpsm9jg.b4a.run/",
            githubUrl: "https://github.com/sebaq3/portfolio"
        },
        {
            id: 2,
            title: "Cortina Automatica",
            description: "Manejo de servomotores y comunicacion mqtt",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk09IP8YBZkmVnopsEymyONks9qFqF0E0F86GKDsOZtg&s",
            demoUrl: "https://example.com/demo2",
            githubUrl: "https://github.com/sebaq3/cortina"
        },
        {
            id: 3,
            title: "Anlpr",
            description: "Identificacion con YOLO usando Python",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Matr%C3%ADcula_automovil%C3%ADstica_Argentina_1995_NVZ_087.jpg",
            demoUrl: "https://example.com/demo3",
            githubUrl: "https://github.com/sebaq3/anlpr"
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
            <table className="project-table">
                <tbody>
                    <tr>
                        <td>
                            <h2>Proyectos</h2>
                            <div className="additional-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="left-content">
                                                <h3>Datos personales:</h3>
                                                <p>Teléfono: 647430770</p>
                                                <p>Email: <a href="mailto:sebaq3@gmail.com">sebaq3@gmail.com</a></p>
                                            </td>
                                            <td className="right-content">
                                                <h3>Intereses:</h3>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href="https://portfolio-nfpsm9jg.b4a.run/"><img src="https://cdn-icons-png.flaticon.com/128/174/174876.png" alt="Twitter" /></a></td>
                                                            <td><a href="https://portfolio-nfpsm9jg.b4a.run/"><img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" alt="Facebook" /></a></td>
                                                            <td><a href="https://portfolio-nfpsm9jg.b4a.run/"><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Instagram" /></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="https://portfolio-nfpsm9jg.b4a.run/"><img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="LinkedIn" /></a></td>
                                                            <td><a href="https://portfolio-nfpsm9jg.b4a.run/"><img src="https://cdn-icons-png.flaticon.com/128/174/174879.png" alt="WhatsApp" /></a></td>
                                                            <td><a href="https://portfolio-nfpsm9jg.b4a.run/"><img src="https://cdn-icons-png.flaticon.com/128/174/174883.png" alt="YouTube" /></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="project-separator"></div>
                            {projectsRows.map((row, rowIndex) => (
                                <div key={rowIndex} className="projects-row">
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
