import React from "react";

// Component
import Button from "elements/Button";

export default function Promotion() {
  return (
    <section className="container-fluid promotion">
      <div className="container">
        <div className="row">
          <div className="offset-md-6 col-md-6 text-center mt-5">
            <h4>TRENDING PRODUCT</h4>
            <h2>
              CHAIRLIFT PRODUCT <br />
              2020
            </h2>
            <p>
              Choose from a wide range of well-crafted premium <br /> quality
              wooden furniture online
            </p>
            <Button
              type="link"
              href="/product/all-product"
              className="btn mx-5"
              hasShadow
            >
              See All Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
