import { Link } from "react-router-dom"
import ProjectHeading from "../microcomponents/ProjectHeading"
import RepoLink from "../microcomponents/RepoLink"
import { useTranslation } from "react-i18next"

const HomePresentation = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="container text-center bg-semid">
                <div className="col-12">
                    <h2 className="fw-bold">JOEL DAVID GOMEZ ORTEGA</h2>
                </div>
                <hr />
                <div className="col-12">
                    <span>
                        {t('pages.home.joel_title')}
                    </span>
                </div>
            </div>
            <div className="container mt-3 pt-3 bg-semil border rounded border-secondary text-dark">
                <p>
                    {t('pages.home.info_1')}
                </p>
                <p>
                    {t('pages.home.info_2')}
                </p>
            </div>

            <Link className="btn w-100 my-3 btn-primary d-flex align-items-center justify-content-center" to="/my-experience">
                <span>
                    {t('header.experience')}
                    &nbsp;</span>
                <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link className="btn w-100 my-3 btn-primary d-flex align-items-center justify-content-center" to="/my-projects">
                <span>
                    {t('header.projects')}
                    &nbsp;</span>
                <i class="fa-solid fa-arrow-right"></i>
            </Link>

            <div className="container mx-0 px-3">
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