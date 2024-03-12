import { Link } from "react-router-dom"
import ProjectHeading from "../microcomponents/ProjectHeading"
import RepoLink from "../microcomponents/RepoLink"

const HomePresentation = () => {
    return (
        <>
            <div className="container text-center bg-semid">
                <div className="col-12">
                    <h2 className="fw-bold">JOEL DAVID GOMEZ ORTEGA</h2>
                </div>
                <hr />
                <div className="col-12">
                    <span>Ingeniero en Mecatrónica | Desarrollador </span>
                </div>
            </div>
            <div className="container mt-3 pt-3 bg-semil border rounded border-secondary text-dark">
                <p>
                    Al estudiar mi carrera, desarrollé un gusto especial por todo lo relacionado al software.
                    Realicé mis prácticas profesionales en CFE (organismo del gobierno) desarrollando una aplicación web para el análisis de datos.
                    Más adelante construí una aplicación web destinada a consultorios médicos como parte de mi tesis profesional.
                </p>
                <p>
                    Gracias a mi gusto por la programación y mi constante interés en perseguir una carrera al respecto,
                    hoy en día soy un ingeniero con más de dos años de experiencia en el desarrollo de software.
                </p>
            </div>

            <Link className="btn w-100 my-3 btn-danger d-flex align-items-center justify-content-center" to="/my-experience">
                <span>Mi experiencia &nbsp;</span>
                <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link className="btn w-100 my-3 btn-danger d-flex align-items-center justify-content-center" to="/my-projects">
                <span>Mis proyectos &nbsp;</span>
                <i class="fa-solid fa-arrow-right"></i>
            </Link>

            <div className="container mx-0 px-3">
                <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                    <div className="col-md-6">
                        <ProjectHeading
                            to="Sobre página web"
                            title="SPA hecha en ReactJS"
                            source="Proyecto personal" />
                    </div>
                    <div className="col-md-6">
                        <div className="my-3">
                            <RepoLink href="https://github.com/Davel99/resume">Visita el repositorio de esta web</RepoLink>
                        </div>
                    </div>
                    <div className="col-12 pt-3">
                        <p>
                            Desarrollé esta web como prueba de mis habilidades y para mostrar mis otros proyectos
                        </p>
                        <span className="fw-bold">Tecnologías usadas:</span>
                        <ul class="list-group list-group-horizontal">
                            <li className="list-group-item">ReactJS</li>
                            <li className="list-group-item">React Router</li>
                            <li className="list-group-item">i18n (for multiple languages)</li>
                            <li className="list-group-item">Bootstrap 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomePresentation