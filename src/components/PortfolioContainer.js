import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleSellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <div key={stock.id} onClick={() => handleSellStock(stock)}>
          <Stock stock={stock} />
        </div>
      ))}
    </div>
  );
}

export default PortfolioContainer;
