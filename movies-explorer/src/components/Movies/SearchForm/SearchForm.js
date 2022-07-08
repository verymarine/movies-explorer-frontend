import "./SearchForm.css";

function SearchForm(props) {
    return (
        <section className="search-form">
            <form  className="search-form__form" action="" method="get">
                <input className="search-form__input" name="movie" placeholder="Фильм" type="search"/>
                    <button className="search-form__button" type="submit">Найти</button>
            </form>
        </section>
    );
}
export default SearchForm;