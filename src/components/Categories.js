import React from "react";
import Fade from "react-reveal/Fade";

// Component
import Button from "elements/Button";

export default function Categories(props) {
  if (props.product) {
    return (
      <section className="container">
        <div className="row justify-content-center">
          {props.data.map((item, index) => {
            return (
              <div className="col-2" key={`card-${index}`}>
                <Button type="link" href={`/product/${item.id}`}>
                  <div className="card-category">
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
    );
  }
  return (
    <section
      className="container"
      ref={props.refShowProduct}
      style={{ marginTop: 60 }}
    >
      <Fade bottom delay={1000}>
        <h2 className="title-section mb-5">
          All <span className="font-weight-light">Product</span>
        </h2>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={index}
                className={`item colom-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade bottom>
                  <div className="card card-featured">
                    <figure className="img-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="d-block text-white strached-link"
                        href={`/product/${item.id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span className="font-weight-light">SHOP NOW</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
