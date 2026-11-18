const Trip = require("../models/Trip");

const searchTrips = async (departure, arrival, startDate, endDate) => {
  return await Trip.find({
    departure: new RegExp(departure, "i"),
    arrival: new RegExp(arrival, "i"),
    date: {
      $gte: startDate,
      $lte: endDate,
    },
  });
};

module.exports = {
  searchTrips,
};
