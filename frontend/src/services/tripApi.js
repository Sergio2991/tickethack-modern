const API_URL = process.env.API_URL;

export const searchTrips = async (departure, arrival, date) => {
  const response = await fetch(
    `${API_URL}/search/${departure}/${arrival}/${date}`,
  );

  return await response.json();
};
