import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import React, { useEffect, useState } from "react";
import "./Movies.css";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  // Стейт, в котором содержится значение параметров поиска
  const [search, setSearch] = useState(getDefaultSearch());

  // эффект с помощью котого мы сохранияем значения тек. поиска в локалстордж
  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, [search]);

  // ф-я проверки наличия значений в локалстордж и определение состояния поиска
  function getDefaultSearch() {
    const search = localStorage.getItem("search");
    if (search) {
      try {
        return JSON.parse(search);
      } catch (e) {
      }
    }

    return {
      query: "",
      short: false,
    };
  }

  // ф-я условия фильтрации фильмов
  const filteredMovies = props.movies.filter((movie) => {
    return (
      search.query &&
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
        {filteredMovies.length === 0 && !search.query ? (
          <p className="serach-form__info">Нужно ввести ключевое слово</p>
        ) : (
          <></>
        )}
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

export default Movies;
