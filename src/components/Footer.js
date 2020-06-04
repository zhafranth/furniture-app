import React from "react";
import BrandTextIcon from "components/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <BrandTextIcon />
            <p className="brand-tagline">Rest with comfort zone</p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Baginner</h6>
            <ul className="list-group list-style-flush">
              <li className="list-group-item">New Account</li>
              <li className="list-group-item">Star Booking a Room</li>
              <li className="list-group-item">Use Payments</li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-style flush">
              <li className="list-group-item">Our Careers</li>
              <li className="list-group-item">Privacy</li>
              <li className="list-group-item">Terms and Condition</li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-style flush">
              <li className="list-group-item">support@staycation.id</li>
              <li className="list-group-item">021 - 2208 - 1996</li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 • All rights reserved • FurniHome
          </div>
        </div>
      </div>
    </footer>
  );
}
