import React from "react";
import "./SearchForm.css";

function SearchForm(props) {



    return (
        <section className="search-form">
            <form className="search-form__form" action="" method="get" onSubmit={props.handleFormSubmit}>
                <input className="search-form__input" name="movie" placeholder="Фильм" type="search"
                    onChange={props.handleInputChange}
                />
                <button
                    className={`search-form__button ${props.buttonSearch  ? "search-form__button-unactive" : ""} `}
                    type="submit"
                    // onClick={props.handleClick}
                    disabled={props.buttonSearch}
                >Найти</button>
            </form>
        </section>
    );
}
export default SearchForm;