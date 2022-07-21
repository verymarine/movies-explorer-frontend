import logo from "../../../images/logo.svg";
import "./HeaderMain.css";
import { Link } from "react-router-dom";

function HeaderMain(props) {
  return (
    <header className="header-main">
      <img className="logo" src={logo} alt="Логотип сайта в виде круга" />
      {/* <p className={`${props.userEmail && "header__email"}`}>{props.userEmail}</p> */}
      <Link
        to='/signup' className="header-main__register" >Регистрация
      </Link>
      <Link
        to='/signin' className="header-main__login" >Войти
      </Link>
    </header>
  );
}
export default HeaderMain;