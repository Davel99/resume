import { Link } from "react-router-dom"

const HomePresentation = () => {
    return (
        <>
            <div className="col-12">
                <h2>JOEL DAVID GOMEZ ORTEGA</h2>
            </div>
            <hr />
            <div className="col-12">
                <span>Ingeniero en Mecatrónica | Desarrollador </span>
            </div>
            <div className="container mt-3 pt-3 bg-semil border rounded border-secondary text-dark">
                {/* <p>
                    Al estudiar mi carrera, <b>Ingeniería Mecatrónica</b>, desarrollé un gusto por el desarrollo de software.
                    Realicé mis prácticas profesionales en CFE (Comisión Federal de Electricidad, un organismo del gobierno), 
                    desarrollando una <b>aplicación web para el análisis de datos</b>.                 
                </p>
                <p>
                    Más adelante realicé un proyecto de <b>aplicación web para consultorios médicos</b> para mi tesis profesional.
                </p>
                <p>
                    Gracias a mis antecedentes en la programación y mi constante interés por perseguir una carrera al respecto,
                    en Marzo de 2022 pude conseguir un trabajo en <b>Infosys</b> como <b>Systems Engineer</b>
                </p> */}
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

            <div className="container mt-3 pt-3 bg-semil border rounded border-secondary text-dark">
                <p>Este curriculum virtual es un complemento del archivo PDF donde hablo más detalladamente sobre mi perfil</p>
            </div>
        </>
    )

}

export default HomePresentation