import React, { Component } from "react";

// Data
import DataProduct from "JSON/product.json";

// Component
import Footer from "components/Footer";
import Navbar from "components/Header";
import CardDetailProduct from "components/CardDetailProduct";

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slugItemDetails,
      type: "all-product",
    };
  }

  getProductDetail = (slug) => {
    const product = DataProduct.product.find((item) => item.id === slug);
    return product;
  };

  render() {
    const productDetail = this.getProductDetail(this.state.slug);
    console.log(productDetail);
    return (
      <div className="container">
        <Navbar {...this.props} />
        <section className="mt-5">
          <div className="row">
            <div className="col-md-5 offset-1">
              <figure className="img-wrapper">
                <img
                  src={productDetail.image}
                  alt={productDetail.name}
                  className="img-cover"
                />
              </figure>
            </div>
            <div className="col-4">
              <CardDetailProduct
                name={productDetail.name}
                price={productDetail.price}
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
