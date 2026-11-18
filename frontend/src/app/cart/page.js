"use client";

import { useEffect, useState } from "react";

import Header from "../../components/Header";
import CartItem from "../../components/CartItem";

import { getCart } from "../../services/cartApi";
import { purchaseTrips } from "../../services/bookingApi";

export default function CartPage() {
  const [bookings, setBookings] = useState([]);

  const loadCart = async () => {
    const data = await getCart();

    if (data.result) {
      setBookings(data.bookings);
    } else {
      setBookings([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const total = bookings.reduce((acc, booking) => acc + booking.trip.price, 0);

  const handlePurchase = async () => {
    const data = await purchaseTrips();

    if (data.result) {
      window.location.href = "/bookings";
    }
  };

  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl p-6 ">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl text-gray-700 font-bold">My Cart</h2>

          {bookings.length === 0 ? (
            <div className="text-center">
              <p>No tickets in your cart.</p>
              <p>Why not plan a trip?</p>
            </div>
          ) : (
            <>
              {bookings.map((booking) => (
                <CartItem
                  key={booking._id}
                  booking={booking}
                  onRefresh={loadCart}
                />
              ))}

              <div className="mt-6 flex items-center justify-between rounded bg-green-600 p-4 text-white">
                <span className="font-semibold">Total: {total}€</span>

                <button
                  onClick={handlePurchase}
                  className="
                    rounded-md
                    bg-green-500
                    px-4
                    py-2
                    transition-all
                    hover:bg-green-700
                    active:scale-95
                  "
                >
                  Purchase
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
