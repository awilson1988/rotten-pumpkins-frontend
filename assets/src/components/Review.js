class Review {
    // static all = []
    constructor(data){
        this.data = data
        // this.constructor.all.push(this)
    }

    // static showForm() {
    //     const reviewButton = document.querySelector("#review")
    //     reviewButton.addEventListener("click", (e) => {
    //         e.preventDefault()
    //         this.reviewHtml()
    //     })
    // }

    render = () => {
       const { text } = this.data
       document.querySelector(".container").innerHTML += `
       <div class="card"> 
          <h1>Reviews for</h1>
          <p>${text}</p>
          </div>
        `
    }

//     static reviewHtml = () => {
//         const reviewDiv = document.createElement("div")
//         reviewDiv.innerHTML = `
//         <form id="review-form"> 
//             <label for="review">Review:</label><br>
//             <input type="text" id="review" name="review"><br>
//             <input type="submit" id="submit-review" value="Submit Review">
//         </form>`
//     const showPage = document.querySelector(".show");
//     showPage.append(reviewDiv);
//     this.submitForm();
//   };

//   static submitForm() {
//       const id = document.querySelector("#show").dataset.id
//       const submitButton = document.querySelector("#submit-review")
//       const reviewForm = document.querySelector("form")
//       submitButton.addEventListener("click", (e) => {
//           e.preventDefault() 
//           const newReview = {
//               text: reviewForm.review.value, 
//               movie_id: id,
//               user_id: user.id,
//           }
//           api 
//           .createReview(newReview)
//           .then((review) => this.handleReview(review))
//       })
//   }

//   static handleReview = (review) => {
//       new Review(review)
//       document.querySelector(".container").innerHTML += `
//       <div class="card"> 
//         <p>${review.text}</p> 
//         </div>`
//         document.querySelector("form").reset()
//   }
        
    
}