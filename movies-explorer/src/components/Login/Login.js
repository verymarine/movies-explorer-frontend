import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import * as auth from "../../utils/Auth";
import React from "react";
import { useFormValidation } from "../UseFormValidation";

function Login(props) {
    const { values, handleChange, errors, isValid, setValues } = useFormValidation();

    const history = useHistory();

    function handleAuthorize(e) {
        e.preventDefault();
        props.setUnactiveButton(true);
        auth
            .authorize(values.email, values.password)
            .then((res) => {
                if (res.jwt) {
                    console.log(res);
                    setValues({
                        email: "",
                        password: "",
                    });
                    localStorage.setItem("jwt", res.jwt);
                    props.handleLogin();
                    history.push("/movies");
                }
            })
            .catch((err) => {
                console.log("Error at logIn", err);
            })
            .finally(() => {
                props.setUnactiveButton(false)
            });
    }

    return (
        <>
            <HeaderAuth />
            <div className="login">
                <form
                    className="login__form"
                    onSubmit={handleAuthorize}
                >
                    <label className="login__label">
                        E-mail
                        <input
                            className="login__input"
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={values.email || ''}
                            onChange={handleChange}
                        />
                        <span className="login__errors">{errors.email}</span>
                    </label>

                    <label className="login__label">
                        Пароль
                        <input
                            className="login__input"
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={values.password || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="login__errors">{errors.password}</span>

                    <button
                        type="submit"
                        className={`login__button ${!isValid && "login__button-unactive"}`}
                        disabled={props.unactiveButton}
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
