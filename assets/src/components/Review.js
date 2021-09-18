class Review {
    
    constructor(data){
        this.data = data
    }

    render = () => {
       const { text } = this.data
       document.querySelector(".container").innerHTML += `
       <div class="card"> 
          <h1>Reviews for</h1>
          <p>${text}</p>
          </div>
        `
    }
}