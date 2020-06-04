import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// Arrow Font
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

// Component
import CardProduct from "components/CardProduct";

import image from "assets/images/chair.jpg";

export default function NewArrival(props) {
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
        {props.data.map((item, index) => {
          return (
            <CardProduct
              key={`Card-${index}`}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
