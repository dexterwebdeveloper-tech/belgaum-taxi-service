import React from "react";

const vehicles = [
  {
    id: 1,
    name: "Swift Dzire",
    image: "/images/fleet/Swift-Dzire.jpg",
    seats: "4+1 Seats",
    luggage: "2 Bags",
    type: "Sedan",
    desc: "Affordable sedan for airport transfers, city rides, railway station pickups and outstation taxi services.",
  },
  {
    id: 2,
    name: "Maruti Ertiga",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "Family MPV",
    desc: "Comfortable family vehicle for sightseeing, airport transfers, pilgrimage tours and long-distance travel.",
  },
  {
    id: 3,
    name: "Toyota Rumion",
    image: "/images/fleet/Toyota-Rumion.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "Premium MPV",
    desc: "Luxury MPV with spacious seating and premium comfort for business and family travel.",
  },
  {
    id: 4,
    name: "Kia Carens",
    image: "/images/fleet/Kia-Carens.jpg",
    seats: "6+1 Seats",
    luggage: "4 Bags",
    type: "Luxury MPV",
    desc: "Premium family vehicle with modern interiors, extra comfort and ample luggage space.",
  },
  {
    id: 5,
    name: "Toyota Innova",
    image: "/images/fleet/Innova-Cab.jpg",
    seats: "7 Seats",
    luggage: "4 Bags",
    type: "SUV",
    desc: "Trusted SUV for corporate travel, local sightseeing, airport transfers and outstation journeys.",
  },
  {
    id: 6,
    name: "Innova Crysta",
    image: "/images/fleet/Innova-Crysta.jpg",
    seats: "7 Seats",
    luggage: "5 Bags",
    type: "Premium SUV",
    desc: "Luxury chauffeur-driven SUV for executives, VIP guests and premium travel experiences.",
  },
  {
    id: 7,
    name: "Tempo Traveller",
    image: "/images/fleet/Tempo-Traveller.jpg",
    seats: "12-17 Seats",
    luggage: "10 Bags",
    type: "Traveller",
    desc: "Perfect for family tours, corporate outings, school trips and pilgrimage groups.",
  },
  {
    id: 8,
    name: "Force Urbania",
    image: "/images/fleet/Urbania-Bus.jpg",
    seats: "13-17 Seats",
    luggage: "12 Bags",
    type: "Luxury Van",
    desc: "Executive luxury van with premium interiors for comfortable group transportation.",
  },
  {
    id: 9,
    name: "Luxury Bus",
    image: "/images/fleet/bus.jpg",
    seats: "32-50 Seats",
    luggage: "Large",
    type: "Luxury Bus",
    desc: "Ideal for weddings, corporate events, school excursions and large group travel.",
  },
];

const Booking = () => {
  return (
    <>
       <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white">
                  Online Booking
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="booking-section ">

        <div className="container">

          <div className="text-center mb-5">

            {/* <span className="booking-subtitle">
              BELGAUM TAXI SERVICE
            </span>

            <h2 className="booking-title">
              Choose Your Perfect Ride
            </h2>

            <p className="booking-text">
              Whether you need a city taxi, airport transfer,
              outstation cab, family vehicle, luxury SUV,
              Tempo Traveller, Urbania or Bus,
              we have the perfect vehicle for every journey.
            </p> */}

          </div>

          {vehicles.map((car, index) => (
            <div
              key={car.id}
              className={`booking-card row align-items-center ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-lg-5">

                <div className="booking-image">

                  <img
                    src={car.image}
                    alt={car.name}
                    className="img-fluid"
                  />

                  <span className="vehicle-badge">
                    {car.type}
                  </span>

                </div>

              </div>

              <div className="col-lg-7">

                {/* <span className="vehicle-type">
                  {car.type}
                </span> */}

                <h3>{car.name}</h3>

                {/* <p>{car.desc}</p> */}
                                <div className="booking-features">

                  <div className="feature-box">
                    <i className="fas fa-users"></i>
                    <div>
                      <small>Capacity</small>
                      <span>{car.seats}</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-suitcase"></i>
                    <div>
                      <small>Luggage</small>
                      <span>{car.luggage}</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-snowflake"></i>
                    <div>
                      <small>Facility</small>
                      <span>Air Conditioned</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-user-tie"></i>
                    <div>
                      <small>Driver</small>
                      <span>Professional Chauffeur</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-map-marked-alt"></i>
                    <div>
                      <small>Service</small>
                      <span>Local & Outstation</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-clock"></i>
                    <div>
                      <small>Availability</small>
                      <span>24×7 Service</span>
                    </div>
                  </div>

                </div>

                <div className="booking-actions">

                  <a
                    href={`https://wa.me/918722158435?text=Hello%20Belgaum%20Taxi%20Service,%20I%20want%20to%20book%20${encodeURIComponent(
                      car.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-btn whatsapp-btn"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Book Now
                  </a>

                  <a
                    href="tel:+918722158435"
                    className="booking-btn call-btn"
                  >
                    <i className="fas fa-phone-alt"></i>
                    Call Now
                  </a>

                </div>

              </div>
            </div>
          ))}

          <div className="booking-bottom">

            <div className="row align-items-center">

              <div className="col-lg-8">

                <h2>
                  Need a Comfortable Ride Anywhere?
                </h2>

                <p>
                  Belgaum Taxi Service offers reliable local taxis,
                  airport transfers, outstation cabs, corporate travel,
                  pilgrimage tours, family trips, Tempo Travellers,
                  Urbania vans and luxury buses at affordable prices.
                </p>

              </div>

              <div className="col-lg-4 text-lg-end">

                <a
                  href="tel:+918722158435"
                  className="booking-main-btn"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Book Your Cab
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default Booking;