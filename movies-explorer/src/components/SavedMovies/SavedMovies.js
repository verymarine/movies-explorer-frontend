import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import React, { useState } from "react";
import "./SavedMovies.css";

function SavedMovies(props) {
  // Стейт, в котором содержится значение параметров поиска
  const [search, setSearch] = useState(getDefaultSearch());

  //
  function getDefaultSearch() {
    return {
      query: "",
      short: false,
    };
  }

  // ф-я условия фильтрации фильмов
  const filteredMovies = props.movies.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().includes(search.query.toLowerCase()) &&
      (!search.short || movie.duration <= 40)
    );
  });

  return (
    <>
      <Header openNavigation={props.onClick} className="header" />
      <main className="main">
        <SearchForm
          onSearch={setSearch}
          query={search.query}
          short={search.short}
        />
        {filteredMovies.length === 0 && search.query ? (
          <p className="serach-form__info">Ничего не найдено</p>
        ) : (
          <></>
        )}
        <MoviesCardList
          isLoadding={props.isLoadding}
          movies={filteredMovies}
          handleFavouriteClick={props.handleFavouriteClick}
          removeFavouriteMovie={props.removeFavouriteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
