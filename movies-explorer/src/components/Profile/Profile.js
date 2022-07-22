import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import "./Profile.css";
import { useFormValidation } from "../UseFormValidation";

function Profile(props) {
    const currentUser = useContext(CurrentUserContext);

    const nameRef = useRef("")
    const emailRef = useRef("")

    const { values, handleChange, errors, isValid, resetForm } = useFormValidation({
        name: nameRef.current.value,
        email: emailRef.current.value
    });

    const [isSameData, setIsSameData] = useState(true);

    useEffect(() => {
        setIsSameData(nameRef.current.value === currentUser.name && emailRef.current.value === currentUser.email);
    }, [values.name, values.email, currentUser.name, currentUser.email]);

    function handleSubmit(e) {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        props.handleUpdateProfile({ name, email });
        props.setCurrentUser(name, email);
        resetForm();
    }

    
    return (
        <>
            <Header
                openNavigation={props.onClick}
                className="header"
            />
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__form"
                    onSubmit={handleSubmit}
                >

                    <label className="profile__label">
                        Имя
                        <input
                            className="profile__input"
                            name="name"
                            type="text"
                            defaultValue={currentUser.name}
                            ref={nameRef}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="profile__errors">{errors.name}</span>

                    <label className="profile__label">
                        E-mail
                        <input
                            className="profile__input"
                            name="email"
                            type="email"
                            defaultValue={currentUser.email}
                            ref={emailRef}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="profile__errors">{errors.email}</span>

                    {props.isUpdate
                        ? <p className="profile__edited">Данные профиля обновлены&#10003;</p>
                        : <></>
                    }

                    <button
                        type="submit"
                        className={`profile__button ${(isSameData || !isValid) && "profile__button-unactive"}`}
                        disabled={isSameData || !isValid}
                    >
                        Редактировать
                    </button>
                </form>
                <Link to="/" className="profile__link" onClick={props.exit}>Выйти из аккаунта</Link>
            </section>
        </>
    )
}

export default Profile;
