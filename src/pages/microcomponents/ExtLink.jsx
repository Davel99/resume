const ExtLink = ({ href, children = "Visitar el sitio web" }) => {
    return (
        <a target="_blank" href={href} className="btn btn-success w-100">
            <i class="fa-solid fa-globe"></i>
            &nbsp;
            &nbsp;
            {children}
            &nbsp;
            &nbsp;
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    )
}

export default ExtLink