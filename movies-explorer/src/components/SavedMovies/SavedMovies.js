import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies(props) {
    const [showMovies, setShowMovies] = useState(16);

    const [moreMovies, setMoreMovies] = useState(4);

    const [width, setWidth] = useState(window.innerWidth);

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

    const favouritesList = props.favourites.slice(0, showMovies);

    const result = favouritesList;

    const favouritesLength = favouritesList.length;

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
                    favouritesLength={favouritesLength}
                />
                <FilterCheckbox
                    handleCheckbox={props.handleCheckbox}
                    isChecked={props.isChecked}
                />
                <MoviesCardList
                    handleShowMoreMovies={handleShowMoreMovies}
                    isLoadding={props.isLoadding}
                    favourites={favouritesList}
                    favouritesLength={favouritesLength}
                    result={result}
                    filteredMovies={props.filteredMovies}
                    removeFavouriteMovie={props.removeFavouriteMovie}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
