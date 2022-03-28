// const { default: axios } = require("axios")

const firstName = document.getElementById("first-name")
const lastInitial = document.getElementById("last-initial")
const textInput = document.getElementById("text-input")
const submitBtn = document.getElementById("submit-button")
const reviewCont = document.querySelector(".review-container")

const baseURL = 'http://localhost:4040'

const createReviewCard = (review) => {
    let reviewCard = document.createElement('div')
    reviewCard.innerHTML = `<h4>${review.firstName} ${review.lastInitial}</h4>
    <p>${review.review}</p>`

    reviewCont.appendChild(reviewCard)
}

const clearReviews = () => {
    reviewCont.innerHTML = ``
}

const getReviews = () => {
    clearReviews()

    axios.get(`${baseURL}/reviews`)
    .then(function(res) {
        for(i = 0; i < res.data.length; i++) {
            createReviewCard(res.data[i])
        }
    })
    .catch(err => console.log(err))
}

getReviews()