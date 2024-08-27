import React, { useState } from "react";
import Chart from "./Chart"; // Import the Chart component
import "./App.css";

const stockData = {
  EURUSD: [
    { time: "2023-08-01", open: 1.175, high: 1.185, low: 1.17, close: 1.18 },
    { time: "2023-08-02", open: 1.178, high: 1.188, low: 1.173, close: 1.182 },
    { time: "2023-08-03", open: 1.18, high: 1.19, low: 1.175, close: 1.185 },
    { time: "2023-08-04", open: 1.182, high: 1.192, low: 1.177, close: 1.188 },
    { time: "2023-08-07", open: 1.185, high: 1.195, low: 1.18, close: 1.19 },
    { time: "2023-08-08", open: 1.188, high: 1.198, low: 1.183, close: 1.192 },
    { time: "2023-08-09", open: 1.19, high: 1.2, low: 1.185, close: 1.195 },
    { time: "2023-08-10", open: 1.192, high: 1.202, low: 1.187, close: 1.198 },
    { time: "2023-08-11", open: 1.195, high: 1.205, low: 1.19, close: 1.2 },
    { time: "2023-08-14", open: 1.198, high: 1.208, low: 1.193, close: 1.205 },
    { time: "2023-08-15", open: 1.2, high: 1.21, low: 1.195, close: 1.208 },
    { time: "2023-08-16", open: 1.205, high: 1.215, low: 1.2, close: 1.21 },
    { time: "2023-08-17", open: 1.208, high: 1.218, low: 1.203, close: 1.212 },
    { time: "2023-08-18", open: 1.21, high: 1.22, low: 1.205, close: 1.215 },
    { time: "2023-08-21", open: 1.212, high: 1.222, low: 1.207, close: 1.218 },
    { time: "2023-08-22", open: 1.215, high: 1.225, low: 1.21, close: 1.22 },
    { time: "2023-08-23", open: 1.218, high: 1.228, low: 1.213, close: 1.223 },
    { time: "2023-08-24", open: 1.22, high: 1.23, low: 1.215, close: 1.225 },
    { time: "2023-08-25", open: 1.223, high: 1.233, low: 1.218, close: 1.228 },
    { time: "2023-08-28", open: 1.225, high: 1.235, low: 1.22, close: 1.23 },
    { time: "2023-08-29", open: 1.228, high: 1.238, low: 1.223, close: 1.232 },
    { time: "2023-08-30", open: 1.23, high: 1.24, low: 1.225, close: 1.235 },
    { time: "2023-08-31", open: 1.232, high: 1.242, low: 1.227, close: 1.237 },
    { time: "2023-09-01", open: 1.235, high: 1.245, low: 1.23, close: 1.24 },
    { time: "2023-09-04", open: 1.238, high: 1.248, low: 1.233, close: 1.243 },
    { time: "2023-09-05", open: 1.24, high: 1.25, low: 1.235, close: 1.245 },
    { time: "2023-09-06", open: 1.243, high: 1.253, low: 1.238, close: 1.248 },
    { time: "2023-09-07", open: 1.245, high: 1.255, low: 1.24, close: 1.25 },
    { time: "2023-09-08", open: 1.248, high: 1.258, low: 1.243, close: 1.253 },
    { time: "2023-09-11", open: 1.25, high: 1.26, low: 1.245, close: 1.255 },
    { time: "2023-09-12", open: 1.253, high: 1.263, low: 1.248, close: 1.258 },
    { time: "2023-09-13", open: 1.255, high: 1.265, low: 1.25, close: 1.26 },
    { time: "2023-09-14", open: 1.258, high: 1.268, low: 1.253, close: 1.263 },
    { time: "2023-09-15", open: 1.26, high: 1.27, low: 1.255, close: 1.265 },
    { time: "2023-09-18", open: 1.263, high: 1.273, low: 1.258, close: 1.268 },
    { time: "2023-09-19", open: 1.265, high: 1.275, low: 1.26, close: 1.27 },
    { time: "2023-09-20", open: 1.268, high: 1.278, low: 1.263, close: 1.273 },
    { time: "2023-09-21", open: 1.27, high: 1.28, low: 1.265, close: 1.275 },
    { time: "2023-09-22", open: 1.273, high: 1.283, low: 1.268, close: 1.278 },
    { time: "2023-09-25", open: 1.275, high: 1.285, low: 1.27, close: 1.28 },
    { time: "2023-09-26", open: 1.278, high: 1.288, low: 1.273, close: 1.283 },
    { time: "2023-09-27", open: 1.28, high: 1.29, low: 1.275, close: 1.285 },
    { time: "2023-09-28", open: 1.283, high: 1.293, low: 1.278, close: 1.288 },
    { time: "2023-09-29", open: 1.285, high: 1.295, low: 1.28, close: 1.29 },
    { time: "2023-10-02", open: 1.288, high: 1.298, low: 1.283, close: 1.293 },
    { time: "2023-10-03", open: 1.29, high: 1.3, low: 1.285, close: 1.295 },
    { time: "2023-10-04", open: 1.293, high: 1.303, low: 1.288, close: 1.298 },
    { time: "2023-10-05", open: 1.295, high: 1.305, low: 1.29, close: 1.3 },
    { time: "2023-10-06", open: 1.298, high: 1.308, low: 1.293, close: 1.303 },
    { time: "2023-10-09", open: 1.3, high: 1.31, low: 1.295, close: 1.305 },
    { time: "2023-10-10", open: 1.303, high: 1.313, low: 1.298, close: 1.308 },
    { time: "2023-10-11", open: 1.305, high: 1.315, low: 1.3, close: 1.31 },
    { time: "2023-10-12", open: 1.308, high: 1.318, low: 1.303, close: 1.313 },
    { time: "2023-10-13", open: 1.31, high: 1.32, low: 1.305, close: 1.315 },
    { time: "2023-10-16", open: 1.313, high: 1.323, low: 1.308, close: 1.318 },
    { time: "2023-10-17", open: 1.315, high: 1.325, low: 1.31, close: 1.32 },
    { time: "2023-10-18", open: 1.318, high: 1.328, low: 1.313, close: 1.323 },
    { time: "2023-10-19", open: 1.32, high: 1.33, low: 1.315, close: 1.325 },
    { time: "2023-10-20", open: 1.323, high: 1.333, low: 1.318, close: 1.328 },
    { time: "2023-10-23", open: 1.325, high: 1.335, low: 1.32, close: 1.33 },
    { time: "2023-10-24", open: 1.328, high: 1.338, low: 1.323, close: 1.333 },
    { time: "2023-10-25", open: 1.33, high: 1.34, low: 1.325, close: 1.335 },
    { time: "2023-10-26", open: 1.333, high: 1.343, low: 1.328, close: 1.338 },
    { time: "2023-10-27", open: 1.335, high: 1.345, low: 1.33, close: 1.34 },
  ],
  BTCUSD: [
    { time: "2023-08-01", open: 30500, high: 31000, low: 30000, close: 30800 },
    { time: "2023-08-02", open: 30800, high: 31500, low: 30500, close: 31200 },
    { time: "2023-08-03", open: 31200, high: 32000, low: 31000, close: 31800 },
    { time: "2023-08-04", open: 31800, high: 32500, low: 31500, close: 32200 },
    { time: "2023-08-07", open: 32200, high: 33000, low: 32000, close: 32800 },
    { time: "2023-08-08", open: 32800, high: 33500, low: 32500, close: 33200 },
    { time: "2023-08-09", open: 33200, high: 34000, low: 33000, close: 33800 },
    { time: "2023-08-10", open: 33800, high: 34500, low: 33500, close: 34200 },
    { time: "2023-08-11", open: 34200, high: 35000, low: 34000, close: 34800 },
    { time: "2023-08-14", open: 34800, high: 35500, low: 34500, close: 35200 },
    { time: "2023-08-15", open: 35200, high: 36000, low: 35000, close: 35800 },
    { time: "2023-08-16", open: 35800, high: 36500, low: 35500, close: 36200 },
  ],
  XAUUSD: [
    { time: "2023-08-01", open: 1800, high: 1820, low: 1780, close: 1805 },
    { time: "2023-08-02", open: 1805, high: 1830, low: 1795, close: 1820 },
    { time: "2023-08-03", open: 1820, high: 1850, low: 1810, close: 1840 },
    { time: "2023-08-04", open: 1840, high: 1860, low: 1830, close: 1850 },
    { time: "2023-08-07", open: 1850, high: 1880, low: 1840, close: 1870 },
    { time: "2023-08-08", open: 1870, high: 1900, low: 1860, close: 1885 },
    { time: "2023-08-09", open: 1885, high: 1910, low: 1870, close: 1900 },
    { time: "2023-08-10", open: 1900, high: 1920, low: 1885, close: 1915 },
    { time: "2023-08-11", open: 1915, high: 1940, low: 1900, close: 1930 },
    { time: "2023-08-14", open: 1930, high: 1960, low: 1920, close: 1950 },
    { time: "2023-08-15", open: 1950, high: 1980, low: 1940, close: 1970 },
    { time: "2023-08-16", open: 1970, high: 2000, low: 1955, close: 1990 },
  ],
};

function App() {
  const [selectedStock, setSelectedStock] = useState("EURUSD");
  const theme = "light"; // or 'dark', based on your needs

  const handleStockChange = (stock) => {
    setSelectedStock(stock);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>VMTrader - Displaying Stock Market Data with Charts</h1>
      </header>
      <div className="buttons-container">
        {Object.keys(stockData).map((stock) => (
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
