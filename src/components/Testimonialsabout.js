import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonialsabout = () => {

  const testimonials = [
    {
      image: "assets/images/resources/testi-2-1.jpg",
      name: "Kathryn Murphy",
      role: "Web Developer",
    },
    {
      image: "assets/images/resources/testi-2-2.jpg",
      name: "John Smith",
      role: "Designer",
    },
    {
      image: "assets/images/resources/testi-2-3.jpg",
      name: "Emily Watson",
      role: "Manager",
    },
    {
      image: "assets/images/resources/testi-2-4.jpg",
      name: "David Miller",
      role: "Developer",
    },
    {
      image: "assets/images/resources/testi-2-1.jpg",
      name: "Robert Lee",
      role: "CEO",
    },
    {
      image: "assets/images/resources/testi-2-2.jpg",
      name: "Sophia Brown",
      role: "Designer",
    },
  ];


  return (
    <section className="testimonials-one section-space" id="testimonial">

      <div
        className="testimonials-one__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/testimonials-bg-2-1.png)",
        }}
      ></div>


      <div className="container">

        <div className="testimonials-one__top">

          <div className="row align-items-end">

            <div className="col-lg-8">

              <div className="sec-title sec-title--two text-start">

                <h6 className="sec-title__tagline">
                  our testimonials
                </h6>

                <h3 className="sec-title__title">
                  what peoples say about <br />
                  rentol
                </h3>

              </div>

            </div>


            <div className="col-lg-4">
              <div className="testimonials-one__custome-navs">
              </div>
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
            delay: 2500,
            disableOnInteraction: false,
          }}


          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}


          breakpoints={{

            0:{
              slidesPerView:1
            },

            768:{
              slidesPerView:1
            },

            992:{
              slidesPerView:2
            },

            1200:{
              slidesPerView:2
            },

            1400:{
              slidesPerView:3
            }

          }}

          className="testimonials-one__carousel"

        >


          {
            testimonials.map((item,index)=>(

              <SwiperSlide key={index}>


                <div className="testimonials-one__item">


                  <div className="testimonials-card testimonials-card--one">


                    <div className="testimonials-card__top">

                      <div className="testimonials-card__image">

                        <img
                          src={item.image}
                          alt={item.name}
                        />

                      </div>


                      <div className="testimonials-card__top__video">

                        <a
                          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                          className="testimonials-card__video"
                        >
                          <i className="icon-play-buttton"></i>
                        </a>

                      </div>

                    </div>



                    <p className="testimonials-card__text">
                      “Consectetur adipiscing elit. Integer nunc viverra
                      laoreet est porta pretium metus aliquam eget.”
                    </p>



                    <div className="testimonials-card__content">


                      <div className="testimonials-card__author">

                        <h4 className="testimonials-card__author__title">
                          {item.name}
                        </h4>


                        <span className="testimonials-card__author__dec">
                          {item.role}
                        </span>

                      </div>



                      <div className="testimonials-card__rating">

                        {
                          [...Array(5)].map((_,i)=>(
                            <i
                              className="fa fa-star"
                              key={i}
                            ></i>
                          ))
                        }

                      </div>


                    </div>



                    <div className="testimonials-card__quite">
                      <i className="icon-quite"></i>
                    </div>


                  </div>


                </div>


              </SwiperSlide>

            ))
          }


        </Swiper>


        {/* Custom buttons */}
        <div className="testimonial-buttons">

          <button className="testimonial-prev">
            <span className="icon-arrow-left-2"></span>
          </button>

          <button className="testimonial-next">
            <span className="icon-arrow-right-2"></span>
          </button>

        </div>


      </div>




      {/* <div className="testimonials-one__image">

        <img
          src="assets/images/resources/car-2-1.jpg"
          alt="car"
        />

      </div>


      <div className="testimonials-one__image__line">

        <img
          src="assets/images/shapes/line-round.png"
          alt="line"
        />

      </div> */}


    </section>
  );
};


export default Testimonialsabout;