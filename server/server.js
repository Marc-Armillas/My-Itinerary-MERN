//variables
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");

//coors
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());


//port listener
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

//routes
app.use('/cities', require('./routes/cities'))
app.use('/itineraries', require('./routes/itineraries'))

//mongoose connect with db
mongoose.connect(db)
  .then(() => console.log('Connection to Mongodb established'))
  .catch(err => console.log(err));