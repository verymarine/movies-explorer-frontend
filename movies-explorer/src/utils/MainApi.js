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
      headers: {
        ...this._headers,
        authorization: localStorage.getItem("jwt"),
      },
    }).then(response);
  }

  getFavoriteMovies() {
    return fetch(`${this._url}/movies`, {
      headers: {
        ...this._headers,
        authorization: localStorage.getItem("jwt"),
      },
    }).then(response);
  }

  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",

      headers: {
        ...this._headers,
        authorization: localStorage.getItem("jwt"),
      },

      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(response);
  }

  postFavoriteMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",

      headers: {
        ...this._headers,
        authorization: localStorage.getItem("jwt"),
      },

      body: JSON.stringify({
        country: data.country || "нет данных",
        director: data.director || "нет данных",
        duration: data.duration || "нет данных",
        year: data.year || "нет данных",
        description: data.description || "нет данных",
        image: data.image.url, // data.image || "нет данных", `https://api.nomoreparties.co${data.image.url}`
        nameRU: data.nameRU || "нет данных",
        nameEN: data.nameEN || "нет данных",
        thumbnail: data.image.formats.thumbnail.url, // data.thumbnail || "нет данных",
        movieId: data.id || "нет данных",
        trailerLink: data.trailerLink || "нет данных",
      }),
    }).then(response);
  }

  deleteFavoriteMovie(dataId) {
    return fetch(`${this._url}/movies/${dataId}`, {
      method: "DELETE",

      headers: {
        ...this._headers,
        authorization: localStorage.getItem("jwt"),
      },
    }).then(response);
  }
}

const api = new MainApi({
  // url: 'https://api.moviehub.nomoredomains.xyz',
  url: "http://localhost:3000",
  headers: {
    "Content-Type": `application/json`,
  },
});

export default api;
