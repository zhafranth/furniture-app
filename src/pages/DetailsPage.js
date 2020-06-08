import React, { Component } from "react";

// Data
import DataProduct from "JSON/product.json";

// Component
import Footer from "components/Footer";
import Navbar from "components/Header";
import SimilarItems from "components/NewArrival";

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slugItemDetails,
    };
  }

  getProduct = (slug) => {
    const product = DataProduct.product.find((item) => item.id === slug);
    return product;
  };
  render() {
    const product = this.getProduct(this.state.slug);
    console.log(product);
    return (
      <div className="container">
        <Navbar {...this.props} />
        <section className="mt-5">
          <div className="row">
            <div className="col-md-5 offset-1">
              <figure className="img-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-cover"
                />
              </figure>
            </div>
            <div className="col-4">
              <h1>{product.name}</h1>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
