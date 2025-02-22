import React from "react";

function Stock({ stock }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name} ({stock.ticker})</h5>
        <p className="card-text">${stock.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Stock;
