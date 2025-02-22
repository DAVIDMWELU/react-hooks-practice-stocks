import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState(""); // Sorting state
  const [filterType, setFilterType] = useState(""); // Filtering state

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  function handleBuyStock(stock) {
    if (!portfolio.some((s) => s.id === stock.id)) {
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

  // Apply sorting
  let displayedStocks = [...stocks];
  if (sortType === "Alphabetically") {
    displayedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
  } else if (sortType === "Price") {
    displayedStocks.sort((a, b) => a.price - b.price);
  }

  // Apply filtering
  if (filterType) {
    displayedStocks = displayedStocks.filter((stock) => stock.type === filterType);
  }

  return (
    <div>
      <SearchBar handleSortChange={handleSortChange} handleFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayedStocks} handleBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
