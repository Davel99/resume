import RepoLink from "../pages/microcomponents/RepoLink"

const Footer = () => {
    const curentYear = new Date().getFullYear()
    return (
        <footer class="bg-primary py-3">
            <div class="row py-3 text-white text-center">
                <div class="col-sm-12 col-md-4 px-5">
                    <RepoLink href="https://github.com/Davel99/resume">Visita el repositorio de esta web</RepoLink>
                </div>
                <div class="col-sm-12 col-md-8">
                    <b>JOEL DAVID GOMEZ ORTEGA</b> © <span id="yearSpan">{curentYear}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer