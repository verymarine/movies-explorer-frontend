import React from "react";
// import {
//     Route,
//     Switch,
//     Redirect,
//     withRouter,
//     // useHistory,
// } from "react-router-dom";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";

// import ProtectedRoute from "./ProtectedRoute";




function App() {

    // Стейт, в котором содержится значение навигации
    const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);

    // Обработчик открытия попапа Редактирование профиля обновляет стейт
    function handleNavigationClick() {
        setIsNavigationOpen(true);
    }

    function closeNavigation() {
        setIsNavigationOpen(false);
    }

    return (
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>

                <Route path="/movies">
                    <Movies
                        onClick={handleNavigationClick}
                    />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/saved-movies">
                    <SavedMovies
                        onClick={handleNavigationClick}
                    />
                </Route>

                <Route path="/signin">
                    <Login />
                </Route>

                <Route path="/signup">
                    <Register />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>

                <Navigation />
            </Switch>
            <Navigation
                isOpen={isNavigationOpen}
                onClose={closeNavigation}
            />
        </div>
    );
}

export default withRouter(App);
