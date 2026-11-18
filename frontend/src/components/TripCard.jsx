"use client";

import { useRouter } from "next/navigation";
import { addToCart } from "../services/cartApi";

export default function TripCard({ trip }) {
  const router = useRouter();

  const handleBook = async () => {
    const data = await addToCart(trip._id);

    if (data.result) {
      router.push("/cart");
    }
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
        {trip.departure} → {trip.arrival}
      </span>

      <span className="text-gray-600">
        {new Date(trip.date).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>

      <span className="font-semibold text-gray-700">{trip.price}€</span>

      <button
        onClick={handleBook}
        className="
          rounded-md
          bg-green-500
          px-5
          py-2
          font-medium
          text-white
          transition-all
          duration-150
          hover:bg-green-600
          active:scale-95
        "
      >
        Book
      </button>
    </div>
  );
}
