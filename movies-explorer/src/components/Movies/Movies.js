import Header from "../Header/Header";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";


function Movies(props) {
    return (
        <div>
            <Header />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
        </div>
    )
}

export default Movies;