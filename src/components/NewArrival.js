import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// Arrow Font
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import image from "assets/images/chair.jpg";

export default function NewArrival() {
  return (
    <section className="container">
      <h2 className="title-section mb-5">
        New <span className="font-weight-light">Arrival</span>
      </h2>
      <Carousel
        infinite
        slidesPerPage={4}
        arrows
        autoPlay={5000}
        animationSpeed={700}
        arrowLeft={<IoMdArrowDropleft className="arrow-icon" />}
        arrowRight={<IoMdArrowDropright className="arrow-icon" />}
        addArrowClickHandler
      >
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5>Lorm arm gray</h5>
            <p>Rp. 201.000</p>
          </div>
        </div>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5>Lorm arm gray</h5>
            <p>Rp. 201.000</p>
          </div>
        </div>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5>Lorm arm gray</h5>
            <p>Rp. 201.000</p>
          </div>
        </div>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5>Lorm arm gray</h5>
            <p>Rp. 201.000</p>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
