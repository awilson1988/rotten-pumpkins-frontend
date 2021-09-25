class Favorite {
  constructor(data) {
      this.data = data
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