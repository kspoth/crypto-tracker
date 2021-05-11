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
      <Container>
        <Row></Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Coins" icon="fas fa-coins">
              {this.state.coins.length ? (
                <List>
                  {this.state.coins.map((coin) => (
                    <div>
                      <Coin
                        key={coin._id}
                        name={coin.name}
                        price={coin.price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.volume}
                        image={coin.image}
                        priceChange={coin.priceChange}
                        saved={true}
                      />

                      <button
                        onClick={() => this.handleCoinDelete(coin._id)}
                        style={{
                          backgroundColor: "tomato",
                          width: "175px",
                          height: "33px",
                          fontSize: "1rem",
                          alignItems: "center",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Coins</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
