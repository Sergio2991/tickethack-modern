const Booking = require("../models/Booking");

const purchaseCart = async () => {
  return await Booking.updateMany({ isPaid: false }, { isPaid: true });
};

const getBookings = async () => {
  return await Booking.find({
    isPaid: true,
  }).populate("trip");
};

module.exports = {
  purchaseCart,
  getBookings,
};
