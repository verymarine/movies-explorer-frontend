import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {

  // стейт в котором меняется значения лайка
  const [like, setLike] = useState(localStorage.getItem("like") || false);

  return (
    <article className="movies-card">
      <a className="movies-card__video-link"
        href={props.trailerLink}
        target="blank"
      >
        <img
          className="movies-card__video"
          src={`https://api.nomoreparties.co/${props.image}`} // добавила  url
          alt="картинка промо видео"
        />
      </a>
      <div className="movies-card__info">
        <div className="movies-card__test">
          <h2 className="movies-card__title">{props.nameRU}</h2>
          <h3 className="movies-card__duration">{props.duration}</h3>
        </div>
        <div className="movies-card__like-area">
          <Route path="/movies">
            {like === true
              ? <button
                className="movies-card__liked"
                onClick={() => props.removeFavouriteMovie(props.movie, setLike(false), localStorage.setItem("like", like))}
                type="button"
              ></button>
              : <button
                className="movies-card__like"
                onClick={() => props.handleFavouriteClick(props.movie, setLike(true))}
                type="button"
              ></button>
            }
          </Route>

          <Route path="/saved-movies">
            <button
              className="movies-card__delete"
              onClick={() => props.removeFavouriteMovie(props.movie)}
              type="button"
            ></button>
          </Route>

        </div>
      </div>
    </article>
  );
}

export default MoviesCard;
