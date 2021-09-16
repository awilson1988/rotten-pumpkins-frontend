const api = new ApiService("http://localhost:3000")
const modal = new Modal()
let user

//Movie.getMovies()

document.querySelector("form").addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e){
    e.preventDefault()
    api.findOrCreateUser(e.target.username.value).then(userData => {
        user = userData 
        Movie.getMovies()
    })
}