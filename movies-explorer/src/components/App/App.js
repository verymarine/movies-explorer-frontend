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
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

// import ProtectedRoute from "./ProtectedRoute";



function App() {

    return (
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>

                <Route path="/movies">
                    <Movies />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/saved-movies">
                    <SavedMovies />
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
            </Switch>
        </div>
    );
}

export default withRouter(App);
