const express = require("express");

const router = express.Router();

const {
  purchaseTrips,
  getPurchasedTrips,
} = require("../controllers/bookingController");

router.put("/", purchaseTrips);

router.get("/", getPurchasedTrips);

module.exports = router;
