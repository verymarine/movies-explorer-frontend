import React from "react";
import { Route } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <article className="movies-card">
      <a
        className="movies-card__video-link"
        href={props.trailerLink}
        target="blank"
      >
        <img
          className="movies-card__video"
          src={`https://api.nomoreparties.co/${props.image}`}
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
            {props.movie.like === true ? (
              <button
                className="movies-card__liked"
                onClick={() => props.removeFavouriteMovie(props.movie)}
                type="button"
              ></button>
            ) : (
              <button
                className="movies-card__like"
                onClick={() => props.handleFavouriteClick(props.movie)}
                type="button"
              ></button>
            )}
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
