const RepoLink = ({ href, children = "Visitar repositorio de este proyecto" }) => {
    return (
        <a target="_blank" href={href} rel="noreferrer" className="btn w-100 my-3 btn-danger d-flex align-items-center justify-content-center">
            <i className="fa-brands fa-github"></i>
            &nbsp;
            &nbsp;
            <span>{children}</span>
            &nbsp;
            &nbsp;
            <i className="fa-solid fa-arrow-right"></i>
        </a>
    )
}

export default RepoLink