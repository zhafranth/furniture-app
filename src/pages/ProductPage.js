import React, { Component } from "react";

// Data
import DataProduct from "JSON/product.json";
import DataLandingPage from "JSON/landingPage.json";

// Component
import Navbar from "components/Header";
import HeroProduct from "components/HeroProduct";
import CardProduct from "components/CardProduct";
import Footer from "components/Footer";
import TitleProduct from "components/TitleProduct";
import Button from "elements/Button";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slugProduct,
    };
  }

  getProduct = (slug) => {
    if (slug === "all-product") {
      const temp = DataProduct.product.filter((item) => item._id);
      const tempT = DataProduct.product.map((item) => {
        delete item.type;
        return item;
      });
      console.log(tempT);
      return temp;
    } else {
      const tempProduct = DataProduct.product.filter(
        (item) => item.type === slug
      );
      return tempProduct;
    }
  };

  getTitle = (slug) => {
    const title = DataProduct.title.find((item) => item.id === slug);
    return title;
  };

  getSlug = (id) => {
    this.setState({
      slug: id,
    });
  };

  render() {
    const product = this.getProduct(this.state.slug);
    const title = this.getTitle(this.state.slug);
    // const price = product.map((item) => item.price);
    // console.log(product);
    return (
      <>
        <Navbar {...this.props} />
        <HeroProduct />
        <section className="container">
          <div className="row justify-content-center">
            {DataLandingPage.categories.map((item, index) => {
              return (
                <div className="col-2" key={`card-${index}`}>
                  <Button
                    type="link"
                    className="strached-link"
                    href={`/product/${item.id}`}
                  >
                    <div
                      className="card-category"
                      onClick={() => this.getSlug(item.id)}
                    >
                      <figure className="img-wrapper">
                        <img
                          src={item.image}
                          className="img-cover"
                          alt={item.name}
                        />
                      </figure>
                      <div className="title-category">
                        <h4>{item.name}</h4>
                      </div>
                    </div>
                  </Button>
                </div>
              );
            })}
          </div>
        </section>
        <TitleProduct title={title.name} desc={title.desc} />
        <section className="container">
          <div className="row">
            {product.map((item, index) => {
              return (
                <div className="col-md-3" key={`Card-${index}`}>
                  <CardProduct
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
