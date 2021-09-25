class ApiService {

    constructor(api) {
        this.api = api
    }

    getMovies = () => fetch(this.api + "/movies").then(res => res.json())

    createMovie = (newMovie) => {
      newMovie.user_id = user.id
      return fetch(this.api + "/movies", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      })
      .then(response => response.json())
    }

    findOrCreateUser = (username) => {
      return fetch(this.api + "/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username}),
      })
      .then(response => response.json())
    }

    createFavorite = (newFavorite) => {
      return fetch(this.api + "/users", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFavorite),
      })
      .then(response => response.json())
      // .then(favorites => putFavoritesOnDom(favorites))
    }
    
}