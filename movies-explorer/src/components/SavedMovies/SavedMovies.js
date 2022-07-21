import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import Movies from "../Movies/Movies";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies(props) {
    //
    const [showMovies, setShowMovies] = React.useState(16);

    //
    const [moreMovies, setMoreMovies] = React.useState(4);

    //
    const [width, setWidth] = React.useState(window.innerWidth);

    // useEffect(() => {
    //     props.setFavourites([...props.favourites])
    // }, [])

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

    const favouritesList = props.favourites.slice(0, showMovies);

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

                    handleShowMoreMovies={handleShowMoreMovies}
                    isLoadding={props.isLoadding}
                    favourites={favouritesList}
                    filteredMovies={props.filteredMovies}
                    // handleShowMoreMovies={handleShowMoreMovies}
                    removeFavouriteMovie={props.removeFavouriteMovie}

                />
            </main>
            <Footer />
            {/* <Movies
                handleNavigationClick={props.handleNavigationClick}
                movies={props.movies}
            /> */}

        </>
    );
}

export default SavedMovies;