import React from "react";
import Button from "elements/Button";
import BrandTextIcon from "./IconText";

export default function Header(props) {
  const getActiveClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandTextIcon />

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${getActiveClass("/")}`}>
                <Button className="nav-link" href="/" type="link">
                  Home
                </Button>
              </li>
              <li
                className={`nav-item ${getActiveClass("/product/all-product")}`}
              >
                <Button
                  className="nav-link"
                  href="/product/all-product"
                  type="link"
                >
                  Product
                </Button>
              </li>
              <li className={`nav-item ${getActiveClass("/about")}`}>
                <Button className="nav-link" href="/about" type="link">
                  About
                </Button>
              </li>
              <li className={`nav-item ${getActiveClass("/contact")}`}>
                <Button className="nav-link" href="/contact" type="link">
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
