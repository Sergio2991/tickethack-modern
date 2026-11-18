const express = require("express");
const cors = require("cors");

const tripRoutes = require("./routes/tripRoutes");
const cartRoutes = require("./routes/cartRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.use(express.json());

app.use("/", tripRoutes);
app.use("/cart", cartRoutes);
app.use("/bookings", bookingRoutes);

module.exports = app;
