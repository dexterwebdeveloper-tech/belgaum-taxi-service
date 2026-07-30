import React from "react";
import FunfactOne from "../pages/FunfactOne";
import Testimonialsabout from "./Testimonialsabout";
// import FunFact from "../pages/FunFact";
// import VisionMission from "../pages/VisionMission";
// import VehicleSlider from "../pages/VehicleSlider";
// import TrustedPartner from "../pages/TrustedPartner";

const Aboutus = () => {
  return (
    <>
      {/* Page Header */}
      <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1
                  className="text-anime-style-3 text-center text-white"
                  data-cursor="-opaque"
                >
                  About Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
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
                  <img src="/images/About.png" alt="Belgaum Taxi Service" />
                </div>

                <div className="your-dream-one__element-four">
                  <img
                    src="/images/shapes/truse-1-1.png"
                    alt="Trusted Taxi Service"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="your-dream-one__container">
                <div className="sec-title sec-title--two text-start">
                  <h6 className="sec-title__tagline bw-split-in-right">
                    About Us
                  </h6>

                  <h3 className="sec-title__title bw-split-in-left">
                    Your Trusted Travel Partner – Belgaum Taxi Service
                  </h3>
                </div>

                <p
                  className="your-dream-one__text wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <strong>Belgaum Taxi Service</strong> is one of the leading
                  taxi service providers in Belagavi, offering safe,
                  comfortable, and affordable transportation for local,
                  outstation, airport, and corporate travel. Our goal is to
                  provide every customer with a smooth, reliable, and enjoyable
                  travel experience backed by professional service and
                  well-maintained vehicles.
                  <br />
                  <br />
                  Whether you're travelling within Belagavi city, planning an
                  outstation trip, attending a business meeting, catching a
                  flight, or exploring popular tourist destinations, we have
                  the perfect travel solution for you. We specialise in local
                  taxi services, airport transfers, railway station pickups,
                  one-way taxi bookings, round trips, family tours, sightseeing
                  packages, wedding transportation, pilgrimage tours, and
                  corporate travel services.
                  <br />
                  <br />
                  Our modern fleet includes Hatchbacks, Sedans, SUVs, Toyota
                  Innova, Innova Crysta, Ertiga, Tempo Travellers, and premium
                  vehicles suitable for individuals, families, and groups of
                  every size. Every vehicle is regularly serviced, sanitised,
                  and maintained to ensure maximum safety, cleanliness, and
                  comfort throughout your journey.
                  <br />
                  {/* <br />
                  Our experienced and courteous drivers are familiar with local
                  and outstation routes, ensuring timely pickups, safe driving,
                  and excellent customer service. We believe that punctuality,
                  transparent pricing, and customer satisfaction are the
                  foundation of our business.
                  <br />
                  <br />
                  At <strong>Belgaum Taxi Service</strong>, we are committed to
                  making every journey stress-free and memorable. Whether you
                  require a taxi for business, leisure, airport transfer,
                  weekend getaway, or long-distance travel, you can rely on us
                  for dependable service, competitive pricing, and complete
                  peace of mind.
                  <br />
                  <br />
                  Choose <strong>Belgaum Taxi Service</strong> for trusted
                  transportation, professional drivers, quality vehicles, and a
                  travel experience that exceeds your expectations every time. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <FunfactOne />

      {/* Testimonials */}
      <Testimonialsabout />

      {/* Optional Sections */}
      {/* <TrustedPartner /> */}
      {/* <VisionMission /> */}
      {/* <FunFact /> */}
      {/* <VehicleSlider /> */}
    </>
  );
};

export default Aboutus;