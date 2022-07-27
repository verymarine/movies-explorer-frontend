import React from "react";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm(props) {
  // значение поиска
  const [query, setQuery] = useState(props.query);

  // значение короткометражек
  const [short, setShort] = useState(props.short);

  // ф-я сабмита поиска
  function handleFormSubmit(e) {
    e.preventDefault();
    props.onSearch({
      query,
      short,
    });
  }

  // ф-я чекида короткометражек
  function handleCheckbox(e) {
    const value = e.target.checked;
    setShort(value);

    props.onSearch({
      query,
      short: value,
    });
  }

  // ф-я установки значения поиска в стейт
  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <section className="search-form">
        <form
          className="search-form__form"
          action=""
          method="get"
          onSubmit={handleFormSubmit}
        >
          <input
            className="search-form__input"
            name="movie"
            placeholder="Фильм"
            type="search"
            value={query}
            onChange={handleInputChange}
          />
          <button
            className={`search-form__button ${
              query ? "" : "search-form__button-unactive"
            } `}
            type="submit"
            disabled={!query}
            onClick={handleFormSubmit}
          >
            Найти
          </button>
        </form>
      </section>
      <FilterCheckbox handleCheckbox={handleCheckbox} isChecked={short} />
    </>
  );
}
export default SearchForm;
