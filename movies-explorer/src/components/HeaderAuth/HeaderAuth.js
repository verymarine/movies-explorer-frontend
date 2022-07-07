import { Route, Switch } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./HeaderAuth.css";


function HeaderAuth(props) {
    return (
        <header className="header-auth">
            <Switch>
                <Route  path="/signup">
                    <img className="header-auth__logo" src={logo} alt="логотип в виде круга" />
                    <h2 className="header-auth__title">Добро пожаловать!</h2>
                </Route>
                <Route path="/signin">
                    <img className="header-auth__logo" src={logo} alt="логотип в виде круга" />
                    <h2 className="header-auth__title">Рады видеть!</h2>
                </Route>
            </Switch>



        </header>
    );
}

export default HeaderAuth;