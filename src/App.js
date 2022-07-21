import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  const [data, setData] = useState({});

  let fetchData = async () => {
    let fetchedItem = await axios.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    );
    setData(fetchedItem.data["Time Series (5min)"]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>fetched Data</h1>
      <br />
      <table>
        <thead>
          <tr className="tr" style={{borderBottom: '1px solid black'}}> 
            <th>DateTime</th>
            <th>Open</th>
            <th>high</th>
            <th>low</th>
            <th>close</th>
            <th>volume</th>
          </tr>
        </thead>
        <tbody>
      {/* iterating object using object.keys() method which gives an array*/}
          {Object.keys(data).map((key,index) => {
            let item = data[key];

            return (
              <tr key={index}>
                <td>{key}</td>
                <td>{item["1. open"]}</td>
                <td>{item["2. high"]}</td>
                <td>{item["3. low"]}</td>
                <td>{item["4. close"]}</td>
                <td>{item["5. volume"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;