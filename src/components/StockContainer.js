import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleBuyStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <div key={stock.id} onClick={() => handleBuyStock(stock)}>
          <Stock stock={stock} />
        </div>
      ))}
    </div>
  );
}

export default StockContainer;
