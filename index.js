const express = require('express');
const dotenv=require('dotenv');
const router = require('./src/routes/router');
const connectDb = require('./config/db');
const app = express();

dotenv.config();

connectDb()

app.use(express.json());
app.use("/", router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})