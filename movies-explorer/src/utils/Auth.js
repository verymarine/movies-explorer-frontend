// export const BASE_URL = 'https://api.moviehub.nomoredomains.xyz';
export const BASE_URL = 'http://localhost:3000';


export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err))
}

//
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err))
}

//
export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      // authorization: localStorage.jwt,
      // authorization: jwt,
    }
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}
