import "./AboutProject.css";

function AboutProject(props) {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__line"></div>
            <div className="about-project__grid">
                <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__text">
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
                <p className="about-project__text">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
            </div>
            <p className="about-project__stage-period">1 неделя</p>
            <p className="about-project__stage-period">4 недели</p>
            <p className="about-project__stage-text">Back-end</p>
            <p className="about-project__stage-text">Front-end</p>
        </section>
    )
}

export default AboutProject;