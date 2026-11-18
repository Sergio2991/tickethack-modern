const { purchaseCart, getBookings } = require("../services/bookingService");

const purchaseTrips = async (req, res) => {
  const { modifiedCount } = await purchaseCart();

  res.json({
    result: modifiedCount > 0,
  });
};

const getPurchasedTrips = async (req, res) => {
  const bookings = await getBookings();

  if (bookings.length === 0) {
    return res.status(404).json({
      result: false,
      error: "No bookings found",
    });
  }

  res.json({
    result: true,
    bookings,
  });
};

module.exports = {
  purchaseTrips,
  getPurchasedTrips,
};
