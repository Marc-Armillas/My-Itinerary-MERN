const mongoose = require("mongoose");

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
  }
});
module.exports = mongoose.model("itinerary", itinerarySchema);