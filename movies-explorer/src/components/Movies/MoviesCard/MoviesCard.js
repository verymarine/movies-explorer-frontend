import "./MoviesCard.css";
import video from "../../../images/video.svg";

function MoviesCard(props) {
    return (
        <article className="movies-card">
        <img
          className="movies-card__video"
          src={video}
          alt="картинка промо видео"
        />
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <h3 className="movies-card__duration">1ч42м</h3>
          <div className="movies-card__like-area">
            <button
              className="movies-card__like"
              type="button"
            ></button>
          </div>
        </div>
      </article>
    );
}

export default MoviesCard;