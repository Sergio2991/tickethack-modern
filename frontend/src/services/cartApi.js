const API_URL = process.env.NEXT_API_URL;

export const getCart = async () => {
  const response = await fetch(`${API_URL}/cart`);

  return await response.json();
};

export const addToCart = async (tripId) => {
  const response = await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tripId,
    }),
  });

  return await response.json();
};

export const removeFromCart = async (tripId) => {
  const response = await fetch(`${API_URL}/cart/${tripId}`, {
    method: "DELETE",
  });

  return await response.json();
};
