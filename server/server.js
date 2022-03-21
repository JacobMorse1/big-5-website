const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());




const SERVER_PORT = process.env.PORT || 4040

app.listen(SERVER_PORT, () => {
    console.log(`Disco on the ${SERVER_PORT}`)
})