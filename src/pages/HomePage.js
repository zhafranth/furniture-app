import React, { Component } from "react";

// component
import Navbar from "components/Header";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props} />
      </>
    );
  }
}
