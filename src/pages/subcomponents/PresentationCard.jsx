import './PresentationCard.css'
import { useTranslation } from 'react-i18next'

const PresentationCard = () => {
    const { t } = useTranslation();
    return (
        <div className="card">
            <div className="card-header mb-3 text-center"></div>
            <img className="card-img-to profile-pic m-auto" src="./foto-perfil.png" alt="Profile pic" />
            <div className="card-body text-dark text-center">
                <h3 className="card-title pt-3">
                    Joel David
                    <br />
                    Gómez Ortega
                </h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="col-12 list-item">
                        <span>
                            {t('pages.home.studies_tag')}
                        </span>
                    </div>
                    <div className="d-flex justify-content-center">
                        {t('pages.home.studies_res')}
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="col-12 list-item">
                        <span>Cédula profesional</span>
                    </div>
                    <div className="d-flex justify-content-center">
                        12859139
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="col-12 list-item">
                        <i className="fa-solid fa-phone"></i>
                        <span>
                            {t('pages.home.phone_tag')}
                        </span>
                    </div>
                    <div className="d-flex justify-content-center">
                        (+52) 833-144-1197
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="col-12 list-item">
                        <i className="fa-solid fa-envelope"></i>
                        <span>Email:</span>
                    </div>
                    <div className="d-flex justify-content-center">
                        joelmp3@live.com
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="col-12 list-item">
                        <i className="fa-brands fa-github"></i>
                        <span>Github:</span>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a target="__blank" href="https://github.com/Davel99">@Davel99</a>
                    </div>
                </li>
            </ul>
        </div>
    )

}

export default PresentationCard