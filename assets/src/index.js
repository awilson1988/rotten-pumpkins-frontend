const api = new ApiService("http://localhost:3000")
const modal = new Modal()
const favCollection = document.querySelector('#fav-collection')
const likeButton = document.querySelector('.like-btn')
let user


//Movie.getMovies()

document.querySelector("form").addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e){
    e.preventDefault()
    api.findOrCreateUser(e.target.username.value).then(userData => {
        user = userData 
        Movie.getMovies()
    })
    
    let user 

    
    handleLogOut = () => {
        user = "" 
        User.all = [] 
        clear()
       
    }
}