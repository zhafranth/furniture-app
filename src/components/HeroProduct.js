import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function HeroProduct() {
  return (
    <div className="container-fluid hero-product">
      <Carousel infinite autoPlay={8000} animationSpeed={1000}>
        <img
          src="/images/HeroProduct.png"
          className="img-cover"
          alt="Hero Product 1"
        />
        <img
          src="/images/HeroProduct.png"
          className="img-cover"
          alt="Hero Product 2"
        />
        <img
          src="/images/HeroProduct.png"
          className="img-cover"
          alt="Hero Product 3"
        />
      </Carousel>
    </div>
  );
}
