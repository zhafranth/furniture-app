import React, { Component } from "react";

// Star Rating
import StarRatingComponent from "react-star-rating-component";

// Component
import Button from "elements/Button";

// Icon
import Guarante from "assets/images/icon1.svg";
import Calender from "assets/images/icon2.svg";
import CashOnDel from "assets/images/icon3.svg";

export default class CardDetailProduct extends Component {
  state = {
    value: 1,
  };
  handlePlus = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  handleMinus = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };
  render() {
    return (
      <div className="card card-detail" style={{ cursor: "default" }}>
        <div className="card-body">
          <h4>{this.props.name}</h4>
          <StarRatingComponent
            value={this.props.point}
            className="star"
            emptyStarColor={"#cecece"}
          />
          <h5>
            {this.props.price} <span> /{this.state.value} Unit</span>
          </h5>
          <div className="row my-4">
            <div className="col-auto">
              <div className="conter">
                <button className="minus" onClick={this.handleMinus}>
                  -
                </button>
                <input type="text" value={this.state.value} />
                <button className="plus" onClick={this.handlePlus}>
                  +
                </button>
              </div>
            </div>
            <div className="col-auto">
              <Button
                className="btn"
                style={{
                  backgroundColor: "#FF926B",
                  width: 152,
                  height: 30,
                  borderRadius: 25,
                  paddingBottom: 3,
                  paddingTop: 3,
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div
            className="feature mt-4 pt-3"
            style={{ borderTop: "1px solid #ececec" }}
          >
            <div className="row">
              <div
                className="col  d-flex text-center"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <img width="25" height="25" src={Guarante} alt="Guarante" />
                <span style={{ fontSize: 11, marginTop: 10 }}>
                  Guarantee Quality Product
                </span>
              </div>
              <div
                className="col d-flex text-center"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <img width="25" height="25" src={Calender} alt="Guarante" />
                <span style={{ fontSize: 11, marginTop: 10 }}>
                  30 Days Refund
                </span>
              </div>
              <div
                className="col d-flex text-center"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <img width="25" height="25" src={CashOnDel} alt="Guarante" />
                <span style={{ fontSize: 11, marginTop: 10 }}>
                  Cash On Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
