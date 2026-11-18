const API_URL =
  "https://tickethack-modern-git-main-sergio2991s-projects.vercel.app";

export const searchTrips = async (departure, arrival, date) => {
  const response = await fetch(
    `${API_URL}/search/${departure}/${arrival}/${date}`,
  );

  return await response.json();
};
