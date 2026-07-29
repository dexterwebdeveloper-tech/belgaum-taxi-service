import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  "/images/faq/faq-1-1.jpg",
  "/images/faq/faq-1-2.jpg",
  "/images/faq/faq-1-1.jpg",
  "/images/faq/faq-1-2.jpg",
];

const faqs = [
  {
    question: "What documents do I need to rent a car?",
    answer:
      "A valid Driving License, Aadhaar Card or Passport, and other government-issued ID proofs may be required while renting a car.",
  },
  {
    question: "What age do I need to be to rent a car?",
    answer:
      "The minimum age is generally 21 years. Some premium vehicles may require drivers to be at least 25 years old.",
  },
  {
    question: "Can I book a car for outstation trips?",
    answer:
      "Yes. We provide one-way, round-trip, airport transfer, corporate, and outstation cab services across India.",
  },
  {
    question: "Do you provide airport pickup and drop?",
    answer:
      "Yes, we provide 24x7 airport pickup and drop services with professional drivers.",
  },
];

const AskedQuestion = () => {
  const [active, setActive] = useState(1);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="asked-question" id="faq">
      {/* Background */}
      <div
        className="faq-bg"
        style={{
          backgroundImage:
            "url(/images/shapes/asked-bg.png)",
        }}
      ></div>

      {/* Slider */}

      <div className="container-fluid mb-5">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="faq-image">
                <img src={img} alt="FAQ" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* FAQ */}

      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 offset-lg-6">

            <div className="section-title">

              <span>Asked Question</span>

              <h2>
                We Care Of Your Safety
                <br />
                And Convenience
              </h2>

            </div>

            <div className="faq-area">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    active === index ? "active" : ""
                  }`}
                >
                  <div
                    className="faq-title"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4>{faq.question}</h4>

                    <span>
                      {active === index ? "−" : "+"}
                    </span>
                  </div>

                  <div
                    className="faq-content"
                    style={{
                      maxHeight:
                        active === index ? "250px" : "0px",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Shape */}

      <div className="faq-shape">
        <img
          src="/images/shapes/shape-faq.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default AskedQuestion;