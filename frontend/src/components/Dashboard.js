import React from "react";

const Dashboard = ({ portfolio }) => {
  const totalValue = portfolio.reduce(
    (acc, stock) => acc + stock.quantity * stock.buyPrice,
    0
  );

  return (
    <div>
      <h2>Total Portfolio Value: ${totalValue.toFixed(2)}</h2>
    </div>
  );
};

export default Dashboard;
