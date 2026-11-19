const API_URL = "https://tickethack-modern.vercel.app";

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
