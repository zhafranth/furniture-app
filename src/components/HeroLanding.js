import React from "react";
import Fade from "react-reveal/Fade";

// Image Hero
import ImageHero from "assets/images/Hero.png";
import ImageHerobg from "assets/images/Hero_.png";

// Componenet
import Button from "elements/Button";

export default function HeroLanding(props) {
  function showCategoryProduct() {
    window.scrollTo({
      top: props.refShowProduct.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container mt-5">
      <div className="row justify-content-between">
        <Fade left>
          <div className="col">
            <h1
              className="font-weight-bold mb-5 line-height-1"
              style={{ fontSize: 48 }}
            >
              Design Your <br /> Comfort Zone
            </h1>
            <p
              className="font-weight-light line-height-1"
              style={{
                lineHeight: "170%",
                fontSize: 18,
                color: "#A48585",
                marginBottom: 65,
              }}
            >
              Carefully curated trinkets make your house a <br />
              home, and express your personality. But it’s not <br />
              just what you display, it’s how you display it.
            </p>
            <Button
              hasShadow
              isPrimary
              className="btn px-5 font-weight-light"
              onClick={showCategoryProduct}
            >
              SHOP NOW
            </Button>
          </div>
        </Fade>
        <div className="col-auto">
          <div style={{ width: 455, height: 455 }}>
            <Fade right delay={1000}>
              <img
                src={ImageHero}
                alt="Image Hero"
                className="img-fluid position-absolute"
                style={{ margin: "-30px -30px 0 0", zIndex: 1 }}
              />
            </Fade>
            <Fade bottom delay={500}>
              <img
                src={ImageHerobg}
                alt="Image Hero bg"
                className="img-fluid position-absolute"
                style={{ margin: "0 0 -30px -30px" }}
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
