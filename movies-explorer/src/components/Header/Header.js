import logo from "../../images/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">

      {/* <p className={`${props.userEmail && "header__email"}`}>{props.userEmail}</p> */}
      <div className="header__movies-block">
        <Link to="/">
        <img className="logo" src={logo} alt="Логотип сайта в виде круга" />
        </Link>
        <Link to="/movies" className="header__movies">Фильмы</Link>
        <Link to="/saved-movies" className="header__saved-movies">Сохранённые фильмы</Link>
      </div>
      <Link to="/profile" className="header__profile">Аккаунт</Link>
      {/* <Link
        to='/signup' className="header__register" onClick={props.exit}>Регистрация
      </Link>
      <Link
        to='/signin' className="header__login" onClick={props.exit}>Войти
      </Link> */}
    </header>
  );
}
export default Header;