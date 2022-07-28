import logo from "../../../images/logo.svg";
import "./HeaderMain.css";
import { Link } from "react-router-dom";
import Preloader from "../../Movies/Preloader/Preloader"; //

function HeaderMain(props) {
  return (
    <header className="header-main">
      <img className="logo" src={logo} alt="Логотип сайта в виде круга" />
      {!props.loading ? (
        <>
          <Link to="/signup" className="header-main__register">
            Регистрация
          </Link>
          <Link to="/signin" className="header-main__login">
            Войти
          </Link>
        </>
      ) : (
        <Preloader></Preloader>
      )}
    </header>
  );
}
export default HeaderMain;
