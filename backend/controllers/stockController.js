const fs = require("fs");
const path = require("path");

// Path to the JSON file
const filePath = path.join(__dirname, "../data/stocks.json");

// Helper function to read data from the file
const readData = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent || "[]");
};

// Helper function to write data to the file
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Get all stocks
exports.getAllStocks = (req, res) => {
  const stockData = readData();
  res.json(stockData);
};

// Add a new stock
exports.addStock = (req, res) => {
  const { name, ticker, quantity, buyPrice } = req.body;

  if (!name || !ticker || !buyPrice) {
    return res.status(400).json({ error: "Invalid stock data" });
  }

  const stockData = readData();
  const newStock = {
    name,
    ticker,
    quantity: quantity || 1,
    buyPrice: parseFloat(buyPrice),
  };
  stockData.push(newStock);
  writeData(stockData);

  res.status(201).json(newStock);
};

// Update a stock
exports.updateStock = (req, res) => {
  const { ticker } = req.params;
  const { name, quantity, buyPrice } = req.body;

  const stockData = readData();
  const stockIndex = stockData.findIndex((stock) => stock.ticker === ticker);

  if (stockIndex === -1) {
    return res.status(404).json({ error: "Stock not found" });
  }

  stockData[stockIndex] = {
    ...stockData[stockIndex],
    name: name || stockData[stockIndex].name,
    quantity: quantity || stockData[stockIndex].quantity,
    buyPrice: buyPrice || stockData[stockIndex].buyPrice,
  };

  writeData(stockData);
  res.json(stockData[stockIndex]);
};

// Delete a stock
exports.deleteStock = (req, res) => {
  const { ticker } = req.params;

  const stockData = readData();
  const stockIndex = stockData.findIndex((stock) => stock.ticker === ticker);

  if (stockIndex === -1) {
    return res.status(404).json({ error: "Stock not found" });
  }

  stockData.splice(stockIndex, 1);
  writeData(stockData);

  res.status(204).send();
};
