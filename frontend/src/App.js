import React, { useState, useEffect } from "react";
import { getStocks, addStock, deleteStock } from "./services/api";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";

function App() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    const { data } = await getStocks();
    setPortfolio(data);
  };

  const handleAdd = async (stock) => {
    await addStock(stock);
    fetchStocks();
  };

  const handleDelete = async (ticker) => {
    await deleteStock(ticker);
    fetchStocks();
  };

  return (
    <div>
      <Dashboard portfolio={portfolio} />
      <StockForm onAdd={handleAdd} />
      <StockList stocks={portfolio} onDelete={handleDelete} />
    </div>
  );
}

export default App;
