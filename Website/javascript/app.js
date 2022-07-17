const express = require('express');
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use(morgan('tiny'));


//Database connection
mongoose.connect('mongodb+srv://gfe:gfe@cluster0.drprf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Database connected")
    }).catch((err) => {
    console.log("Database connection failure")
});

//start
app.listen(3000, () => {
    console.log("server runnning on http:://localhost:3000")
})