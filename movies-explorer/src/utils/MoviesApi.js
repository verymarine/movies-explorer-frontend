function response(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getMovies() {  // jwt
        return fetch(`${this._url}`, { // ?query=${searchQuery} + add to method

            // credentials: 'include',
            headers: this._headers,
        }).then(response);
    }
}

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "Content-Type": `application/json`,
    },
});

export default moviesApi;