import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies(props) {
    return (
        <>
            <Header
                openNavigation={props.onClick}
            />
            <main className="main">
                <SearchForm />
                <FilterCheckbox />
                <MoviesCardList />
            </main>
            <Footer />

        </>
    );
}

export default SavedMovies;