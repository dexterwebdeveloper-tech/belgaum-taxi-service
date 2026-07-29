import React from "react";

const HowRentTwo = () => {
  return (
    <section className="how-rent-two section-space">
      <div className="container">
        <div className="row gutter-y-30">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              className="how-rent-two__item wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="how-rent-two__item__top">
                <div className="how-rent-two__item__icon">
                  <i className="icon-car-1"></i>
                </div>
              </div>

              <h4 className="how-rent-two__item__title">
                BOOK A TAXI
              </h4>

              <p className="how-rent-two__item__text">
                Book your Belgaum taxi online or by phone for quick, reliable, and affordable travel anytime.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              className="how-rent-two__item wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="how-rent-two__item__top">
                <div className="how-rent-two__item__icon">
                  <i className="icon-car-insurance"></i>
                </div>
              </div>

              <h4 className="how-rent-two__item__title">
                CONFIRM RIDE
              </h4>

              <p className="how-rent-two__item__text">
                Receive instant booking confirmation with transparent pricing and complete driver information.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              className="how-rent-two__item wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="how-rent-two__item__top">
                <div className="how-rent-two__item__icon">
                  <i className="icon-car-insurance-1"></i>
                </div>
              </div>

              <h4 className="how-rent-two__item__title">
                PICKUP SERVICE
              </h4>

              <p className="how-rent-two__item__text">
                Our professional driver arrives on time and picks you up safely from your chosen location.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div
              className="how-rent-two__item wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="800ms"
            >
              <div className="how-rent-two__item__top">
                <div className="how-rent-two__item__icon">
                  <i className="icon-satisfaction"></i>
                </div>
              </div>

              <h4 className="how-rent-two__item__title">
                SAFE JOURNEY
              </h4>

              <p className="how-rent-two__item__text">
                Enjoy a comfortable, secure, and hassle-free ride with experienced drivers across every destination.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="how-rent-two__element-one">
        <img
          src="/images/resources/how-1-1.png"
          alt="Decoration"
        />
      </div>

      <div className="how-rent-two__element-two">
        <img
          src="/images/resources/how-1-2.png"
          alt="Decoration"
        />
      </div>
    </section>
  );
};

export default HowRentTwo;