"use client";

import { useEffect, useState } from "react";

import Header from "../../components/Header";
import BookingItem from "../../components/BookingItem";

import { getBookings } from "../../services/bookingApi";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      const data = await getBookings();

      if (data.result) {
        setBookings(data.bookings);
      }
    };

    loadBookings();
  }, []);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl p-6">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl text-gray-700 font-bold">My Bookings</h2>

          {bookings.length === 0 ? (
            <p className="text-center text-gray-500">No bookings found.</p>
          ) : (
            <>
              {bookings.map((booking) => (
                <BookingItem key={booking._id} booking={booking} />
              ))}

              <div className="mt-8 text-center text-green-600 font-medium">
                Enjoy your travels with Tickethack!
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
