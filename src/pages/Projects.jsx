import ProjectHeading from "./microcomponents/ProjectHeading"
import RepoLink from "./microcomponents/RepoLink"

const Projects = () => {
    return (
        <div className="container">
            <h1 className="text-center py-3 bg-semid">Proyectos realizados</h1>
            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading 
                    to="Dirigido a trabajadores de la CFE" 
                    title="Aplicación web de análisis de datos" 
                    source="Proyecto parte de mis prácticas profesionales"/>
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/cfe_app/tree/main" />
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        Desarrollé de una aplicación web con PHP para la automatización de un análisis de datos mensual realizado por
                        el Departamento de Contratos Legados. Se trata de una aplicación con arquitectura MVC que lee y genera archivos csv/xlsx
                        con información filtrada según lo que pida el usuario. Tiene Administradores, Usuarios, control de contraseñas y una
                        interfaz amigable realizada con Boostrap.
                    </p>
                    <span className="fw-bold">Tecnologías usadas:</span>
                    <ul class="list-group list-group-horizontal">
                        <li className="list-group-item">PHP (MVC pattern)</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">Jquery</li>
                        <li className="list-group-item">Bootstrap 4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects