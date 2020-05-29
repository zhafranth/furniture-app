import React, { Component } from "react";

// component
import Button from "elements/Button/";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello From Home Page</h1>
        <Button isPrimary type="link">
          ini tombol
        </Button>
      </div>
    );
  }
}
