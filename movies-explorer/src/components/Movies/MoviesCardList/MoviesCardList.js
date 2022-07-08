import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
    return (
        <>
            <section className="movies-list">
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__liked"
                />
                <MoviesCard
                    className="movies-card__delete"
                />
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__liked"
                />
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__delete"
                />
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__liked"
                />
                <MoviesCard
                    className="movies-card__liked"
                />
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__like"
                />
                <MoviesCard
                    className="movies-card__like"
                />

                <MoviesCard
                    className="movies-card__delete"
                />
            </section>
            {/* <button className="movies-list__button-more">Ещё</button> */}
        </>


    );
}

export default MoviesCardList;