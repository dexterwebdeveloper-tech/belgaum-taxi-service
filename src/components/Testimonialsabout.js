import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonialsabout = () => {
  const testimonials = [
    {
      name: "Mr. Ramesh Patil",
      role: "Local Customer",
      review:
        "Excellent taxi service in Belgaum. The driver arrived on time, the cab was clean, and the journey was comfortable. I highly recommend Belgaum Taxi Service to everyone.",
    },
    {
      name: "Ms. Priya Desai",
      role: "Airport Transfer",
      review:
        "Booked an airport taxi from Belgaum Taxi Service. The driver was punctual, professional, and the fare was reasonable. A hassle-free experience.",
    },
    {
      name: "Mr. Suresh Kulkarni",
      role: "Outstation Traveller",
      review:
        "We travelled from Belgaum to Goa with our family. The vehicle was neat, spacious, and the driver ensured a safe and pleasant journey.",
    },
    {
      name: "Ms. Sneha Joshi",
      role: "Tourist",
      review:
        "Amazing local sightseeing experience. The driver was friendly and took us to all the famous places around Belgaum. Highly satisfied with the service.",
    },
    {
      name: "Mr. Amit Sharma",
      role: "Business Client",
      review:
        "I frequently book taxis for business trips. Their service is reliable, on time, and the drivers are very courteous. Highly recommended.",
    },
    {
      name: "Ms. Neha Kulkarni",
      role: "Family Customer",
      review:
        "Belgaum Taxi Service made our family trip comfortable and stress-free. Clean cab, affordable pricing, and excellent customer support.",
    },
  ];

  return (
    <section className="testimonials-one section-space" id="testimonial">
      {/* Background */}
      <div
        className="testimonials-one__bg"
        style={{
          backgroundImage:
            "url(/images/backgrounds/testimonials-bg-2-1.png)",
        }}
      ></div>

      <div className="container">
        {/* Section Heading */}
        <div className="testimonials-one__top">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="sec-title sec-title--two text-start">
                <h6 className="sec-title__tagline">
                  CUSTOMER TESTIMONIALS
                </h6>

                <h3 className="sec-title__title">
                  What Our Customers Say <br />
                  About Belgaum Taxi Service
                </h3>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonials-one__custome-navs"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-one__inner">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-one__carousel"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonials-one__item">
                <div className="testimonials-card testimonials-card--one">
                  {/* Review */}
                  <p className="testimonials-card__text">
                    "{item.review}"
                  </p>

                  {/* Customer Details */}
                  <div className="testimonials-crd__content">
                    <div className="testimonialscard__author">
                      <h4 className="testimonials-card__author__title">
                        {item.name}
                      </h4>

                      <span className="testimonials-card__author__dec">
                        {item.role}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="testimonials-card__rating">
                      {[...Array(5)].map((_, i) => (
                        <i className="fa fa-star" key={i}></i>
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="testimonials-card__quite">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="testimonial-buttons">
          <button className="testimonial-prev">
            <span className="icon-arrow-left-2"></span>
          </button>

          <button className="testimonial-next">
            <span className="icon-arrow-right-2"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonialsabout;