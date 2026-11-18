const express = require("express");

const router = express.Router();

const { searchTripsController } = require("../controllers/tripController");

router.get("/search/:departure/:arrival/:date", searchTripsController);

module.exports = router;
