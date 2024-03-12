import HomePresentation from "./subcomponents/HomePresentation"
import PresentationCard from "./subcomponents/PresentationCard"
import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation();

    return (
        <div class="container pt-5">
            <div className="row">
                <div className="col-sm-12 col-md-4 text-dark">
                    <PresentationCard></PresentationCard>
                </div>
                <div className="col-sm-12 col-md-8 pb-5">
                    <HomePresentation></HomePresentation>
                </div>
            </div>
            <div className="container mt-3 pt-3 bg-semil border rounded border-secondary text-dark">
                <p>
                    {t('pages.home.goodbye')}
                </p>
            </div>
        </div>

    )
}

export default Home