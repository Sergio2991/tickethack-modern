export default function BookingItem({ booking }) {
  const departureDate = new Date(booking.trip.date);

  const hoursRemaining = Math.max(
    0,
    Math.floor((departureDate - new Date()) / (1000 * 60 * 60)),
  );

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
        {departureDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>

      <span className="font-semibold text-gray-700">{booking.trip.price}€</span>

      <span className="text-sm text-green-600">
        Departure in {hoursRemaining}h
      </span>
    </div>
  );
}
