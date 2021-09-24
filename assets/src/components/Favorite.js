class Favorite {
    constructor(data) {
      this.data = data
    }

  
    
    static putFavoritesOnDom = (favArray) => {
      favCollection.innerHTML = `<h2 class="subheader">My Favorites</h2>
                                 <h4 class="back-link">←Back to Movies</h4>`
      favArray.forEach(favorite => {
          favCollection.innerHTML += `<div class="card">
            <h2>${favorite.movie.title}</h2>
            <p>${favorite.movie.overview}<p>
            <button data-movie-id=${favorite.movie.id} class="like-btn" style="color:red;">♡</button>
          </div>`
      })
  } 

  
  
    static addFavorite = () => {
      const favorites = document.querySelectorAll(".favorites")
      for (const favorite of favorites) {
        favorite.addEventListener("click", (e) => {
          console.log(e.target.dataset.id)
          if (e.target.innerText == "♡") {
            e.target.innerText = "💗"
          } else {
            e.target.innerText = "♡"
          }
        });
      }
    }
  }