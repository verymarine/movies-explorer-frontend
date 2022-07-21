import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import moviesApi from "../../utils/MoviesApi";
import React, { useEffect } from "react";
import "./Movies.css";
// import useDebounce from "../../hooks/useDebounce";


function Movies(props) {

    //
    const [showMovies, setShowMovies] = React.useState(16);

    //
    const [moreMovies, setMoreMovies] = React.useState(4);

    //
    const [width, setWidth] = React.useState(window.innerWidth);

    // const debouncedSearch = useDebounce(searchQuery, 1000);
    // const [page, setPage] = React.useState(1);
    // const limit = 16;

    //
    useEffect(() => {

        if (width >= 1023) {
            // onSubscribe();
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

    // const moviesList = props.showMore ? props.movies.slice(0, showMovies) : props.movies;
    const moviesList = props.filteredMovies.slice(0, showMovies);

    // function handleShowMoreMovies() {
    //     setMoreMovies(prevState => prevState + moreMovies);
    // }

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
                    // handleClick={handleClick}
                    handleFormSubmit={props.handleFormSubmit}
                    buttonSearch={props.buttonSearch}
                />
                <FilterCheckbox
                    handleCheckbox={props.handleCheckbox}
                    isChecked={props.isChecked}
                />
                <MoviesCardList
                
                    isLoadding={props.isLoadding}
                    movies={moviesList}
                    filteredMovies={props.filteredMovies}
                    handleShowMoreMovies={handleShowMoreMovies}
                    handleFouviretsClick={props.handleFouviretsClick}
                    removeFavouriteMovie={props.removeFavouriteMovie}

                />
            </main>
            <Footer />

        </>
    )
}

export default Movies;