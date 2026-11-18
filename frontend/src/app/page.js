"use client";

import { useState } from "react";

import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import EmptyState from "../components/EmptyState";
import SearchResults from "../components/SearchResults";

import { searchTrips } from "../services/tripApi";

export default function Home() {
  const [trips, setTrips] = useState([]);

  const handleSearch = async ({ departure, arrival, date }) => {
    const data = await searchTrips(departure, arrival, date);

    if (data.result) {
      setTrips(data.trips);
    } else {
      setTrips([]);
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center text-white">
          <h2 className="mb-3 text-4xl md:text-5xl font-bold">
            Explore the world effortlessly by train!
          </h2>

          <p className="text-lg md:text-xl">
            Compare, book and enjoy cheap prices for train tickets.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <SearchForm onSearch={handleSearch} />

          <div
            className="
              min-h-112.5
              rounded-xl
              bg-white
              p-6
              shadow-lg
            "
          >
            <div className="flex h-full flex-col justify-start">
              {trips.length > 0 ? (
                <SearchResults trips={trips} />
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
