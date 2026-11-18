const moment = require("moment");

const { searchTrips } = require("../services/tripService");

const searchTripsController = async (req, res) => {
  try {
    const { departure, arrival, date } = req.params;

    const startDate = moment(date).startOf("day");

    const endDate = moment(date).endOf("day");

    const trips = await searchTrips(departure, arrival, startDate, endDate);

    if (trips.length > 0) {
      return res.json({
        result: true,
        trips,
      });
    }

    res.status(404).json({
      result: false,
      error: "No trip found",
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};

module.exports = {
  searchTripsController,
};
