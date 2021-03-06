import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css";

function Profile(props) {
    return (
        <>
            <Header />
            <section className="profile">
                <h2 className="profile__title">Привет, Марина!</h2>
                <form className="profile__form">
                    <label className="profile__label">
                        Имя
                        <input
                            className="profile__input"
                            name="name"
                            type="text"
                            defaultValue="Марина"
                        />
                    </label>

                    <label className="profile__label">
                        E-mail
                        <input
                            className="profile__input"
                            name="email"
                            type="email"
                            defaultValue="test@test.ru"
                        />
                    </label>

                    <button
                        type="submit"
                        className="profile__button"
                    >
                        Редактировать
                    </button>
                </form>
                <Link to="/" className="profile__link">Выйти из аккаунта</Link>
            </section>
        </>

    )
}

export default Profile;