import React, { Component } from "react";
import Card from "../components/Card";
import Coin from "../components/Coin";
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
                  {this.state.coins.map((book) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      price={coin.current_price}
                      symbol={coin.symbol}
                      marketcap={coin.market_cap}
                      volume={coin.total_volume}
                      image={coin.image}
                      priceChange={coin.price_change_percentage_24h}
                      Button={() => (
                        <button
                          onClick={() => this.handleCoinDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
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
