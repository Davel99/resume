import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "../pages/microcomponents/LanguageSelector";

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const path = location.pathname;
    const isHome = path == '/' || path == '/home' || path == '/my-profile';
    const isExperience = path == '/my-experience';
    const isProjects = path == '/my-projects';
    const navLink = "nav-link"
    const activeLink = navLink + " active"
    let li = []
    li["home"] = isHome ? activeLink : navLink
    li["experience"] = isExperience ? activeLink : navLink
    li["projects"] = isProjects ? activeLink : navLink

    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-4" to="/my-profile">Joel David G.O</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <i className="fa-solid fa-house"></i>
                            <Link className={li["home"]} aria-current={isHome ? 'page' : ''} to="/my-profile">
                                {t('header.home')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <i className="fa-solid fa-helmet-safety"></i>
                            <Link className={li["experience"]} aria-current={isExperience ? 'page' : ''} to="/my-experience">
                                {t('header.experience')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <i className="fa-solid fa-hammer"></i>
                            <Link className={li["projects"]} aria-current={isProjects ? 'page' : ''} to="/my-projects">
                                {t('header.projects')}
                            </Link>
                        </li>
                    </ul>
                </div>
                <section className="d-flex">
                    <LanguageSelector></LanguageSelector>
                </section>
            </div>
        </nav>
    );

}

export default Header