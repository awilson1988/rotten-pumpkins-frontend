class Movie {

    static all = []
    
    constructor(data){
        this.data = data
        this.id = data.id
        this.favorites = this.data.favorites.map((favorite) => new Favorite(favorite))
        this.constructor.all.push(this)
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
            <p class="favorites" id="favorites" data-id=${id}> ♡ </p>
            </div>`
    }

    static handleSubmit = (e) => {
        e.preventDefault()
        const newMovie = {
            title: e.target.title.value, 
            director: e.target.director.value,
            release_date: e.target.releaseDate.value, 
            overview: e.target.overview.value,
            image_url: e.target.imageUrl.value
        }
        api.createMovie(newMovie).then(movie => {
            new Movie(movie).renderCard()
        })
        modal.close()
        e.target.reset()
    }
     renderShow = () => {
        const { id, title, overview, director, releaseDate, imageUrl, username, reviews } = this.data
        document.getElementById("main").innerHTML = `

        <div class="show">
            <h1>${title}</h1>
            <IMG SRC="${imageUrl}" alt=${title}/> 
            <p>Director: ${director}</p> 
            <p>Release Date:${releaseDate}</p> 
            <p>${overview}</p>
            <p>Added by: ${username}</p>
            <div class="container"></div>
            </div>
            <button id="Back">Back</button> 
            `
            document.getElementById("Back").addEventListener("click", Movie.renderIndex)
            // document.getElementById("Review").addEventListener("click", Review.reviewHtml)
            // this.reviews.forEach((review) => review.render())
        // Review.showForm()
        // const back = document.getElementById("back")
        // back.addEventListener("click", (e) => {
        //     e.preventDefault()
        //     Movie.renderIndex()
          
    }

    static openMovieForm = () => {
        modal.main.innerHTML = `
        <h1>Did we miss any Halloween Classic's?</h1> 
        <h2>Add it to our collection!</h2>
        <form> 
          <label for="title">Title:</label><br>
          <input type="text" name="title"><br>
          <label for="director">Director:</label><br>
          <input type="text" name="director"><br>
          <label for="releaseDate">Release Date:</label><br>
          <input type="text" name="releaseDate"><br> 
          <label for="overview">Overview:</label><br>
          <input type="text" name="overview"><br> 
          <label for="imageUrl">Image:</label><br>
          <input type="text" name="imageUrl"><br>
          <input type="submit" value="Add your Movie"><br>
          </form>
        `
        modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
        modal.open()
    }

    static find = (id) => this.all.find(movie => movie.data.id == id)

    
    static getMovies = () => {
        api.getMovies().then(movies => {
            Movie.all = []
            movies.forEach(movie => new Movie(movie))
            this.renderIndex()
        })
    }
    
    static renderIndex = () => {
        const movieContainer = document.createElement("div")
        movieContainer.id = "movie-container"
        const main = document.getElementById("main")
        main.innerHTML = ""
        const addFavorite = document.createElement("link") 
        addFavorite.innerText = "See your Faves!"
        addFavorite.addEventListener("click", this.addFavorite)
        const addMovie = document.createElement("button")
        addMovie.innerText = "Did we miss one? Add another Halloween Movie!"
        addMovie.addEventListener("click", this.openMovieForm)
        main.append(movieContainer, addMovie, addFavorite)
        this.all.forEach(movie => movie.renderCard()) 
        Favorite.addFavorite()
        movieContainer.addEventListener("click", this.handleIndexClick)
        
    }
    
    static handleIndexClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
            const id = e.target.closest(".movie-card").dataset.id
            this.find(id).renderShow()
          
        } 
    }
}