import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {

    return (
        <section className="search-form">
            <form className="search-form__form" action="" method="get" onSubmit={props.handleFormSubmit}>
                <input className="search-form__input" name="movie" placeholder="Фильм" type="search"
                    onChange={props.handleInputChange}
                />
                <button
                    className={`search-form__button ${props.buttonSearch ? "search-form__button-unactive" : ""} `}
                    type="submit"
                    disabled={props.buttonSearch}
                >Найти</button>
            </form>
            {props.buttonSearch
                ? <p className="serach-form__info">Нужно ввести ключевое слово</p>
                : <></>
            }
            { (props.filteredMovies.length === 0 && props.buttonSearch === false)
                ? <p className="serach-form__info">Ничего не найдено</p>
                : <></>
            }
        </section>
    );
}
export default SearchForm;
