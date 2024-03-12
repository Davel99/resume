const Experience = () => {
    return (
        <div className="container">
            <h1 className="text-center py-3 bg-semid">Experiencia profesional</h1>
            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <span>CFE</span>
                    <h3 className="fw-bold">Programador Junior</h3>
                </div>
                <div className="col-md-6">
                    <span className="fw-light">[6 meses] - ENE - JUN 2020</span>
                    <h5>Prácticas profesionales</h5>
                </div>
                <div className="col-12 pt-3">
                <p>
                    Desarrollé de una aplicación web con PHP para la automatización de un análisis de datos mensual.
                    El Departamento de Contratos Legados analizaba documentos con cerca de 4000 registros manualmente
                    en el plazo de una o más semanas. Gracias a mi solución, la tarea se redujo a menos de diez minutos.
                </p>
                </div>
            </div>

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <span>Infosys</span>
                    <h3 className="fw-bold">Systems Engineer</h3>
                </div>
                <div className="col-md-6">
                    <span className="fw-light">[2 años] - MAR 2022 - MAR 2024</span>
                    <h5>Empleado remoto</h5>
                </div>
                <div className="col-12 pt-3">
                <p>
                    Infosys es una empresa de consultoría IT internacional. Me involucré en un ambiente de negocios en inglés con equipos globalmente distribuidos.
                </p>
                <ul>
                    <li>Participé en desarrollo back-end con Java - Spring Boot</li>
                    <li>Participé en diseño de base de datos(MySQL) y estuve encargado del catálogo de metadatos</li>
                    <li>Realicé Test Driven Development con JUnit y Mockito</li>
                    <li>P
                        articipé en un proyecto de migración de servidores y base de datos donde implementé ETL pipelines
                        con Python, Airflow, Kafka y Spark. Además, estuve involucrado en Amazon Web Services
                        (CloudWatch y Lambda)
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience