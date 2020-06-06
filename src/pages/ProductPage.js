import React, { Component } from "react";

// Data
import DataProduct from "JSON/product.json";
import DataLandingPage from "JSON/landingPage.json";

// Component
import Navbar from "components/Header";
import HeroProduct from "components/HeroProduct";
import CardProduct from "components/CardProduct";
import Footer from "components/Footer";
import Categories from "components/Categories";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slugProduct,
    };
  }

  getProduct = (slug) => {
    const tempProduct = DataProduct.product.filter(
      (item) => item.type === slug
    );
    return tempProduct;
  };

  render() {
    const product = this.getProduct(this.state.slug);
    // const price = product.map((item) => item.price);
    console.log(this.state.slug);
    return (
      <>
        <Navbar {...this.props} />
        <HeroProduct />
        <Categories product data={DataLandingPage.categories} />
        <section className="container">
          <div className="row">
            {product.map((item, index) => {
              return (
                <div className="col-md-3">
                  <CardProduct
                    key={`Card-${index}`}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
