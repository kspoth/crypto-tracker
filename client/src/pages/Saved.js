import React, { Component } from "react";
import Card from "../components/Card";
import Coin from "../components/coinItem/Coin";
import Footer from "../components/Footer";
import API from "../utils/API/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    coins: [],
  };

  componentDidMount() {
    this.getSavedCoins();
  }

  getSavedCoins = () => {
    API.getSavedCoins()
      .then((res) =>
        this.setState({
          coins: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleCoinDelete = (id) => {
    API.deleteCoin(id).then((res) => this.getSavedCoins());
  };

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            <Card title="Saved Coins" icon="fas fa-coins">
              {this.state.coins.length ? (
                this.state.coins.map((coin) => (
                  <div style={{ display: "inline-block" }}>
                    <Coin
                      key={coin._id}
                      id={coin._id}
                      name={coin.name}
                      price={coin.price}
                      symbol={coin.symbol}
                      marketcap={coin.market_cap}
                      volume={coin.volume}
                      image={coin.image}
                      priceChange={coin.priceChange}
                      handleCoinDelete={this.handleCoinDelete}
                      saved={true}
                    />
                  </div>
                ))
              ) : (
                <h2 className="text-center">No Saved Coins</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default Saved;
