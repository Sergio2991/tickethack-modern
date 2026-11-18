const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../services/cartService");

const createCartItem = async (req, res) => {
  const { tripId } = req.body;

  if (!tripId) {
    return res.status(400).json({
      result: false,
      error: "Missing trip ID",
    });
  }

  const booking = await addToCart(tripId);

  if (!booking) {
    return res.status(404).json({
      result: false,
      error: "Trip not found",
    });
  }

  res.status(201).json({
    result: true,
  });
};

const getCartItems = async (req, res) => {
  const bookings = await getCart();

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

const deleteCartItem = async (req, res) => {
  const { tripId } = req.params;

  const deleted = await removeFromCart(tripId);

  const bookings = await getCart();

  res.json({
    result: deleted.deletedCount > 0,
    bookings,
  });
};

module.exports = {
  createCartItem,
  getCartItems,
  deleteCartItem,
};
