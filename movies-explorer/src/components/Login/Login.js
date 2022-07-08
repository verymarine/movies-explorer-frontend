import "./Login.css";
import { Link, Route } from "react-router-dom";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Login(props) {
    return (
        <>
            <HeaderAuth />
            <div className="login">
                <form className="login__form">
                    <label className="login__label">
                        E-mail
                        <input
                            className="login__input"
                            id="email"
                            name="email"
                            type="email"
                        />
                    </label>

                    <label className="login__label">
                        Пароль
                        <input
                            className="login__input"
                            id="password"
                            name="password"
                            type="password"
                        />
                    </label>

                    <button
                        type="submit"
                        className="login__button"
                    >
                        Войти
                    </button>
                </form>
                <div className="login__signup">
                    <p className="login__text">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="login__link">Регистрация</Link>
                </div>
            </div>
        </>

    );
}

export default Login;