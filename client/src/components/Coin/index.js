import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Coin({
  key,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  Button,
}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">
            {key}
            {name}
          </h3>
          {symbol && <h5 className="font-italic">{price}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={marketcap}
            >
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">{symbol}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img
            className="img-thumbnail img-fluid w-100"
            src={image}
            alt={name}
          />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{marketcap}</p>
          <p>{volume}</p>
          <p>{priceChange}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Coin;