import ExtLink from "./microcomponents/ExtLink"
import ProjectHeading from "./microcomponents/ProjectHeading"
import RepoLink from "./microcomponents/RepoLink"
import { useTranslation } from "react-i18next"

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1 className="text-center py-3 bg-semid">
                {t('header.projects')}
            </h1>
            <div className="row bg-semid p-3 rounded">
                <p>
                    {t('pages.projects.aclaration')}
                </p>
            </div>
            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to={t('projects.cfe.to')}
                        title={t('projects.cfe.title')}
                        source={t('projects.cfe.source')} />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/cfe_app/tree/main">
                            {t('gral.visit_repo')}
                        </RepoLink>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        {t('projects.cfe.content')}
                    </p>
                    <span className="fw-bold">
                        {t('gral.tech_used')}
                    </span>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">PHP (MVC pattern)</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">Jquery</li>
                        <li className="list-group-item">Bootstrap 4</li>
                    </ul>
                </div>

                <div className="col-12 pt-3 row">
                    <hr />
                    <div className="col-md-6">
                        <img src="/resume/cfe_app-3.jpg" className="d-block w-100" alt="..." />
                    </div>

                    <div className="col-md-6 row">
                        <div className="row col-12 my-2">
                            <img src="/resume/cfe_app-1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="row col-12 my-2">
                            <img src="/resume/cfe_app-2.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to={t('projects.resume.to')}
                        title={t('projects.resume.title')}
                        source={t('projects.resume.source')} />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/resume">
                            {t('gral.visit_repo')}
                        </RepoLink>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        {t('projects.resume.content')}
                    </p>
                    <span className="fw-bold">{t('gral.tech_used')}</span>
                    <ul className="list-group list-group-horizontal">
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
                        to={t('projects.lishor.to')}
                        title={t('projects.lishor.title')}
                        source={t('projects.lishor.source')} />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/link-shortener-expressts/tree/main">
                            {t('gral.visit_repo')}
                        </RepoLink>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        {t('projects.lishor.content')}
                    </p>
                    <span className="fw-bold">
                        {t('gral.tech_used')}
                    </span>
                    <ul className="list-group list-group-horizontal">
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
                        to={t('projects.davel.to')}
                        title={t('projects.davel.title')}
                        source={t('projects.davel.source')} />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/davel-blog-v1/tree/main">
                            {t('gral.visit_repo')}
                        </RepoLink>
                        <ExtLink href="https://davelgomoz.com/" />
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        {t('projects.davel.content')}
                    </p>
                    <span className="fw-bold">
                        {t('gral.tech_used')}
                    </span>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">PHP (Wordpress)</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">Wordpress-CLI</li>
                        <li className="list-group-item">Bootstrap 4</li>
                    </ul>
                </div>

                <div className="col-12 pt-3 px-5">
                    <hr />
                    <img src="/resume/davel-blog-1.png" className="d-block w-100" alt="..." />
                    <hr />
                </div>
            </div>

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <ProjectHeading
                        to={t('projects.letras.to')}
                        title={t('projects.letras.title')}
                        source={t('projects.letras.source')} />
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <RepoLink href="https://github.com/Davel99/letras-app-v1/tree/main">
                            {t('gral.visit_repo')}
                        </RepoLink>
                        <ExtLink href="https://letras.davelgomoz.com/" />
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        {t('projects.letras.content')}
                    </p>
                    <span className="fw-bold">
                        {t('gral.tech_used')}
                    </span>
                    <ul className="list-group list-group-horizontal">
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