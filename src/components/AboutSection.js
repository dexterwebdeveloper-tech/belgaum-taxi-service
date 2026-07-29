import React from "react";
import FunfactOne from "../pages/FunfactOne";
import Testimonialsabout from "./Testimonialsabout";
// import FunFact from "../pages/FunFact";
// import VisionMission from "../pages/VisionMission ";
// import VehicleSlider from "../pages/VehicleSlider";
// import TrustedPartner from "../pages/TrustedPartner";

const Aboutus = () => {
  return (


<>




  <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white" data-cursor="-opaque">
                  About Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>







    <section className="your-dream-one section-space">
      <div className="container">
        <div className="row gutter-y-40">
          <div className="col-lg-6">
            <div
              className="your-dream-one__thumb wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <div className="your-dream-one__thumb__item">
                <img
                  src="/images/About.png"
                  alt="image"
                />
              </div>

       

              <div className="your-dream-one__element-four">
                <img
                  src="/images/shapes/truse-1-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>

       <div className="col-lg-6">
  <div className="your-dream-one__container">

    <div className="sec-title sec-title--two text-start">
      <h6 className="sec-title__tagline bw-split-in-right">
        About Us
      </h6>

      <h3 className="sec-title__title bw-split-in-left">
        Your Journey Begins with Aaradhya Travels
      </h3>
    </div>

    <p
      className="your-dream-one__text wow fadeInUp"
      data-wow-duration="1500ms"
      data-wow-delay="500ms"
    >
      Aaradhya Travels is your trusted travel partner dedicated to making every journey comfortable, safe, and memorable. We specialize in providing reliable transportation services designed to meet the needs of families, business travelers, tourists, corporate clients, and groups seeking a smooth and enjoyable travel experience.

{/* With a strong commitment to customer satisfaction, Aaradhya Travels offers a wide range of travel solutions including local and outstation trips, airport transfers, corporate travel, wedding transportation, event transportation, pilgrimage tours, sightseeing tours, staff transportation, and customized travel packages at competitive prices. Whether you require a Tempo Traveller, Force Urbania, Mini Bus, Luxury Bus, or premium vehicle for your journey, we have the perfect travel solution for every requirement. */}

We take pride in serving weddings and special occasions by providing comfortable and reliable transportation for guests, family members, and event organizers. Our corporate travel services are designed to ensure punctuality, professionalism, and convenience for business meetings, conferences, employee transportation, and corporate events. We also cater to educational tours, group excursions, family vacations, and weekend getaways with well-maintained vehicles and experienced drivers.

{/* Our fleet is equipped to handle travel requirements of all sizes, from small family trips to large group transportation. Every vehicle is regularly maintained to ensure safety, cleanliness, and maximum comfort throughout your journey. Our professional drivers are experienced, courteous, and dedicated to providing a hassle-free travel experience. */}

At Aaradhya Travels, we believe that travel is not just about reaching a destination—it is about creating unforgettable memories along the way. Our mission is to deliver dependable service, comfortable vehicles, transparent pricing, and exceptional customer support so that every journey becomes a pleasant and stress-free experience.

Choose Aaradhya Travels for reliable transportation, professional service, and a commitment to excellence that makes every trip truly special.

    </p>

  </div>
</div>
        </div>
      </div>

 
    </section>
    <FunfactOne/>
    <Testimonialsabout/>
    {/* <TrustedPartner/> */}
    {/* <VisionMission/> */}
    {/* <FunFact/> */}
{/* <VehicleSlider/> */}
</>
  );
};

export default Aboutus;
