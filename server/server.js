const express = require('express');
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const http = require("http");

const port = process.env.port || 3000;

const server = http.createServer(app);

//middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('../public'));
app.use(express.urlencoded({
    extended: true
}));

const db = mongoose.connect('mongodb+srv://gfe:gfe@cluster0.drprf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log("Database connection failure")
    });

app.post("/sign_up", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const data = {
        'email': email,
        'password': password
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log('inserted')
    });
    return res.redirect('CreateLookBook.html')

})
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('index.html')
}).listen(port, () => {
    console.log("server runnning on http:://localhost:" + port)
});



