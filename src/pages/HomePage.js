import React, { Component } from "react";

// component
import Button from "elements/Button/";
import BrandTextIcon from "components/IconText";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container mx-5">
        <h1>Hello From Home Page</h1>
        <BrandTextIcon />
      </div>
    );
  }
}
