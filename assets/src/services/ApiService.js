class ApiService {

    constructor(api){
        this.api = api
    }

    getMovies = () => fetch(this.api + "/movies").then(res => res.json())

    createMovie = (newMovie) => {
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
}