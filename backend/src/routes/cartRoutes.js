const express = require("express");

const router = express.Router();

const {
  createCartItem,
  getCartItems,
  deleteCartItem,
} = require("../controllers/cartController");

router.post("/", createCartItem);

router.get("/", getCartItems);

router.delete("/:tripId", deleteCartItem);

module.exports = router;
