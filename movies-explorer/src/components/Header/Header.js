import logo from "../../images/logo.svg";
import "./Header.css";
import "../Main/HeaderMain/HeaderMain.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={`${props.className}`}>
      <Link to="/">
        <img className="logo" src={logo} alt="Логотип сайта в виде круга" />
      </Link>
      <Link to="/movies" className="header__movies">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="header__saved-movies">
        Сохранённые фильмы
      </Link>
      <Link to="/profile" className="header__profile">
        Аккаунт
      </Link>
      <button
        className="header__navigation"
        type="button"
        onClick={props.openNavigation}
      ></button>
    </header>
  );
}
export default Header;
