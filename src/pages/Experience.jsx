import { useTranslation } from "react-i18next"

const Experience = () => {
    const { t } = useTranslation();
    const bullets = t('experience.INFOSYS.bullets', { returnObjects: true });
    return (
        <div className="container">
            <h1 className="text-center py-3 bg-semid">
                {t('header.experience')}
            </h1>
            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <span>
                        {t('experience.CFE.company')}
                    </span>
                    <h3 className="fw-bold">
                        {t('experience.CFE.role')}
                    </h3>
                </div>
                <div className="col-md-6">
                    <span className="fw-light">
                        {t('experience.CFE.time')}
                    </span>
                    <h5>
                        {t('experience.CFE.type')}
                    </h5>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        {t('experience.CFE.content')}
                    </p>
                </div>
            </div>

            <div className="row border border-dark rounded bg-semil text-dark p-3 my-3">
                <div className="col-md-6">
                    <span>
                        {t('experience.INFOSYS.company')}
                    </span>
                    <h3 className="fw-bold">
                        {t('experience.INFOSYS.role')}
                    </h3>
                </div>
                <div className="col-md-6">
                    <span className="fw-light">
                        {t('experience.INFOSYS.time')}
                    </span>
                    <h5>
                        {t('experience.INFOSYS.type')}
                    </h5>
                </div>
                <div className="col-12 pt-3">
                    <p>
                        {t('experience.INFOSYS.content')}
                    </p>
                    <ul>
                        {
                            bullets.map((bullet, index) => (
                                <li key={index}>
                                    {bullet}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience