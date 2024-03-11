import HomePresentation from "./subcomponents/HomePresentation"
import PresentationCard from "./subcomponents/PresentationCard"

const Home = () => {
    return (
        <div class="container pt-5">
            <div className="row pb-3">
                <div className="col-sm-12 col-md-4 text-dark">
                    <PresentationCard></PresentationCard>
                </div>
                <div className="col-sm-12 col-md-8 pb-5 text-center">
                    <HomePresentation></HomePresentation>
                </div>
            </div>

            <a target="__blank" className="btn w-100 my-3 btn-danger d-flex align-items-center justify-content-center" href="https://github.com/Davel99/resume">
                <i class="fa-brands fa-github"></i>
                <span>&nbsp;Este repositorio &nbsp;</span>
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>

    )
}

export default Home