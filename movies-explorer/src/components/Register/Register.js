import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import * as auth from "../../utils/Auth";
import { useFormValidation } from "../UseFormValidation";

function Register(props) {

    const { values, handleChange, errors, isValid, setValues } = useFormValidation();

    const [isSuccessed, setIsSuccessed] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.setUnactiveButton(true);
        if (values.name || values.email || values.password) {
            auth.register(values.name, values.email, values.password)
                .then((res) => {
                    if (res.email) {
                        console.log(res, 'res')
                        auth.authorize(values.email, values.password).then((res) => {
                            console.log(res.jwt, 'res.jwt');
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
                                setIsSuccessed(true);
                                console.log("Error at logIn", err);
                            })
                        // .finally(() => {
                        //     props.setUnactiveButton(false);
                        // });
                    }
                    setIsSuccessed(true);
                    setTimeout(setIsSuccessed, 3000);
                })
                .catch((err) => {
                    setIsSuccessed(true);
                    console.log("Error at register", err);
                })
        }
    }

    return (
        <>
            <HeaderAuth />
            <div className="register">
                <form
                    className="register__form"
                    onSubmit={handleSubmit}
                >
                    <label className="register__label">
                        Имя
                        <input
                            className="register__input"
                            id="name"
                            name="name"
                            type="text"
                            minLength="2"
                            maxLength="12"
                            required
                            value={values.name || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="register__errors">{errors.name}</span>

                    <label className="register__label">
                        E-mail
                        <input
                            className="register__input"
                            id="email"
                            name="email"
                            type="email"
                            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                            required
                            value={values.email || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="register__errors">{errors.email}</span>

                    <label className="register__label">
                        Пароль
                        <input
                            className="register__input"
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={values.password || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="register__errors">{errors.password}</span>

                    {isSuccessed === true
                        ? <p className="register__status">Ошибка при регистрации</p>
                        : <></>
                    }
                    <button
                        type="submit"
                        className={`register__button ${(!isValid || props.unactiveButton) && "register__button-unactive"}`}
                        disabled={!isValid || props.unactiveButton}
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
