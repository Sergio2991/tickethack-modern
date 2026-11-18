"use client";

import { removeFromCart } from "../services/cartApi";

export default function CartItem({ booking, onRefresh }) {
  const handleDelete = async () => {
    await removeFromCart(booking.trip._id);

    onRefresh();
  };

  return (
    <div
      className="
        mb-3
        flex
        items-center
        justify-between
        rounded-md
        bg-gray-50
        px-5
        py-4
      "
    >
      <span className="font-medium text-gray-700">
        {booking.trip.departure} → {booking.trip.arrival}
      </span>

      <span className="text-gray-600">
        {new Date(booking.trip.date).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>

      <span className="font-semibold text-gray-700">{booking.trip.price}€</span>

      <button
        onClick={handleDelete}
        className="
          rounded-md
          bg-red-500
          px-4
          py-2
          font-medium
          text-white
          transition-all
          duration-150
          hover:bg-red-600
          active:scale-95
        "
      >
        ✕
      </button>
    </div>
  );
}
