import { Link, Route, Switch } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./HeaderAuth.css";

function HeaderAuth(props) {
  return (
    <header className="header-auth">
      <Switch>
        <Route path="/signup">
          <Link to="/">
            <img
              className="header-auth__logo"
              src={logo}
              alt="логотип в виде круга"
            />
          </Link>
          <h2 className="header-auth__title">Добро пожаловать!</h2>
        </Route>
        <Route path="/signin">
          <Link to="/">
            <img
              className="header-auth__logo"
              src={logo}
              alt="логотип в виде круга"
            />
          </Link>
          <h2 className="header-auth__title">Рады видеть!</h2>
        </Route>
      </Switch>
    </header>
  );
}

export default HeaderAuth;
