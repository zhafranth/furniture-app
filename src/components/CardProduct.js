import React from "react";

// Component
import Button from "elements/Button";

export default function CardProduct(props) {
  return (
    <Button type="link" href={`/item-details/${props.id}`}>
      <div className="card">
        <figure className="img-wrapper">
          <img src={props.image} className="img-cover" alt={props.name} />
        </figure>
        <div className="card-body">
          <h5>{props.name}</h5>
          <p>{props.price}</p>
        </div>
      </div>
    </Button>
  );
}
