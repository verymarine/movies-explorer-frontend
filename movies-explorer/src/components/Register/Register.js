import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, Route } from "react-router-dom";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Register(props) {
    return (
        <>
            <HeaderAuth />
            <div className="register">
                {/* <img className="register__logo" src={logo} alt="логотип в виде круга" />
            <h2 className="register__title">Добро пожаловать!</h2> */}
                <form className="register__form">
                    <label className="register__label">
                        Имя
                        <input
                            className="register__input"
                            // placeholder="Имя"
                            id="name"
                            name="name"
                            type="text"
                        />
                    </label>
                    <label className="register__label">
                        E-mail
                        <input
                            className="register__input"
                            // placeholder="E-mail"
                            id="email"
                            name="email"
                            type="email"
                        />
                    </label>

                    <label className="register__label">
                        Пароль
                        <input
                            className="register__input"
                            // placeholder="Пароль"
                            id="password"
                            name="password"
                            type="password"
                        />
                    </label>

                    <button
                        type="submit"
                        className="register__button"
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <div className="register__signin">
                    <p className="register__text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__link">Войти</Link>
                </div>
            </div>
        </>

    );
}

export default Register;