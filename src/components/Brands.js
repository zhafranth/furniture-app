import React from "react";
import Fade from "react-reveal/Fade";

export default function Brands(props) {
  return (
    <section className="container">
      <h2 className="title-section mb-5">
        All <span className="font-weight-light">Product</span>
      </h2>
      <div className="row">
        {props.data.map((item, index) => {
          return (
            <Fade bottom delay={300 * index}>
              <div className="col-md-3 col-sm-6" key={`brand-${index}`}>
                <img src={item.image} alt={item.name} style={{ width: 263 }} />
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}
