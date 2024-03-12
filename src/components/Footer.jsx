import RepoLink from "../pages/microcomponents/RepoLink"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();
    const curentYear = new Date().getFullYear();
    return (
        <footer class="bg-primary py-3 px-0">
            <div class="d-flex py-3 text-white text-center">
                <div class="col-sm-12 col-md-4 px-5">
                    <RepoLink href="https://github.com/Davel99/resume">
                        {t('gral.visit_repo')}
                    </RepoLink>
                </div>
                <div class="col-sm-12 col-md-8 px-0">
                    <b>JOEL DAVID GOMEZ ORTEGA</b> © <span id="yearSpan">{curentYear}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer