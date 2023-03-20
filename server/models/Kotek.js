const mongoose = require("mongoose");

const kotekSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  registration_date: {
    type: String,
    required: false,
  },
  species: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  imgUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Kotek", kotekSchema);
