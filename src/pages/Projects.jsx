import ExtLink from "./microcomponents/ExtLink"
import ProjectHeading from "./microcomponents/ProjectHeading"
import RepoLink from "./microcomponents/RepoLink"

const Projects = () => {
    return (
        <div className="container">
            <h1 className="text-center py-3 bg-semid">Proyectos realizados</h1>
            <div className="row bg-semid p-3 rounded">
                <p>
                    Debido a acuerdos de No-Divulgación, no puedo hablar sobre mis proyectos realizados con Infosys ni los clientes
                    con los que trabajé.
                    La información general sobre esos proyectos pueden encontrarla en la sección Experiencia Profesional.
                </p>
                <p>
                    Aquí les ofrezco un resumen de mis proyectos personales que demuestran mis habilidades
                </p>
            </div>
            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to="Dirigido a trabajadores de la CFE"
                        title="Aplicación web de análisis de datos"
                        source="Proyecto parte de mis prácticas profesionales" />
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

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to="Sobre página web"
                        title="SPA hecha en ReactJS"
                        source="Proyecto personal" />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        Desarrollé esta aplicación como prueba de mis habilidades y para mostrar mis otros proyectos
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

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to="Dirigido a quien sea que desee tener su propio Acortador de Links"
                        title="Acortador de Links"
                        source="Proyecto personal" />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/link-shortener-expressts/tree/main" />
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        Desarrollé de una aplicación web con ExpressJS + Typescript para acortar links. Está dockerizada y lista para usar.
                        Mi objetivo personal era aplicar todos los conceptos profesionales de desarrollo que he adquirido en Infosys
                        (TDD, Arquitectura por capas, Programación Orientada a Objetos, Data Transfer Objects, Error Handling, etc...)
                    </p>
                    <span className="fw-bold">Tecnologías usadas:</span>
                    <ul class="list-group list-group-horizontal">
                        <li className="list-group-item">ExpressJS</li>
                        <li className="list-group-item">Typescript</li>
                        <li className="list-group-item">Arquitectura por capas</li>
                        <li className="list-group-item">API key/secret authorization</li>
                        <li className="list-group-item">Docker</li>
                    </ul>
                </div>
            </div>

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to="Dirigido a un escritor"
                        title="Blog de Wordpress para escritor"
                        source="Proyecto personal" />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/davel-blog-v1/tree/main" />
                        <ExtLink href="https://davelgomoz.com/" />
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        Desarrollé un Wordpress theme para un escritor. Tiene estilos personalizados y creación de publicaciones especializadas
                        (Libros). Visite la página web para ver el trabajo final.
                    </p>
                    <span className="fw-bold">Tecnologías usadas:</span>
                    <ul class="list-group list-group-horizontal">
                        <li className="list-group-item">PHP (Wordpress)</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">Wordpress-CLI</li>
                        <li className="list-group-item">Bootstrap 4</li>
                    </ul>
                </div>
            </div>

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to="Dirigido a escritores"
                        title="Aplicación web para el procesamiento de textos"
                        source="Proyecto personal" />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/letras-app-v1/tree/main" />
                        <ExtLink href="https://letras.davelgomoz.com/" />
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        Desarrollé una aplicación web dirigida a escritores. Su objetivo
                        es contabilizar y formatear texto con una interfaz amigable. Visite
                        la página web para ver el trabajo final
                    </p>
                    <span className="fw-bold">Tecnologías usadas:</span>
                    <ul class="list-group list-group-horizontal">
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">Webpack</li>
                        <li className="list-group-item">Bootstrap 5</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Projects