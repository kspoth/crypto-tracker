import React from "react";
import axios from "axios";
import "./Coin.css";

const Coin = ({
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  handleCoinDelete,
  saved,
}) => {
  const onSaveCoin = () => {
    console.log("coin id= ", id);
    axios
      .post("/api/coins", {
        key: id,
        name: name,
        price: price,
        symbol: symbol,
        market_cap: marketcap,
        volume: volume,
        image: image,
        priceChange: priceChange,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  const onDeleteCoin = () => {
    handleCoinDelete(id);
  };
  return (
    <div className="cryptoCoin" style={{ backgroundColor: "grey" }}>
      <img
        src={image}
        alt={`${name}`}
        className="coinLogo"
        style={{ backgroundColor: "transparent" }}
      />
      <div className="coinNameWrap" style={{ backgroundColor: "transparent" }}>
        <h1 className="coinName" style={{ backgroundColor: "transparent" }}>
          {name}
        </h1>
        <p className="coinSymbol" style={{ backgroundColor: "transparent" }}>
          {symbol}
        </p>
      </div>
      <p className="coinPrice">${price.toLocaleString()}</p>
      <p className="coinMarketcap">Market Cap: ${marketcap.toLocaleString()}</p>
      <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>
      {saved == false && (
        <button
          onClick={onSaveCoin}
          style={{
            backgroundColor: "dodgerblue",
            width: "175px",
            height: "33px",
            fontSize: "1rem",
          }}
        >
          Save Coin
        </button>
      )}
      {saved == true && (
        <button
          onClick={onDeleteCoin}
          style={{
            backgroundColor: "tomato",
            width: "175px",
            height: "33px",
            fontSize: "1rem",
          }}
        >
          Delete
        </button>
      )}
      {priceChange < 0 ? (
        <div className="priceContainerDOWN">
          <i
            className="fas fa-angle-down fa-2x"
            style={{ backgroundColor: "transparent" }}
          ></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="priceContainerUP">
          <i
            className="fas fa-angle-up fa-2x"
            style={{ backgroundColor: "transparent" }}
          ></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Coin;
