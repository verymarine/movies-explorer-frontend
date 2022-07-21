import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList(props) {

    return (
        <>
            <Switch>
                <Route path="/movies">
                    {props.isLoadding
                        ? <Preloader />
                        :
                        <section className="movies-list">
                            {props.movies?.map((item) =>
                                <MoviesCard
                                    key={item.movieId}
                                    _id={item._id}
                                    movie={item}
                                    country={item.country}
                                    director={item.director}
                                    duration={item.duration}
                                    year={item.year}
                                    description={item.description}
                                    image={item.image}
                                    nameRU={item.nameRU}
                                    nameEN={item.nameEN}
                                    thumbnail={item.thumbnail}
                                    trailerLink={item.trailerLink}
                                    handleFouviretsClick={props.handleFouviretsClick}
                                    removeFavouriteMovie={props.removeFavouriteMovie}
                                // className="movies-card__like"
                                />
                            )}
                        </section>
                    }
                </Route>
                <Route path="/saved-movies">
                    {props.isLoadding
                        ? <Preloader />
                        :
                        <section className="movies-list">
                            {props.favourites?.map((item) =>
                                <MoviesCard
                                    key={item.movieId}
                                    _id={item._id}
                                    movie={item}
                                    country={item.country}
                                    director={item.director}
                                    duration={item.duration}
                                    year={item.year}
                                    description={item.description}
                                    image={item.image}
                                    nameRU={item.nameRU}
                                    nameEN={item.nameEN}
                                    thumbnail={item.thumbnail}
                                    trailerLink={item.trailerLink}
                                    handleFouviretsClick={props.handleFouviretsClick}
                                    removeFavouriteMovie={props.removeFavouriteMovie}
                                // className="movies-card__like"
                                />
                            )}
                        </section>
                    }
                </Route>
            </Switch>
            <button className="movies-list__button-more" onClick={props.handleShowMoreMovies}>Ещё</button>
        </>


    );
}

export default MoviesCardList;
