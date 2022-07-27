import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  //  стейт, в котором хранится количество показаных фильмов
  const [showMovies, setShowMovies] = useState(0);

  //  стейт, в котором хранится количество фильмов показа еще
  const [moreMovies, setMoreMovies] = useState(0);

  // стейт ширины экрана
  const [width, setWidth] = useState(window.innerWidth);

  // эффект с помощью которого устанавливается необходимое кол-во фильмов в зав. от width экрана
  useEffect(() => {
    if (width >= 1023) {
      setShowMovies(16);
      setMoreMovies(4);
    } else if (width >= 768) {
      setShowMovies(8);
      setMoreMovies(2);
    } else {
      setShowMovies(5);
      setMoreMovies(2);
    }
  }, [width]);

  // эффект с помощью которого отслеживается ширина экрана
  useEffect(() => {
    window.addEventListener("resize", () =>
      setTimeout(() => {
        handleResize();
      }, 500)
    );

    return window.removeEventListener("resize", handleResize());
  }, [width]);

  // ф-я записи ширины экрана в стейт
  function handleResize() {
    setWidth(window.innerWidth);
  }

  // ф-я добавления еще фильмов на экран
  function handleShowMoreMovies() {
    setShowMovies(showMovies + moreMovies);
  }

  //
  if (props.isLoading) {
    return <Preloader />;
  }

  const total = props.movies.length; // вынести в константу
  const visibleMovies = props.movies.slice(0, showMovies); // вынести в константу

  return (
    <>
      <section className="movies-list">
        {visibleMovies.map((item) => (
          <MoviesCard
            key={item.id}
            movie={item}
            like={item.like}
            country={item.country}
            director={item.director}
            duration={item.duration}
            year={item.year}
            description={item.description}
            image={item.image.url}
            nameRU={item.nameRU}
            nameEN={item.nameEN}
            thumbnail={item.thumbnail}
            trailerLink={item.trailerLink}
            handleFavouriteClick={props.handleFavouriteClick}
            removeFavouriteMovie={props.removeFavouriteMovie}
          />
        ))}
      </section>

      {visibleMovies.length < total ? (
        <button
          className="movies-list__button-more"
          onClick={handleShowMoreMovies}
        >
          Ещё
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

export default MoviesCardList;
