class Movie {

    static all = []
    constructor(data){
        this.data = data
        this.constructor.all.push(this)
        console.log(this)
    }

    renderCard = () => {
        const { title, overview, director, releaseDate, imageUrl, id } = this.data
        document.querySelector(".movie-container").innerHTML += `
            <div class="movie-card">
            <img scr=${imageUrl} alt=${title}/>
            <p class="title">${title}</p>
            <p>${overview}</p>
            </div>`
    }


    static renderIndex(){
        const movieContainer = document.createElement("div")
        movieContainer.classList.add("movie-container")
        document.getElementById("main").appendChild(movieContainer)
        this.all.forEach(movie => movie.renderCard())
    }

    static getMovies(){
        api.getMovies().then(movies => {
            movies.forEach(movie => new Movie(movie))
        })
    }
}