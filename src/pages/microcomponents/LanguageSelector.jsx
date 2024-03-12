// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n, t } = useTranslation();
    let lang = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div class="nav-item dropdown mx-3">
            <a class="nav-link dropdown-toggle text-decoration-none text-white fw-bold text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('langs.language')}: [ {lang} ]
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item"
                        value="es"
                        onClick={(e) => changeLanguage(e.target.attributes.value.value)}>
                        {t('langs.es')}
                    </a>
                </li>
                <li>
                    <a class="dropdown-item"
                        value="en"
                        onClick={(e) => changeLanguage(e.target.attributes.value.value)}>
                        {t('langs.en')}
                    </a>
                </li>
                <li>
                    <a class="dropdown-item"
                        value="ja"
                        onClick={(e) => changeLanguage(e.target.attributes.value.value)}>
                        {t('langs.ja')}
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default LanguageSelector;