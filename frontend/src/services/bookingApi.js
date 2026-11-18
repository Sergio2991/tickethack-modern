const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getBookings = async () => {
  const response = await fetch(`${API_URL}/bookings`);

  return await response.json();
};

export const purchaseTrips = async () => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: "PUT",
  });

  return await response.json();
};
