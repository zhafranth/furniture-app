import React, { Component } from "react";

// Data
import item from "JSON/landingPage.json";

// component
import Navbar from "components/Header";
import Hero from "components/HeroLanding";
import Category from "components/Categories";
import NewArrival from "components/NewArrival";
import Promotion from "components/Promotion";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.refShowProduct = React.createRef();
  }
  render() {
    return (
      <>
        <Navbar {...this.props} />
        <Hero refShowProduct={this.refShowProduct} />
        <Category refShowProduct={this.refShowProduct} data={item.categories} />
        <NewArrival data={item.newArrival} />
        <Promotion />
      </>
    );
  }
}
