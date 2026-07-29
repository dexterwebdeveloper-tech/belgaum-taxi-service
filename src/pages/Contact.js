import React from "react";

const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="page-header-box text-white">

                <h1 className="text-anime-style-3 text-center text-white">
                  Contact Us
                </h1>

              </div>

            </div>
          </div>
        </div>
      </div>



      {/* Contact Section */}
      <section className="contact-one section-space bhjh">

        <div className="container">

          <div className="row gutter-y-30">


            {/* Phone */}
            <div className="col-lg-4 col-md-4 col-12">

              <div
                className="contact-one__item wow fadeInLeft"
                data-wow-duration="1500ms"
              >

                <div className="contact-one__item__icon">
                  <i className="fa-solid fa-phone"></i>
                </div>


                <div className="contact-one__item__content">

                  <h5 className="contact-one__item__title">
                    Call Us
                  </h5>


                  <a
                    href="tel:+918722158435"
                    className="contact-one__item__call"
                  >
                    +91 8722158435
                  </a>


                </div>

              </div>

            </div>





            {/* Email */}
            <div className="col-lg-4 col-md-4 col-12">

              <div
                className="contact-one__item wow fadeInLeft"
                data-wow-duration="1700ms"
              >

                <div className="contact-one__item__icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>


                <div className="contact-one__item__content">

                  <h5 className="contact-one__item__title">
                    Email Address
                  </h5>


                  <a
                    href="mailto:booking@belgaumtaxiservice.com"
                    className="contact-one__item__call"
                  >
                    booking@belgaumtaxiservice.com
                  </a>


                </div>

              </div>

            </div>





            {/* Address */}
            <div className="col-lg-4 col-md-4 col-12">


              <div
                className="contact-one__item wow fadeInLeft"
                data-wow-duration="1900ms"
              >

                <div className="contact-one__item__icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>



                <div className="contact-one__item__content">

                  <h5 className="contact-one__item__title">
                    Office Address
                  </h5>


                  <p className="contact-one__item__text">
                    Belgaum Taxi Service,<br/>
                   P No 30 cCTS No 7023, Sector No 9 Malmaruti Anjaneya Nagar, Belgaum, Karnataka - 590017
                  </p>


                </div>


              </div>


            </div>


          </div>

        </div>


      </section>





      {/* Google Map */}

      <section className="contact-map">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2923.154481297566!2d74.5328889!3d15.8788056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDUyJzQzLjciTiA3NMKwMzEnNTguNCJF!5e1!3m2!1sen!2sin!4v1785324307499!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{
            border: 0
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Belgaum Taxi Service Location"
        ></iframe>


      </section>


    </>
  );
};

export default Contact;