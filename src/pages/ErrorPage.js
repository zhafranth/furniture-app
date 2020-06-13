import React, { Component } from "react";
import Fade from "react-reveal/Fade";

// Component
import Button from "elements/Button";
import Header from "components/Header";
import Footer from "components/Footer";

// Image
import errorPage from "assets/images/not-found-page.png";

export default class ErrorPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <div className="container text-center" style={{ margin: " 10vh auto" }}>
          <div className="row my-5">
            <Fade top>
              <div className="col-md-12">
                <img
                  src={errorPage}
                  alt="error page"
                  width="50%"
                  height="auto"
                />
              </div>
              <div className="col">
                <h5
                  style={{
                    textTransform: "uppercase",
                    fontWeight: 700,
                    margin: "10px 0",
                    fontSize: "2rem",
                  }}
                >
                  The Page Was Lost
                </h5>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <Button href="/" type="link" className="btn">
              Back to Home
            </Button>
          </Fade>
        </div>
        <Footer />
      </>
    );
  }
}
