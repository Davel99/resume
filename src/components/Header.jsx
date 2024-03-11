import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

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
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark bg-body-tertiary">
            <div class="container-fluid">

                <Link class="navbar-brand" to="/my-profile">Joel David G.O</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <i class="fa-solid fa-house"></i>
                            <Link class={li["home"]} aria-current={isHome ? 'page' : ''} to="/my-profile">Home</Link>
                        </li>
                        <li class="nav-item">
                            <i class="fa-solid fa-helmet-safety"></i>
                            <Link class={li["experience"]} aria-current={isExperience ? 'page' : ''} to="/my-experience">Experiencia profesional</Link>
                        </li>
                        <li class="nav-item">
                            <i class="fa-solid fa-hammer"></i>
                            <Link class={li["projects"]} aria-current={isProjects ? 'page' : ''} to="/my-projects">Projectos realizados</Link>
                        </li>
                    </ul>
                </div>
                <section className="d-flex">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </section>
            </div>
        </nav>
    );

}

export default Header