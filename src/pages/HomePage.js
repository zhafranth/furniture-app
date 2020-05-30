import React, { Component } from "react";

// component
import Navbar from "components/Header";
import Hero from "components/HeroLanding";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.refMostRefPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Navbar {...this.props} />
        <Hero refShowProduct={this.refMostRefPicked} />
      </>
    );
  }
}
