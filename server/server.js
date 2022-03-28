const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());


const reviews = [
        {
            "id": 1,
            "firstName": "Roger",
            "lastInitial": "G.",
            "review": "The park is beautiful. So many areas to explore. We especially loved The Narrows and other slot canyon."
        },
        {
            "id": 2,
            "firstName": "Adam",
            "lastInitial": "S.",
            "review": "There were a lot of people. The views were amazing, but it was somewhat hard to enjoy them with all the other people."
        },
        {
            "id": 3,
            "firstName": "Michael",
            "lastInitial": "J.",
            "review": "The hiking, biking and climbing were phenomenal. Some of the greatest adventures I've had. Be careful of wild animals, we saw a rattlesnake!"
        }
]

// --FUNCTIONS-- //
let globalID = 4

    
const getReviews = (req, res) => {
        res.status(200).send(reviews)
}
    
// const createReview = (req, res) => {
//         let newReview = req.body;
//         newReview.id = globalID;
//         reviews.push(newReview);

//         res.status(200).send(reviews)
//         globalID++
// }


app.get('/reviews', getReviews);
// app.post('/reviews', createReview)


const SERVER_PORT = process.env.PORT || 4040

app.listen(SERVER_PORT, () => {
    console.log(`Disco on the ${SERVER_PORT}`)
})

