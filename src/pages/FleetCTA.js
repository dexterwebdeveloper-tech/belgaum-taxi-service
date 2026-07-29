import React from "react";

const FleetCTA = () => {
  return (
    <section
      className="fleet-cta fleet-cta--two wow fadeInUp py-5"
      data-wow-duration="1500ms"
      data-wow-delay="300ms"
    >
      <div className="container">

        <div className="fleet-cta__inner">

          {/* Title */}
          <div className="fleet-cta__inner__item">

            <div className="sec-title">

              <h6 className="sec-title__tagline bw-split-in-right">
                Available 24/7
              </h6>

              <h3 className="sec-title__title bw-split-in-left">
                Call Today For Booking
              </h3>

            </div>

          </div>


          {/* Phone Call */}
          <div className="fleet-cta__inner__item fleet-cta__inner__item--two">

            <div className="fleet-cta__inner__item__call">

              <a
                href="tel:+918722158435"
                className="fleet-cta__call"
              >

                <div className="fleet-cta__call__icon">

                  <i className="fa-solid fa-phone"></i>

                  <i className="ripple"></i>

                </div>


                <div className="fleet-cta__call__content">

                  <span className="fleet-cta__call__text">
                    Call Now
                  </span>


                  <h6 className="fleet-cta__call__number">
                    +91 8722158435
                  </h6>

                </div>


              </a>


              <div
                className="fleet-cta__inner__bg"
                style={{
                  backgroundImage:
                    "url(/images/shapes/background-cta.png)",
                }}
              ></div>


            </div>

          </div>


          {/* Button */}
          <div className="fleet-cta__inner__item">

            <a
              href="/contact-us"
              className="fleet-cta__inner__btn"
            >

              <span>
                Contact Us
              </span>


              <span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </span>


            </a>

          </div>


        </div>

      </div>

    </section>
  );
};

export default FleetCTA;