import './PresentationCard.css'
import { useTranslation } from 'react-i18next'

const PresentationCard = () => {
    const { t } = useTranslation();
    return (
        <div class="card">
            <div class="card-header mb-3 text-center"></div>
            <img class="card-img-to profile-pic m-auto" src="/foto-perfil.png" alt="Profile pic" />
            <div class="card-body text-dark text-center">
                <h3 class="card-title pt-3">
                    Joel David
                    <br />
                    Gómez Ortega
                </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div className="col-12 list-item">
                        <span>
                            {t('pages.home.studies_tag')}
                        </span>
                    </div>
                    <div class="d-flex justify-content-center">
                        {t('pages.home.studies_res')}
                    </div>
                </li>
                <li class="list-group-item">
                    <div className="col-12 list-item">
                        <span>Cédula profesional</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        12859139
                    </div>
                </li>
                <li class="list-group-item">
                    <div className="col-12 list-item">
                        <i class="fa-solid fa-phone"></i>
                        <span>
                            {t('pages.home.phone_tag')}
                        </span>
                    </div>
                    <div class="d-flex justify-content-center">
                        (+52) 833-144-1197
                    </div>
                </li>
                <li class="list-group-item">
                    <div className="col-12 list-item">
                        <i class="fa-solid fa-envelope"></i>
                        <span>Email:</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        joelmp3@live.com
                    </div>
                </li>
                <li class="list-group-item">
                    <div className="col-12 list-item">
                        <i class="fa-brands fa-github"></i>
                        <span>Github:</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a target="__blank" href="https://github.com/Davel99">@Davel99</a>
                    </div>
                </li>
            </ul>
        </div>
    )

}

export default PresentationCard