import React, { Component } from "react";

// Data
import item from "JSON/landingPage.json";
import product from "JSON/product.json";

// component
import Navbar from "components/Header";
import Hero from "components/HeroLanding";
import Category from "components/Categories";
import NewArrival from "components/NewArrival";
import Promotion from "components/Promotion";
import Brands from "components/Brands";
import Testimonial from "components/Testimonial";
import Footer from "components/Footer";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.refShowProduct = React.createRef();
  }
  render() {
    const newArrivalProduct = product.product.filter(
      (item) => item.newArrival === true
    );
    console.log(newArrivalProduct);
    return (
      <>
        <Navbar {...this.props} />
        <Hero refShowProduct={this.refShowProduct} />
        <Category refShowProduct={this.refShowProduct} data={item.categories} />
        <NewArrival data={newArrivalProduct} />
        <Promotion />
        <Brands data={item.brands} />
        <Testimonial data={item.testimonial} />
        <Footer />
      </>
    );
  }
}
