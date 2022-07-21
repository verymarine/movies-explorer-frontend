import React from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import * as auth from "../../utils/Auth";
import { useFormValidation } from "../UseFormValidation";

function Register(props) {

    const { values, handleChange, errors, isValid, setValues } = useFormValidation();

    // const [values, setValues] = React.useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // });

    const history = useHistory();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setUnactiveButton(true);
        // if (values.name || values.email || values.password) {
            auth.register(values.name, values.email, values.password)
                .then((res) => {
                    if (res) {
                        auth.authorize(values.email, values.password).then((res) => {
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
                                props.setUnactiveButton(false);
                            });
                    }
                })
                .catch((err) => {
                    console.log("Error at register", err);
                })
        // }
    }

    return (
        <>
            <HeaderAuth />
            <div className="register">
                {/* <img className="register__logo" src={logo} alt="логотип в виде круга" />
            <h2 className="register__title">Добро пожаловать!</h2> */}
                <form className="register__form" onSubmit={handleSubmit}>
                    <label className="register__label">
                        Имя
                        <input
                            className="register__input"
                            // placeholder="Имя"
                            id="name"
                            name="name"
                            type="text"
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

                    <button
                        type="submit"
                        className={`register__button ${!isValid && "register__button-unactive"}`}
                        disabled={props.unactiveButton}
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