
const firstNameInput = document.getElementById("first-name")
const lastInitialInput = document.getElementById("last-initial")
const textInput = document.getElementById("text-input")
const submitBtn = document.getElementById("submit-button")
const reviewCont = document.querySelector(".review-container")

// const baseURL = 'https://big-5-capstone.herokuapp.com'


const createReviewCard = (review) => {
    let reviewCard = document.createElement('div')
    reviewCard.setAttribute("id", "board")
    reviewCard.innerHTML = `<p>"${review.review}"</p> <h4>${review.firstName} ${review.lastInitial}</h4>`

    reviewCont.appendChild(reviewCard)
}

const clearReviews = () => {
    reviewCont.innerHTML = ``
}

const getReviews = () => {
    clearReviews()

    axios.get(`/reviews`)
    .then(function(res) {
        for(i = 0; i < res.data.length; i++) {
            createReviewCard(res.data[i])
        }
    })
    .catch(err => console.log(err))
}


// --ADD REVIEW FUNCTION-- //

const createReview = (event) => {
    event.preventDefault()
    clearReviews()
    let body = {
        firstName: firstNameInput.value,
        lastInitial: lastInitialInput.value,
        review: textInput.value
    }
    
    axios.post(`/reviews`, body)
        .then(function(res) {
            for(i = 0; i < res.data.length; i++) {
                createReviewCard(res.data[i])
            };
        });
        firstNameInput.value = ''
        lastInitialInput.value = ''
        textInput.value = ''
    }
    
submitBtn.addEventListener('click', createReview)
submitBtn.addEventListener('submit', createReview)
    
getReviews()