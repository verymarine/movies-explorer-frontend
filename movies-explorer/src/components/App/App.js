import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import * as auth from "../../utils/Auth.js";
import api from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRouteAuth from "../ProtectedRouteAuth";

function App() {
  // Стейт, в котором содержится значения лайка карточки
  // const [like, setLike] = useState(false);
  // Стейт, в котором мы задаем фильмы после поиска
  // const [isMovies, setIsMovies] = useState([])

  // Стейт с помощью которого на странице Муви пустота
  // const [isBlankPage, setIsBlankPage] = useState(false);

  // хук, который возвращает значение текущего path
  // const location = useLocation();

  // Стейт, в котором содержится значение Пользователя
  const [currentUser, setCurrentUser] = useState({});

  // Стейт, в котором содержится значение Фильмов которые мы получили со стороннего апи
  const [movies, setMovies] = useState([]);

  // Стейт, в котором содержится значение состояния Прелоудера
  const [isLoadding, setIsLoadding] = useState(false);

  // Стейт, в котором содержится значение навигации
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  // Стейт, в котором содержится значение loggin
  const [loggedIn, setLoggedIn] = useState(undefined);

  // Стейт, в котором содержится значение Любимых фильмов Пользователя
  const [favourites, setFavourites] = useState([]);

  // Стейт, в котором содержится значение изменения профиля
  const [isUpdate, setIsUpdate] = useState(false);

  // Стейт, в котором содержится значение состояния кнопки редактирования
  const [buttonUpdate, setButtonUpdate] = useState(false);

  // Стейт, в котором содержится значение неактивной кнопки
  const [unactiveButton, setUnactiveButton] = useState(false);

  // используем для сохранения/удаления данных об вошедшем пользователе
  const history = useHistory();

  // получаем информацию о текущем пользователе
  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  // получаем ифнормацию о любимых фильмах залогиненного пользователя, добавляем значения лайк
  useEffect(() => {
    if (!loggedIn || !movies) {
      return;
    }

    api
      .getFavoriteMovies()
      .then((data) => {
        const moviesMap = new Map(movies.map((x) => [x.id, x]));

        data = data.map((item) => {
          const movie = moviesMap.get(item.movieId);
          movie.like = true;

          return movie;
        });

        setFavourites(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn, movies]);

  //
  function handleLogin() {
    setLoggedIn(true);
  }

  // ф-я проверки токена
  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("jwt");
          setLoggedIn(false);
        });
    } else {
      setLoggedIn(false);
    }
  }

  // хук, который применяет проверку токена
  useEffect(() => {
    handleTokenCheck();
  }, []);

  // рвбочий вариант приема фильмов
  useEffect(() => {
    moviesApi
      .getMovies()
      .then((res) => setMovies(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ф-я добавления фильма в любимые
  function addFavouriteMovie(movie) {
    api
      .postFavoriteMovie(movie)
      .then((newFavourite) => {
        movie.like = true;
        setFavourites([...favourites, movie]);
      })
      .catch((err) => console.log("Ошибка", err));
  }

  // ф-я удаления фильма из любимых
  function removeFavouriteMovie(movie) {
    api
      .deleteFavoriteMovie(movie.id)
      .then(() => {
        delete movie.like;
        setFavourites((favourites) =>
          favourites.filter((favourite) => favourite.id !== movie.id)
        );
      })
      .catch((err) => console.log("Ошибка", err));
  }

  // ф-я редактирования профиля
  function handleUpdateProfile(user) {
    api
      .patchUserInfo(user)
      .then((userData) => {
        setButtonUpdate(true);
        setCurrentUser(userData);

        console.log(userData, "userdata");
        setIsUpdate(true);
        setTimeout(setIsUpdate, 4000);
      })
      .catch((err) => {
        setButtonUpdate(false);
        setIsUpdate(false);
        console.log("ERORR", err);
      });
  }

  // ф-я выхода
  function handleLogout(evt) {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  }

  // Обработчик открытия навигации
  function handleNavigationClick() {
    setIsNavigationOpen(true);
  }

  // обработчик закрытия навигации
  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  // таймер закрытия нав окна
  setTimeout(closeNavigation, 7000);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} onClick={handleNavigationClick} />
          </Route>
          <ProtectedRoute
            loggedIn={loggedIn}
            component={Movies}
            path="/movies"
            movies={movies}
            isLoadding={isLoadding}
            onClick={handleNavigationClick}
            handleFavouriteClick={addFavouriteMovie}
            removeFavouriteMovie={removeFavouriteMovie}
          />

          <ProtectedRoute
            loggedIn={loggedIn}
            component={Profile}
            path="/profile"
            exit={handleLogout}
            onClick={handleNavigationClick}
            onUpdateProfile={handleUpdateProfile}
            isUpdate={isUpdate}
            buttonUpdate={buttonUpdate}
            setCurrentUser={setCurrentUser}
            handleUpdateProfile={handleUpdateProfile}
            unactiveButton={unactiveButton}
            setUnactiveButton={setUnactiveButton}
          />

          <ProtectedRoute
            loggedIn={loggedIn}
            component={SavedMovies}
            path="/saved-movies"
            movies={favourites}
            isLoadding={isLoadding}
            onClick={handleNavigationClick}
            removeFavouriteMovie={removeFavouriteMovie}
          />

          <ProtectedRouteAuth
            component={Login}
            path="/signin"
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            unactiveButton={unactiveButton}
            setUnactiveButton={setUnactiveButton}
          />

          <ProtectedRouteAuth
            component={Register}
            path="/signup"
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            unactiveButton={unactiveButton}
            setUnactiveButton={setUnactiveButton}
          />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
