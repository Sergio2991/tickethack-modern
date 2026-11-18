const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("URI exists:", !!process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
