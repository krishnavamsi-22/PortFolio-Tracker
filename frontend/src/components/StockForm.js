import React, { useState, useEffect } from "react";
import StockForm from "./StockForm";
import StockList from "./StockList";
import { addStock, getStocks } from "../services/api";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);

  // Fetch stocks from backend
  const fetchStocks = async () => {
    try {
      const data = await getStocks();
      setStocks(data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

  // Handle adding a new stock
  const handleAddStock = async (stockData) => {
    try {
      const newStock = await addStock(stockData);
      setStocks((prevStocks) => [...prevStocks, newStock]);
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div>
      <h1>Portfolio Tracker</h1>
      <StockForm onAdd={handleAddStock} />
      <StockList stocks={stocks} />
    </div>
  );
};

export default Dashboard;
