// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();
    let lang = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div class="nav-item dropdown mx-3">
            <a class="nav-link dropdown-toggle text-decoration-none text-white fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                LANGUAGE: [{lang.toUpperCase()}]
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item"
                        value="es"
                        onClick={(e) => changeLanguage(e.target.attributes.value.value)}>
                        Spanish
                    </a>
                </li>
                <li>
                    <a class="dropdown-item"
                        value="en"
                        onClick={(e) => changeLanguage(e.target.attributes.value.value)}>
                        English
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Something else here
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default LanguageSelector;