import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";


function Movies(props) {
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
    )
}

export default Movies;