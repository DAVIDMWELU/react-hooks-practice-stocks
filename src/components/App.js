import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState(null);
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  function handleBuyStock(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSellStock(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  function handleSortChange(event) {
    setSortType(event.target.value);
  }

  function handleFilterChange(event) {
    setFilterType(event.target.value);
  }

  let displayedStocks = [...stocks];

  if (filterType !== "All") {
    displayedStocks = displayedStocks.filter(
      (stock) => stock.type === filterType
    );
  }

  if (sortType === "Alphabetically") {
    displayedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
  } else if (sortType === "Price") {
    displayedStocks.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <Header />
      <MainContainer
        stocks={displayedStocks}
        portfolio={portfolio}
        onBuyStock={handleBuyStock}
        onSellStock={handleSellStock}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
