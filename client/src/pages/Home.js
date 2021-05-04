import React, { Component } from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Coin";
import Footer from "../components/Footer";
import API from "../utils/API/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    coins: [],
    q: "",
    message: "Search for a currency to begin ",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getCoins = () => {
    API.getCoins(this.state.q)
      .then((res) =>
        this.setState({
          coins: res.data,
        })
      )
      .catch(() =>
        this.setState({
          coins: [],
          message: "No books found, try a different title.",
        })
      );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getCoins();
  };

  handleCoinSave = (id) => {
    const coin = this.state.coins.find((coin) => coin.id === id);

    API.saveCoin({
      coinId: coin.id,
      title: coin.name,
      price: coin.current_price,
      symbol: coin.symbol,
      marketcap: coin.market_cap,
      volume: coin.total_volume,
      image: coin.image,
      priceChange: coin.price_change_percentage_24h,
    }).then(() => this.getCoins());
  };

  render() {
    return (
      <Container>
        <div style={{ backgroundColor: "#1a1a1c" }}>
          <Row>
            <Col size="md-12">
              <Card title="Coin Search" icon="fas fa-coins">
                <Form
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Available Cryptocurrencies">
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
                            onClick={() => this.handleCoinSave(book.id)}
                            className="btn btn-primary ml-2"
                          >
                            Save
                          </button>
                        )}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              </Card>
            </Col>
          </Row>
          <Footer />
        </div>
      </Container>
    );
  }
}

export default Home;
