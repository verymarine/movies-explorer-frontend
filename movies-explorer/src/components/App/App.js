import React from "react";
// import {
//     Route,
//     Switch,
//     Redirect,
//     withRouter,
//     // useHistory,
// } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";

// import ProtectedRoute from "./ProtectedRoute";



function App() {

    return (
        <div>
            {/* <CurrentUserContext.Provider value={currentUser}> */}
            {/* <Switch> */}
            {/* <ProtectedRoute component={Main}  path="/main" /> */}
            {/* <Route path="/signup"> <Register /></Route> */}
            {/* <Route path="/signin"> <Login />  </Route> */}
            {/* <Route exact path="/">{loggedIn ? <Redirect to="/main" /> : <Redirect to="/signin" />}</Route> */}
            {/* <Route path="*">{<Redirect to="/" />}</Route> */}
            {/* </Switch> */}


            {/* <Header /> */}
            {/* <Main /> */}
            {/* <Movies /> */}
            <Route path="signup">


            </Route>
            <Route path="signin">
                <Login />
            </Route>
            <Route path="signup">
                {/* <Register /> */}
            </Route>
            {/* <Footer /> */}


            {/* <Footer /> */}
            {/* </CurrentUserContext.Provider> */}
        </div>
    );
}

export default withRouter(App);
