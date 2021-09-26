class Favorite {
  static all = []
  constructor(data) {
      this.data = data
      this.constructor.all.push(this)
    }

    static putFavoritesOnDom(favArray){
      favCollection.innerHTML = `<h2 class="subheader">My Favorites</h2>
                                 <h4 class="back-link">←Back to Games</h4>`
      favArray.forEach(favorite => {
          favCollection.innerHTML += `<div class="card">
            <h2>${favorite.movie.title}</h2>
            <p>${favorite.movie.overview}<p>
          </div>`
      })
  } 


    static addFavorite = () => {
      const favorites = document.querySelectorAll(".favorites")
      for (const favorite of favorites) {
        favorite.addEventListener("click", (e) => {
          console.log(e.target.dataset.id-1)
          if (e.target.innerText == "♡") {
            e.target.innerText = "💗"
            const newFavorite = {
              movie_id: e.target.dataset.id,
              user_id: user.id,
              count: 1
  
            }
            new Favorite(favorite)
            api.createFavorite(newFavorite).then(console.log)
          } else {
            e.target.innerText = "♡";
          }
        });
      }
    }
  }