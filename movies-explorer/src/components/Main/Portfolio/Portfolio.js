import "./Portfolio.css";

function Portfolio(props) {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">

                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="*">Статичный сайт</a>
                </li>

                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://verymarine.github.io/russian-travel/">Адаптивный сайт</a>
                </li>

                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://verymarine.github.io/mesto/">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;