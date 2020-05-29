import React, { Component } from "react";

// Component
import Navbar from "components/Header";

export default class ProductPage extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props} />
      </>
    );
  }
}
