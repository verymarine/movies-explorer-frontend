import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
    return (
        <div className={`navigation ${props.isOpen ? "navigation__opened" : ""}`}>
            <nav className="navigation__block">
                <button className="navigation__close" type="button" onClick={props.onClose}></button>
                <Link to="/" className="navigation__main">Главная</Link>
                <Link to="/movies" className="navigation__movies">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__saved-movies">Сохранённые фильмы</Link>
                <Link to="/profile" className="navigation__profile">Аккаунт</Link>
            </nav>
        </div>
    )
}

export default Navigation;
