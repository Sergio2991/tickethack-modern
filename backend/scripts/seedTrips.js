require("dotenv").config();

const mongoose = require("mongoose");

const Trip = require("../src/models/Trip");

const trips = [
  {
    departure: "Paris",
    arrival: "Lyon",
    date: new Date("2026-10-01T08:15:00"),
    price: 89,
  },
  {
    departure: "Paris",
    arrival: "Marseille",
    date: new Date("2026-10-01T10:00:00"),
    price: 126,
  },
  {
    departure: "Lille",
    arrival: "Paris",
    date: new Date("2026-10-01T12:45:00"),
    price: 62,
  },
  {
    departure: "Lyon",
    arrival: "Nice",
    date: new Date("2026-10-01T14:20:00"),
    price: 97,
  },
  {
    departure: "Nantes",
    arrival: "Paris",
    date: new Date("2026-10-01T09:30:00"),
    price: 54,
  },
  {
    departure: "Bordeaux",
    arrival: "Toulouse",
    date: new Date("2026-10-01T11:15:00"),
    price: 42,
  },
  {
    departure: "Strasbourg",
    arrival: "Paris",
    date: new Date("2026-10-01T07:50:00"),
    price: 79,
  },
  {
    departure: "Marseille",
    arrival: "Lyon",
    date: new Date("2026-10-01T22:10:00"),
    price: 127,
  },
  {
    departure: "Nice",
    arrival: "Marseille",
    date: new Date("2026-10-01T16:45:00"),
    price: 65,
  },
  {
    departure: "Paris",
    arrival: "Bordeaux",
    date: new Date("2026-10-01T18:00:00"),
    price: 92,
  },
];

const seedTrips = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Trip.deleteMany();

    await Trip.insertMany(trips);

    console.log("✅ Trips inserted");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedTrips();
