//variables
const mongoose = require("mongoose");

//itinerary schema
const itinerarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  profile: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  },
  duration: {
    type: String,
  },
  price: {
    type: Number,
  },
  hashtag: {
    type: [String],
  },
  name_city: {
    type: String,
    ref:'cities',
    required: true
  }
});
//name of module is the singular version (itinerary) of the database name (itineraries)
module.exports = mongoose.model("itinerary", itinerarySchema);