import React from "react";

const services = [
  {
    title: "Airport Cab Service",
    image: "Airport-Cab-Service.jpg",
    description:
      "Reliable airport pickup and drop services with professional drivers and on-time arrivals.",
  },
  {
    title: "Business Travel Cab Service",
    image: "Business-Travel-Cab-Service.jpg",
    description:
      "Executive cab solutions for business meetings, corporate tours, and official travel.",
  },
  {
    title: "Corporate Cab Service",
    image: "Corporate-Cab-Service.jpg",
    description:
      "Dedicated corporate transportation with premium vehicles and experienced chauffeurs.",
  },
  {
    title: "Festival & Event Special Rides",
    image: "Festival-&-Event-Special-Rides.jpg",
    description:
      "Comfortable transportation for festivals, family functions, and special celebrations.",
  },
  {
    title: "Hill Station Travel Service",
    image: "Hill-Station-Travel-Service.jpg",
    description:
      "Enjoy memorable trips to Goa, Amboli, Dandeli, Mahabaleshwar and more.",
  },
  {
    title: "Local City Rides",
    image: "Local-City-Rides.jpg",
    description:
      "Affordable local taxi rides for shopping, office, hospitals, railway stations and daily travel.",
  },
  {
    title: "Luxury Car Rental Service",
    image: "Luxury-Car-Rental-Service.jpg",
    description:
      "Luxury cars for weddings, VIP guests, corporate executives and premium travel.",
  },
  {
    title: "One Way Drop Service",
    image: "One-Way-Drop-Service.jpg",
    description:
      "Save money with affordable one-way taxi service to your preferred destination.",
  },
  {
    title: "Outstation Cab Service",
    image: "Outstation-Cab-Service.jpg",
    description:
      "Book comfortable outstation taxis for Pune, Goa, Bangalore, Mumbai, Kolhapur and more.",
  },
  {
    title: "Round Trip Taxi Service",
    image: "Round-Trip-Taxi-Service.jpg",
    description:
      "Flexible round-trip packages for family vacations, pilgrimages and business tours.",
  },
  {
    title: "Wedding & Event Transportation",
    image: "Wedding-&-Event-Transportation.jpg",
    description:
      "Premium transportation for weddings, receptions, corporate events and family celebrations.",
  },
];

export default function ServiceSection() {
  return (
<>

 <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white">
                  Our Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    <section className="belgaum-service-section py-5">
      <div className="container">

        {/* <div className="text-center mb-5">

          <span className="service-tag">
            OUR SERVICES
          </span>

          <h2 className="service-title mt-3">
            Premium Taxi Services in Belgaum
          </h2>

          <p className="service-subtitle">
            Safe • Comfortable • Affordable • Professional Transportation
          </p>

        </div> */}

        <div className="row">

          {services.map((service, index) => (

        <div className="col-xl-4 col-lg-6 col-md-6 mb-4" key={index}>
    <div className="belgaum-service-card">

        <div className="service-image">
            <img
                src={`/images/service/${service.image}`}
                alt={service.title}
            />
        </div>

        <div className="service-content">

            <div className="service-number">
                {(index + 1).toString().padStart(2, "0")}
            </div>

            <h4>{service.title}</h4>

            <p>{service.description}</p>

        </div>

    </div>
</div>

          ))}

        </div>

      </div>
    </section>
</>
  );
}