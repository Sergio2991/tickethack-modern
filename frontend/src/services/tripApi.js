const API_URL = "https://tickethack-modern.vercel.app";

export const searchTrips = async (departure, arrival, date) => {
  const response = await fetch(
    `${API_URL}/search/${departure}/${arrival}/${date}`,
  );

  return await response.json();
};
