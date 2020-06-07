import React from "react";

export default function TitleProduct(props) {
  return (
    <section className="container text-center">
      <h2
        style={{
          fontSize: 40,
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        {props.title}
      </h2>
      <p style={{ fontStyle: "italic", fontSize: 18, fontWeight: 300 }}>
        {props.desc}
      </p>
    </section>
  );
}
