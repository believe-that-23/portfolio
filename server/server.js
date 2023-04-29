if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const cors = require('cors');
const express = require('express');
const app = express();
const dbConfig = require('./config/dbConfig')

const portfolioRoute = require('./routes/portfolioRoutes');

app.use(cors());

app.use(express.json());

app.use('/api/portfolio', portfolioRoute);



const port = process.env.PORT || 5000;
const path = require('path');

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})
