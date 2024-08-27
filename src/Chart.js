import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = ({ data, theme }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Create chart instance
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: theme === 'dark' ? '#1B262C' : '#FFFFFF',
        textColor: theme === 'dark' ? '#FFFFFF' : '#000000',
      },
      grid: {
        horzLines: {
          color: theme === 'dark' ? '#333333' : '#E1E1E1',
        },
        vertLines: {
          color: theme === 'dark' ? '#333333' : '#E1E1E1',
        },
      },
      crossHair: {
        mode: 1, // Note: crossHair.mode is not a valid option in lightweight-charts; it's used here for reference.
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      timeScale: {
        borderVisible: true,
        timeVisible: true,
        barSpacing: 5,
      },
    });

    // Add candlestick series
    const candleSeries = chart.addCandlestickSeries({
      upColor: '#4CAF50',
      borderUpColor: '#4CAF50',
      wickUpColor: '#4CAF50',
      downColor: '#F44336',
      borderDownColor: '#F44336',
      wickDownColor: '#F44336',
    });

    // Set chart data
    candleSeries.setData(data);

    // Handle resize events
    const handleResize = () => {
      chart.resize(chartContainerRef.current.clientWidth, chartContainerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      chart.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, [data, theme]);

  return <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '500px' }} />;
};

export default Chart;