import React from "react";

// Carousel
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
// Star Rating
import StarRatingComponent from "react-star-rating-component";

export default function Testimonial(props) {
  return (
    <section className="container">
      <h2 className="title-section mb-5">
        What Our <span className="font-weight-light">Client Says</span>
        <Carousel infinite autoPlay={5000} animationSpeed={1000}>
          {props.data.map((item, index) => {
            return (
              <div className="container testimoni" key={`Testimoni-${index}`}>
                <p>{`"${item.testimoni} "`}</p>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <StarRatingComponent value={item.point} />
              </div>
            );
          })}
        </Carousel>
      </h2>
    </section>
  );
}
