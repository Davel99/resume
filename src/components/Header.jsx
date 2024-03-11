import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    const welcome = t('welcome')
    return(
        <header className="bg-dark text-white">
            <h1>This is the header </h1>
            <h2>{welcome}</h2>
        </header>
    );

}

export default Header