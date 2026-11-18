import TripCard from "./TripCard";

export default function SearchResults({ trips }) {
  return (
    <div>
      {trips.map((trip) => (
        <TripCard key={trip._id} trip={trip} />
      ))}
    </div>
  );
}
