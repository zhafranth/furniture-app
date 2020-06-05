import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function HeroProduct() {
  return (
    <div className="hero-product">
      <Carousel infinite autoPlay={8000} animationSpeed={1000}>
        <div className="img-hero">
          <img
            src="/images/HeroProduct.png"
            className="img-cover img-shadow"
            alt="Hero Product 1"
          />
        </div>
        <div className="img-hero">
          <img
            src="/images/HeroProduct.png"
            className="img-cover img-shadow"
            alt="Hero Product 2"
          />
        </div>
        <div className="img-hero">
          <img
            src="/images/HeroProduct.png"
            className="img-cover img-shadow"
            alt="Hero Product 3"
          />
        </div>
      </Carousel>
    </div>
  );
}
