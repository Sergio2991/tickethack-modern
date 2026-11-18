"use client";

import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!departure || !arrival || !date) {
      return;
    }

    onSearch({
      departure,
      arrival,
      date,
    });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <input
        type="text"
        placeholder="Departure"
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
        className="
    mb-1
    w-full
    rounded-t-md
    border-0
    bg-gray-100
    px-4
    py-4
    text-lg
    text-gray-800
    placeholder:text-gray-500
    focus:outline-none
  "
      />

      <div className="mx-4 border-b border-gray-300" />

      <input
        type="text"
        placeholder="Arrival"
        value={arrival}
        onChange={(e) => setArrival(e.target.value)}
        className="
    mb-4
    w-full
    rounded-b-md
    border-0
    bg-gray-100
    px-4
    py-4
    text-lg
    text-gray-800
    placeholder:text-gray-500
    focus:outline-none
  "
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="
    mb-6
    w-full
    rounded-md
    border-0
    bg-gray-100
    px-4
    py-4
    text-lg
    text-gray-700
    focus:outline-none
  "
      />

      <button
        onClick={handleSubmit}
        className="
    w-full
    rounded-md
    bg-green-500
    py-4
    text-lg
    font-medium
    text-white
    transition-all
    duration-150
    hover:bg-green-600
    active:scale-[0.98]
  "
      >
        Search
      </button>
    </div>
  );
}
