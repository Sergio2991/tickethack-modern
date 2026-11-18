const Booking = require("../models/Booking");
const Trip = require("../models/Trip");

const addToCart = async (tripId) => {
  const trip = await Trip.findById(tripId);

  if (!trip) {
    return null;
  }

  const booking = new Booking({
    trip: trip._id,
    isPaid: false,
  });

  return await booking.save();
};

const getCart = async () => {
  return await Booking.find({
    isPaid: false,
  }).populate("trip");
};

const removeFromCart = async (tripId) => {
  return await Booking.deleteOne({
    trip: tripId,
  });
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};
