import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const Testimonials = () => {

  const testimonials = [
    {
      image: "testi-2-1.jpg",
      name: "Mr. Rajesh Kumar",
      role: "Business Owner",
      text:
        "Excellent taxi service in Belgaum. The driver was punctual, polite, and the vehicle was very clean. Highly recommended for comfortable travel."
    },

    {
      image: "testi-2-2.jpg",
      name: "Miss. Priya Sharma",
      role: "Customer",
      text:
        "I booked a taxi for airport pickup and the service was amazing. The driver arrived on time and the journey was very smooth and safe."
    },

    {
      image: "testi-2-3.jpg",
      name: "Mr. Amit Patil",
      role: "Travel Customer",
      text:
        "Best taxi service in Belgaum for local and outstation trips. Affordable pricing, professional drivers, and excellent customer support."
    },

    {
      image: "testi-2-4.jpg",
      name: "Miss. Sneha Kulkarni",
      role: "Customer",
      text:
        "Very comfortable ride experience. The cab was neat and the driver was experienced. I will definitely use this service again."
    },

    {
      image: "testi-2-1.jpg",
      name: "Mr. Suresh Naik",
      role: "Corporate Customer",
      text:
        "Reliable taxi service with great communication. Perfect choice for business travel and daily transportation needs."
    },

    {
      image: "testi-2-2.jpg",
      name: "Miss. Anjali Desai",
      role: "Customer",
      text:
        "Safe and affordable taxi service in Belgaum. Booking was easy and the overall experience was excellent."
    }
  ];


  return (

    <section
      className="testimonials-one section- py-2"
      id="testimonial"
    >

      <div
        className="testimonials-one__bg"
        style={{
          backgroundImage:
            "url(/images/backgrounds/testimonials-bg-2-1.png)"
        }}
      ></div>


      <div className="container">

        <div className="testimonials-one__top">

          <div className="row align-items-end">

            <div className="col-lg-8">

              <div className="sec-title sec-title--two text-start">

                <h6 className="sec-title__tagline bw-split-in-right">
                  OUR TESTIMONIALS
                </h6>


                <h3 className="sec-title__title bw-split-in-left">
                  What Our Customers Say About
                  <br />
                  Belgaum Taxi Service
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>



      <div className="testimonials-one__inner">

        <Swiper

          modules={[Autoplay]}

          loop={true}

          spaceBetween={30}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false
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


                 



                    <p className="testimonials-card__text">
                      "{item.text}"
                    </p>



                    <div className="testimonials-card__ontent">


                      <div className="testimonials-card__uthor">


                        <h4 className="testimonials-card__author__title">

                          {item.name}

                        </h4>



                        <span className="testimonials-card__author__dec">

                          {item.role}

                        </span>

                      </div>

                      <div className="testimonials-card__rating">

                        {
                          [1,2,3,4,5].map((star)=>(

                            <i
                              key={star}
                              className="fa fa-star"
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


      </div>


    </section>

  );

};


export default Testimonials;