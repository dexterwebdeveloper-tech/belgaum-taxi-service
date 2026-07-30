import React from "react";

const CtaTwo = () => {
  return (
    <section className="cta-two section-space-top cta-two--two">
      <div className="container">

        <div className="cta-two__inner">

          <div
            className="cta-two__bg"
            style={{
              backgroundImage:
                "url(/images/shapes/card-bg.png)",
            }}
          ></div>


          <div className="row">

            <div className="col-lg-6">

              <div className="cta-two__content">


                <div className="sec-title sec-title--two text-start">


                  <h6 className="sec-title__tagline bw-split-in-right">
                    Book Your Taxi Today
                  </h6>


                  <h3 className="sec-title__title bw-split-in-left">
                    Comfortable & Reliable Taxi Service In Belgaum
                  </h3>


                </div>



                <p className="cta-two__content__text">

                  Travel safely with Belgaum Taxi Service. 
                  We provide 24/7 local taxi, airport pickup,
                  outstation travel and corporate cab services
                  with professional drivers and well-maintained vehicles.

                </p>



                <div className="cta-two__button">


                  <a
                    href="tel:+918722158435"
                    className="thm-btn"
                  >

                    <span>
                      Call Us
                    </span>

                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>

                  </a>



                  {/* <a
                    href="https://wa.me/918722158435"
                    className="thm-btn"
                  >

                    <span>
                      WhatsApp
                    </span>

                    <span>
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>

                  </a> */}


                </div>


              </div>

            </div>


          </div>




          <div className="cta-two__thumb">


            <div className="cta-two__thumb__item-one">

              <img
                src="/images/resources/card-man.png"
                alt="Taxi Driver"
              />

            </div>



            {/* <div className="cta-two__thumb__item-two">

              <img
                src="/images/resources/card-car.png"
                alt="Taxi Car"
              />

            </div> */}



            <div className="cta-two__thumb__item-element">

              <img
                src="/images/shapes/card-line-1-1.png"
                alt="Design Element"
              />

            </div>


          </div>


        </div>

      </div>
    </section>
  );
};

export default CtaTwo;