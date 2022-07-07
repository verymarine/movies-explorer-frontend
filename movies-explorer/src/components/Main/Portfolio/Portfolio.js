import "./Portfolio.css";

function Portfolio(props) {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <a className="portfolio__link" href="*">Статичный сайт</a>
            <div className="portfolio__line"></div>
            <a className="portfolio__link" href="https://verymarine.github.io/russian-travel/">Адаптивный сайт</a>
            <div className="portfolio__line"></div>
            <a className="portfolio__link" href="https://verymarine.github.io/mesto/">Одностраничное приложение</a>
            <div className="portfolio__line"></div>

        </section>
    );
}

export default Portfolio;