import "./AboutMe.css";
import photo from "../../../images/photo.jpg"

function AboutMe(props) {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студентка</h2>
            <div className="about-me__line"></div>
            <div className="about-me__block-info">
                <h3 className="about-me__name">Марина</h3>
                <h4 className="about-me__about">Фронтенд-разработчица, 27 лет</h4>
                <p className="about-me__text">
                    Проживаю в Санкт-Петербурге.
                    В свободное время люблю снимать на пленочный фотоаппарат, кататься на велосипеде, играть в пинг-понг (｡･ω･)ρ┳┷┳ﾟσ(･ω･*). Год назад начала путь изучения
                    Веб-разработки, это то направлени, где я хочу развиваться и прикладывать услия для усовершенствования своих знаний и умений.
                </p>

                <img className="about-me__photo" src={photo} alt="Фото Марины" />
                <div className="about-me__link-area">
                    <a className="about-me__link" href="https://ru.wikipedia.org/wiki/Facebook#Блокировки_сервиса" target="blank">Facebook</a>
                    <a className="about-me__link" href="https://github.com/verymarine" target="blank">Github</a>
                </div>

            </div>

        </section>
    )
}

export default AboutMe;