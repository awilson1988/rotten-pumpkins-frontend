class Movie {

    static all = []
    constructor(data){
        this.data = data
        this.constructor.all.push(this)
        console.log(this)
    }

    renderCard = () => {
        const { title, overview, director, releaseDate, imageUrl, id } = this.data
        document.getElementById("movie-container").innerHTML += `
            <div class="movie-card" data-id=${id}>
            <IMG SRC=${imageUrl} alt=${title}/>
            <p class="title">${title}</p>
            <p>${director}</p> 
            <p>${releaseDate}</p>
            <p>${overview}</p>
            </div>`
    }

    renderShow = () => {
        const { title, overview, director, releaseDate, imageUrl } = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
            <h1>${title}</h1>
            <IMG SRC="${imageUrl}" alt=${title}/> 
            <p>Director: ${director}</p> 
            <p>Release Date:${releaseDate}</p> 
            <p>${overview}</p>
        </div>
        <button id="Back">Back</button>
        `
        document.getElementById("Back").addEventListener("click", Movie.renderIndex)
    }

    static find = (id) => this.all.find(movie => movie.data.id == id)

    
    static getMovies = () => {
        api.getMovies().then(movies => {
            movies.forEach(movie => new Movie(movie))
            this.renderIndex()
        })
    }
    
    static renderIndex = () => {
        const movieContainer = document.createElement("div")
        movieContainer.id = "movie-container"
        const main = document.getElementById("main")
        main.innerHTML = ""
        main.appendChild(movieContainer)
        this.all.forEach(movie => movie.renderCard())
        movieContainer.addEventListener("click", this.handleIndexClick)
    }
    
    static handleIndexClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
            const id = e.target.closest(".movie-card").dataset.id
            this.find(id).renderShow()
        }
    }
}