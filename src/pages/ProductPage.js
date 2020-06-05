import React, { Component } from "react";

// Data
import DataProduct from "JSON/product.json";

// Component
import Navbar from "components/Header";
import HeroProduct from "components/HeroProduct";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slugProduct,
    };
  }

  getProduct = (slug) => {
    const product = DataProduct.product.find((item) => item.type === slug);
    return product;
  };
  render() {
    const product = this.getProduct(this.state.slug);
    const { price } = product;
    return (
      <>
        <Navbar {...this.props} />
        <HeroProduct />
        <h1>{price}</h1>
      </>
    );
  }
}
