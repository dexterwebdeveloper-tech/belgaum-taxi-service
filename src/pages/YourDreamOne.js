import React from "react";

const YourDreamOne = () => {
  return (
    <section className="your-dream-one section-space">
      <div className="container">
        <div className="row gutter-y-40">

          {/* Left Image */}
          <div className="col-lg-6">
            <div
              className="your-dream-one__thumb wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <div className="your-dream-one__thumb__item">
                <img
                  src="/images/aboutt.png"
                  alt="Belgaum Taxi Driver"
                />
              </div>

              <div className="your-dream-one__thumb__item-small">
                <img
                  src="/images/abt.png"
                  alt="Belgaum Taxi Service"
                />
              </div>

              <div className="your-dream-one__element-four">
                <img
                  src="/images/shapes/truse-1-1.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="your-dream-one__container">
              <div className="sec-title sec-title--two text-start">
                <h6 className="sec-title__tagline">
                  BELGAUM TAXI SERVICE
                </h6>

                <h3 className="sec-title__title">
                  Your Trusted Partner for Safe & Comfortable Travel
                </h3>
              </div>

              <p className="your-dream-one__text">
                Belgaum Taxi Service offers reliable local taxi, airport
                transfers, railway station pickup, outstation cabs, and
                corporate travel. Our experienced drivers, clean vehicles,
                affordable fares, and 24/7 support make every journey safe,
                comfortable, and hassle-free.
              </p>

              <div className="your-dream-one__funfact">
                <div className="row gutter-y-30">

                  {/* Taxi Fleet */}
                  <div className="col-md-6">
                    <div className="funfact-one__item">
                      <div
                        className="funfact-one__item__bg"
                        style={{
                          backgroundImage:
                            "url(/images/resources/funfact-bg-1-1.jpg)",
                        }}
                      ></div>

                      <h3 className="funfact-one__funfact__count">
                        25<span>+</span>
                      </h3>

                      <p className="funfact-one__funfact__text">
                        Taxi Fleet
                      </p>

                      <div className="funfact-one__border__group">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  {/* Happy Customers */}
                  <div className="col-md-6">
                    <div className="funfact-one__item">
                      <div
                        className="funfact-one__item__bg"
                        style={{
                          backgroundImage:
                            "url(/images/resources/funfact-bg-1-2.jpg)",
                        }}
                      ></div>

                      <h3 className="funfact-one__funfact__count">
                        5000<span>+</span>
                      </h3>

                      <p className="funfact-one__funfact__text">
                        Happy Customers
                      </p>

                      <div className="funfact-one__border__group">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="col-md-6">
                    <div className="funfact-one__item">
                      <div
                        className="funfact-one__item__bg"
                        style={{
                          backgroundImage:
                            "url(/images/resources/funfact-bg-1-3.jpg)",
                        }}
                      ></div>

                      <h3 className="funfact-one__funfact__count">
                        24<span>/7</span>
                      </h3>

                      <p className="funfact-one__funfact__text">
                        Service Available
                      </p>

                      <div className="funfact-one__border__group">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  {/* Satisfaction */}
                  <div className="col-md-6">
                    <div className="funfact-one__item">
                      <div
                        className="funfact-one__item__bg"
                        style={{
                          backgroundImage:
                            "url(/images/resources/funfact-bg-1-4.jpg)",
                        }}
                      ></div>

                      <h3 className="funfact-one__funfact__count">
                        100<span>%</span>
                      </h3>

                      <p className="funfact-one__funfact__text">
                        Customer Satisfaction
                      </p>

                      <div className="funfact-one__border__group">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="your-dream-one__element-two">
        <img
          src="/images/shapes/truse-1-1.png"
          alt="Decoration"
        />
      </div>

      <div className="your-dream-one__element-three">
        <img
          src="/images/shapes/truse-1-2.png"
          alt="Decoration"
        />
      </div>
    </section>
  );
};

export default YourDreamOne;