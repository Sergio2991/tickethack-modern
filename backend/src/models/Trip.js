const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
  addedToCart: Boolean,
});

const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;
