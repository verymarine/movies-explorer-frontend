function response(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class MainApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {

            credentials: 'include',
            headers: this._headers,
            // authorization : jwt,
            // cookie: jwt,
        }).then(response);
    }

    getFavoriteMovies() {
        return fetch(`${this._url}/movies`, {

            credentials: 'include',
            headers: this._headers,
        }).then(response);
    }

    patchUserInfo(data) { //
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",

            credentials: 'include',
            headers: this._headers,

            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        }).then(response);
    }

    postFavoriteMovie(data) {
        return fetch(`${this._url}/movies`, {
            method: "POST",

            credentials: 'include',
            headers: this._headers,

            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                thumbnail: data.thumbnail,
                movieId: data.movieId,
                trailerLink: data.trailerLink,
            }),
        }).then(response);
    }

    deleteFavoriteMovie(dataId) {
        return fetch(`${this._url}/movies/${dataId}`, {
            method: "DELETE",

            credentials: 'include',
            headers: this._headers,
        }).then(response);
    }
}

const api = new MainApi({
    // url: 'https://api.moviehub.nomoredomains.xyz',
    url: 'http://localhost:3000',
    headers: {
        // authorization: localStorage.getItem("jwt"),
        "Content-Type": `application/json`,
    },
});

export default api;
