import React, { useEffect, useState } from "react";
import {
    Route,
    Switch,
    withRouter,
    useHistory,
    useLocation,
} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"

import * as auth from "../../utils/Auth.js";
import api from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute";
import moviesApi from "../../utils/MoviesApi";

function App() {

    // Стейт, в котором содержится значение Пользователя
    const [currentUser, setCurrentUser] = useState({}); // data:{}

    // Стейт, в котором содержится значение Фильмов
    const [movies, setMovies] = useState([]); // 1

    // Стейт, в котором содержится значение текста поиска
    const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchResult') || ''); // 2

    // Стейт, в котором содержится значение состояния Прелоудера
    const [isLoadding, setIsLoadding] = useState(false); // 3

    // Стейт, в котором содержится значение состояния Чекбокса Короткометражек
    const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('checkedFilter') || false)); // 4

    // Стейт, в котором содержится значение состояния кнопки поиска
    const [buttonSearch, setButtonSearch] = useState(false);

    // Стейт, в котором содержится значение навигации
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    // Стейт, в котором содержится значение loggin
    const [loggedIn, setLoggedIn] = useState(false);

    // Стейт, в котором содержится значение Любимых фильмов Пользователя
    const [favourites, setFavourites] = useState([]);

    // Стейт, в котором содержится значение изменения профиля
    const [isUpdate, setIsUpdate] = useState(false);

    // Стейт, в котором содержится значение состояния кнопки редактирования
    const [buttonUpdate, setButtonUpdate] = useState(false);

    // Стейт, в котором содержится значение неактивной кнопки
    const [unactiveButton, setUnactiveButton] = useState(false);

    // Стейт, в котором содержится значения лайка карточки
    // const [like, setLike] = useState(false);


    // const debouncedSearch = useCallback()

    // используем для сохранения/удаления данных об вошедшем пользователе
    const history = useHistory();

    // хук, который возвращает значение текущего path
    const location = useLocation();

    // получаем информацию о текущем пользователе
    useEffect(() => {
        if (loggedIn) {
            api.getUserInfo()
                .then(data => {
                    setCurrentUser(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [loggedIn]);

    // получаем ифнормацию о любимых фильмах залогиненного пользователя
    useEffect(() => {
        if (!loggedIn) {
            return;
        }
        api.getFavoriteMovies()
            .then(data => {
                setFavourites((data) = data.filter((f) => f.owner._id === currentUser._id));
            })
            .catch((err) => {
                console.log(err)
            })
    }, [currentUser, loggedIn]);

    // 
    function handleLogin() {
        // setLoggedIn(true);
        handleTokenCheck();
    }

    // ф-я проверки токена
    const handleTokenCheck = (pathname) => {
        const jwt = localStorage.getItem("jwt");
        // const jwt = document.cookie('jwt');

        if (jwt) {
            auth
                .checkToken(jwt)
                .then(() => {
                    setLoggedIn(true);
                    history.push(pathname);
                })
                .catch((err) => console.log(err));
        }
    };

    // хук, который применяет проверку токена в зависимости от path
    useEffect(() => {
        handleTokenCheck(location.pathname);
    }, []);

    // ф-я выхода 
    function handleLogout(evt) {
        // evt.preventDefault();
        // localStorage.removeItem("jwt");
        // localStorage.removeItem("checkedFilter");
        // localStorage.removeItem("searchResult");
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        history.push("/");
    }

    // хук, с помощью которого мы расширяем значения фильма и добавляем новое значение id по которому будем сравнивать и удалять
    useEffect(() => {
        const result = movies.map(movie => {
          const favouriteList = favourites.find(x => movie.id === x.movieId);
          movie.id = movie.movieId;
          movie._id = favouriteList?._id;
        //   movie.like = false;
          return movie;
        });
        setMovies(result);
      }, [favourites]);

   // БЛОК ГДЕ ОТОБРАЖАЮТСЯ ФИЛЬМЫ 
    useEffect(() => {
        setButtonSearch(true);
        if (searchQuery !== '') {
            setButtonSearch(false);
            setIsLoadding(true);
            moviesApi.getMovies()
                .then(data => {
                    const movies = data.map(item => {
                        return {
                            country: item.country,
                            director: item.director,
                            duration: item.duration,
                            year: item.year,
                            description: item.description,
                            image: item.image.url,
                            nameRU: item.nameRU,
                            nameEN: item.nameEN,
                            thumbnail: item.image.formats.thumbnail.url,
                            movieId: item.id,
                            trailerLink: item.trailerLink
                        }
                    })
                    setMovies(movies);
                    localStorage.setItem('searchResult', searchQuery);
                    if (isChecked) {
                        const checkedFilter = movies.filter((movie) => movie.duration <= 40);
                        setMovies(checkedFilter);
                        localStorage.setItem('checkedFilter', isChecked);
                        return;
                    }
                })
                .catch((err) => console.log(err.status))
                .finally(() => {
                    setIsLoadding(false);
                    localStorage.setItem('checkedFilter', isChecked);
                })
        } else if (searchQuery === '') {
            setMovies([]);
            setButtonSearch(true);

        }
    }, [searchQuery, isChecked]);


    // useEffect(() => {
    //     setButtonSearch(true);
    //     if (searchQuery !== '') {
    //         setButtonSearch(false);
    //         setIsLoadding(true);
    //         setFavourites()
    //         if (isChecked) {
    //             const checkedFilter = favourites.filter((favourite) => favourite.duration <= 40);
    //             setFavourites(checkedFilter);
    //             return;
    //         }
    //     } else if (searchQuery === '') {
    //         setButtonSearch(true);
    //     }
    // }, [searchQuery, isChecked, favourites]);



    // useEffect(() => {
    //     setButtonSearch(true);
    //     if (searchQuery !== '') {
    //         setButtonSearch(false);
    //         setIsLoadding(true);
    //            const movies = favourites.filter((favourite)=> favourite)

    //         setFavourites(movies);
    //         if (isChecked) {
    //             const checkedFilter = favourites.filter((movie) => movie.duration <= 40);
    //             setFavourites(checkedFilter);
    //             return;
    //         } else if (searchQuery === '') {
    //             setButtonSearch(true);

    //         }
    //     }
    // }, [searchQuery, isChecked, favourites]);




    // рвбочий вариант приема фильмов 
    // useEffect(() => {
    //     moviesApi.getMovies()
    //         .then(setMovies)
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, []);
    // console.log(movies)





    // ф-я поиска фильмов
    function handleInputChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        setSearchQuery(e.target.value);
    }

    // ф-я сабмита поиска фильмов
    function handleFormSubmit(e) {
        e.preventDefault();
    }

    // ф-я условия фильтрации фильмов
    const filteredMovies = movies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
    })

    // const filteredFavouriteMovies = favourites.filter(favourite => {
    //     return favourite.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
    // })

    // ф-я чекида короткометражек
    function handleCheckbox(e) {
        //  e.target.checked
        // console.log(e.target.value);
        // setShortFilmsFilter(movies.filter((movie) => movie.duration <= 40));
        // // setSearchQuery(e.target.value);
        setIsChecked(e.target.checked);
    }

    // ф-я добавления фильма в любимые
    function addFavouriteMovie(movie) {
            api.postFavoriteMovie(movie)
                .then(newFavouriteList => {
                    setFavourites([...favourites, newFavouriteList]);
                    // setLike(true);
                    // setFavourites([newFavouriteList, (favourites) => favourites.filter((favourite) => favourite._id !== movie._id)])
                })
                .catch((err) => console.log("Ошибка", err));
    }

    // ф-я удаления фильма из любимых
    function removeFavouriteMovie(movie) {
        api.deleteFavoriteMovie(movie._id)
            .then(() => {
                setFavourites((favourites) => favourites.filter((favourite) => favourite._id !== movie._id));
                // setLike(false);
            })
            .catch((err) => console.log("Ошибка", err));
    }

    // ф-я редактирования профиля
    function handleUpdateProfile(user) {
        api.patchUserInfo(user).then((userData) => {
            setButtonUpdate(true);
            setCurrentUser(userData);

            console.log(userData, 'userdata');
            setIsUpdate(true)
            setTimeout(setIsUpdate, 4000);
        })
            .catch((err) => {
                setButtonUpdate(false);
                setIsUpdate(false);
                console.log("ERORR", err)
            });
    }

    // Обработчик открытия навигации
    function handleNavigationClick() {
        setIsNavigationOpen(true);
    }

    // обработчик закрытия навигации
    function closeNavigation() {
        setIsNavigationOpen(false);
    }

    setTimeout(closeNavigation, 7000);

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Switch>
                    <Route exact path="/">
                        <Main
                            loggedIn={loggedIn}
                            onClick={handleNavigationClick}
                        />
                    </Route>
                    <ProtectedRoute loggedIn={loggedIn}
                        component={Movies}
                        path="/movies"
                        movies={movies}
                        buttonSearch={buttonSearch}
                        isChecked={isChecked}
                        isLoadding={isLoadding}
                        filteredMovies={filteredMovies}
                        handleFormSubmit={handleFormSubmit}
                        handleCheckbox={handleCheckbox}
                        handleInputChange={handleInputChange}
                        onClick={handleNavigationClick}
                        handleFavouriteClick={addFavouriteMovie}
                        removeFavouriteMovie={removeFavouriteMovie}
                    />

                    <ProtectedRoute loggedIn={loggedIn}
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

                    <ProtectedRoute loggedIn={loggedIn}
                        component={SavedMovies}
                        path="/saved-movies"
                        movies={movies}
                        favourites={favourites}
                        setFavourites={setFavourites}
                        filteredMovies={filteredMovies}
                        buttonSearch={buttonSearch}
                        isChecked={isChecked}
                        isLoadding={isLoadding}
                        handleFormSubmit={handleFormSubmit}
                        handleCheckbox={handleCheckbox}
                        handleInputChange={handleInputChange}
                        onClick={handleNavigationClick}
                        removeFavouriteMovie={removeFavouriteMovie}
                    />

                    <Route path="/signin">
                        <Login
                            handleLogin={handleLogin}
                            unactiveButton={unactiveButton}
                            setUnactiveButton={setUnactiveButton}
                        />
                    </Route>

                    <Route path="/signup">
                        <Register
                            handleLogin={handleLogin}
                            unactiveButton={unactiveButton}
                            setUnactiveButton={setUnactiveButton}
                        />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Navigation
                    isOpen={isNavigationOpen}
                    onClose={closeNavigation}
                />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default withRouter(App);
