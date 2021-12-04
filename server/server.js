//variables
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys').mongoURI;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());



app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

//routes
app.use('/cities', require('./routes/cities'))

//mongoose connect with db
const mongoose = require("mongoose");

mongoose.connect(db)
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));