import "./Footer.css";

function Footer(props) {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__line"></div>
            <div className="footer__info">
                <p className="footer__year">&copy; 2022</p>
                <ul className="footer__links">
                    <li className="footer__item">
                        <a className="footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="https://github.com/verymarine">Github</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="https://ru.wikipedia.org/wiki/Facebook#Блокировки_сервиса">Facebook</a>
                    </li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;