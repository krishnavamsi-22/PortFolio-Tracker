import React from "react";

const StockList = ({ stocks, onDelete, onEdit }) => (
  <div>
    <h3>Stock Holdings</h3>
    <ul>
      {stocks.map((stock) => (
        <li key={stock.ticker}>
          {stock.name} ({stock.ticker}): ${stock.buyPrice} x {stock.quantity}
          <button onClick={() => onEdit(stock)}>Edit</button>
          <button onClick={() => onDelete(stock.ticker)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default StockList;
