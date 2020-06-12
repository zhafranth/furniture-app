import React from "react";

export default function CardDetailProduct(props) {
  return (
    <div className="card card-detail">
      <div className="card-body">
        <h4>{props.name}</h4>
        <h5>
          {props.price} <span> /1 Unit</span>
        </h5>
      </div>
    </div>
  );
}
