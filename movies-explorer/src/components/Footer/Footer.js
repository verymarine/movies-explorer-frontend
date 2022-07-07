import "./Footer.css";

function Footer(props) {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__line"></div>
            <p className="footer__year">&copy; 2022</p>
            <div className="footer__links">
                <a className="footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
                <a className="footer__link" href="https://github.com">Github</a>
                <a className="footer__link" href="https://ru.wikipedia.org/wiki/Facebook#Блокировки_сервиса">Facebook</a>
            </div>

        </footer>
    );
}

export default Footer;