import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="brand">
          <i className="fas fa-coins"></i>Crypto Tracker
        </h1>
        <form>
          <input
            className="inputField"
            type="text"
            placeholder="Search Currency"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default App;
