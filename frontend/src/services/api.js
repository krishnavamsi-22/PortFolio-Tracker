import axios from "axios";

const BASE_URL = "http://localhost:5000/api/stocks";

// Function to add a stock
export const addStock = async (stockData) => {
  try {
    const response = await axios.post(BASE_URL, stockData);
    return response.data;
  } catch (error) {
    console.error("Error adding stock:", error);
    throw error;
  }
};

// Function to get all stocks
export const getStocks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    throw error;
  }
};

// Function to delete a stock
export const deleteStock = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting stock:", error);
    throw error;
  }
};

// Function to update a stock
export const updateStock = async (id, stockData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, stockData);
    return response.data;
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
};
