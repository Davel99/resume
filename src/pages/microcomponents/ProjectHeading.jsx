const ProjectHeading = ({ to, title, source }) => {
    return (
        <>
            <span>{to}</span>
            <h3 className="fw-bold">{title}</h3>
            <span className="text-secondary">{source}</span>
        </>
    )
}

export default ProjectHeading