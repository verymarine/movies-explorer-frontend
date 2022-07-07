import logo from "../../images/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип сайта в виде круга" />
      {/* <p className={`${props.userEmail && "header__email"}`}>{props.userEmail}</p> */}
      <Link
        to='/signup' className="header__register" onClick={props.exit}>Регистрация
      </Link>
      <Link
        to='/signin' className="header__login" onClick={props.exit}>Войти
      </Link>
    </header>
  );
}
export default Header;