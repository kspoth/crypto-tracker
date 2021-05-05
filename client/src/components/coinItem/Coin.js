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
  return (
    <div className="cryptoCoin">
      <img src={image} alt={`${name}`} className="coinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">${price.toLocaleString()}</p>
      <p className="coinMarketcap">Market Cap: ${marketcap.toLocaleString()}</p>
      <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>
      {saved == false && <button onClick={onSaveCoin}>save</button>}
      {priceChange < 0 ? (
        <div className="priceContainerDOWN">
          <i className="fas fa-angle-down fa-2x"></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="priceContainerUP">
          <i className="fas fa-angle-up fa-2x"></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Coin;
