import React from "react";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="cryptoCoin">
      <img
        src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
        alt="Bitcion"
        className="coinLogo"
      ></img>
      <div className="coinNameWrap">
        <h1 className="coinName">Bitcoin</h1>
        <p className="coinSymbol">BTC</p>
      </div>
      <p className="coinPrice">$60k</p>
      <p className="coinMarketCap">Market Cap: $1,185,601,872,889</p>
      <p className="coinVolume">Volume (24H): $69,024,951,198</p>
    </div>
  );
};

export default Coin;
