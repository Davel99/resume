import PresentationCard from "../subcomponents/PresentationCard"

const Home = () => {
    return (
        <div class="container pt-5">
            <div className="row">
                <div className="col-sm-12 col-md-4 text-dark">
                    <PresentationCard></PresentationCard>
                </div>
                <div className="col-sm-12 col-md-8 pb-5 text-center">
                    <div className="col-12">
                        <h2>JOEL DAVID GOMEZ ORTEGA</h2>
                    </div>
                    <hr />
                    <div className="col-12">
                        <span>Ingeniero en Mecatrónica | Desarrollador </span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                    </div>

                    <div className="col-md-8">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home