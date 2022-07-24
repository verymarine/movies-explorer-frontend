import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import React, { useEffect, useState } from "react";
import "./Movies.css";

function Movies(props) {

    const [showMovies, setShowMovies] = useState(0);
    const [moreMovies, setMoreMovies] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);


    const moviesList = props.filteredMovies.slice(0, showMovies);
    // console.log(moviesList, 'moviesList');

    const moviesLength = moviesList.length;
    // console.log(moviesLength, 'moviesLength');

    const result = props.movies.slice(0, showMovies).length;
    // console.log(result, 'result');

    const filteredMoviesLength = props.filteredMovies.length;
    // console.log(filteredMoviesLength, 'filteredMoviesLength');

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
        // setShowMovies(16);
        // setMoreMovies(4);
    }, [width]);

    // const onSubscribe = () => {
    //     window.addEventListener('resize', setwidth)
    //    }

    // const offSubscribe = () =>
    //     window.removeEventListener('resize', setwidth)

    useEffect(() => {
        window.addEventListener("resize", () => setTimeout(() => {
            handleResize();
        }, 500));

        return window.removeEventListener("resize", handleResize());
    }, [width]);

    const handleResize = () => {
        setWidth(
            window.innerWidth,
        )
    };

    function handleShowMoreMovies() {
        setShowMovies(showMovies + moreMovies);
    }

    return (
        <>
            <Header
                openNavigation={props.onClick}
                className="header"
            />
            <main className="main">
                <SearchForm
                    handleInputChange={props.handleInputChange}
                    handleFormSubmit={props.handleFormSubmit}
                    buttonSearch={props.buttonSearch}
                    filteredMovies={props.filteredMovies}
                    filteredMoviesLength={filteredMoviesLength}
                />
                <FilterCheckbox
                    handleCheckbox={props.handleCheckbox}
                    isChecked={props.isChecked}
                />
                <MoviesCardList
                    isLoadding={props.isLoadding}
                    movies={moviesList}
                    moviesLength={moviesLength}
                    result={result}
                    filteredMovies={props.filteredMovies}
                    handleShowMoreMovies={handleShowMoreMovies}
                    handleFavouriteClick={props.handleFavouriteClick}
                    removeFavouriteMovie={props.removeFavouriteMovie}
                    like={props.like}
                    
                />
            </main>
            <Footer />
        </>
    )
}

export default Movies;
