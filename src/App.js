import React, { useState } from "react";
import Chart from "./Chart"; // Import the Chart component
import './App.css';

  const stockData = {
    EURUSD: [
      { time: '2023-08-01', open: 1.175, high: 1.185, low: 1.170, close: 1.180 },
      { time: '2023-08-02', open: 1.178, high: 1.188, low: 1.173, close: 1.182 },
      { time: '2023-08-03', open: 1.180, high: 1.190, low: 1.175, close: 1.185 },
      { time: '2023-08-04', open: 1.182, high: 1.192, low: 1.177, close: 1.188 },
      { time: '2023-08-07', open: 1.185, high: 1.195, low: 1.180, close: 1.190 },
      { time: '2023-08-08', open: 1.188, high: 1.198, low: 1.183, close: 1.192 },
      { time: '2023-08-09', open: 1.190, high: 1.200, low: 1.185, close: 1.195 },
      { time: '2023-08-10', open: 1.192, high: 1.202, low: 1.187, close: 1.198 },
      { time: '2023-08-11', open: 1.195, high: 1.205, low: 1.190, close: 1.200 },
      { time: '2023-08-14', open: 1.198, high: 1.208, low: 1.193, close: 1.205 },
      { time: '2023-08-15', open: 1.200, high: 1.210, low: 1.195, close: 1.208 },
      { time: '2023-08-16', open: 1.205, high: 1.215, low: 1.200, close: 1.210 },
    ],
    BTCUSD: [
      { time: '2023-08-01', open: 30500, high: 31000, low: 30000, close: 30800 },
      { time: '2023-08-02', open: 30800, high: 31500, low: 30500, close: 31200 },
      { time: '2023-08-03', open: 31200, high: 32000, low: 31000, close: 31800 },
      { time: '2023-08-04', open: 31800, high: 32500, low: 31500, close: 32200 },
      { time: '2023-08-07', open: 32200, high: 33000, low: 32000, close: 32800 },
      { time: '2023-08-08', open: 32800, high: 33500, low: 32500, close: 33200 },
      { time: '2023-08-09', open: 33200, high: 34000, low: 33000, close: 33800 },
      { time: '2023-08-10', open: 33800, high: 34500, low: 33500, close: 34200 },
      { time: '2023-08-11', open: 34200, high: 35000, low: 34000, close: 34800 },
      { time: '2023-08-14', open: 34800, high: 35500, low: 34500, close: 35200 },
      { time: '2023-08-15', open: 35200, high: 36000, low: 35000, close: 35800 },
      { time: '2023-08-16', open: 35800, high: 36500, low: 35500, close: 36200 },
    ],
    XAUUSD: [
      { time: '2023-08-01', open: 1800, high: 1820, low: 1780, close: 1805 },
      { time: '2023-08-02', open: 1805, high: 1830, low: 1795, close: 1820 },
      { time: '2023-08-03', open: 1820, high: 1850, low: 1810, close: 1840 },
      { time: '2023-08-04', open: 1840, high: 1860, low: 1830, close: 1850 },
      { time: '2023-08-07', open: 1850, high: 1880, low: 1840, close: 1870 },
      { time: '2023-08-08', open: 1870, high: 1900, low: 1860, close: 1885 },
      { time: '2023-08-09', open: 1885, high: 1910, low: 1870, close: 1900 },
      { time: '2023-08-10', open: 1900, high: 1920, low: 1885, close: 1915 },
      { time: '2023-08-11', open: 1915, high: 1940, low: 1900, close: 1930 },
      { time: '2023-08-14', open: 1930, high: 1960, low: 1920, close: 1950 },
      { time: '2023-08-15', open: 1950, high: 1980, low: 1940, close: 1970 },
      { time: '2023-08-16', open: 1970, high: 2000, low: 1955, close: 1990 },
    ],
  };

  function App() {
    const [selectedStock, setSelectedStock] = useState('EURUSD');
    const theme = 'light'; // or 'dark', based on your needs
  
    const handleStockChange = (stock) => {
      setSelectedStock(stock);
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1>VMTrader - Displaying Stock Market Data with Charts</h1>
        </header>
        <div className="buttons-container">
          {Object.keys(stockData).map(stock => (
            <button key={stock} onClick={() => handleStockChange(stock)}>
              {stock}
            </button>
          ))}
        </div>
        <div className="stock-info">
          <h3>{selectedStock} Chart</h3>
          <p>Displaying data for {selectedStock}</p>
        </div>
        <div className="chart-container">
          <Chart data={stockData[selectedStock]} theme={theme} />
        </div>
      </div>
    );
  }

export default App;
