// components/FleetHighway.jsx
import React from "react";
import "../css/FleetHighway.css";

const cars = [
  "/images/fleet/Innova-Cab.jpg",
  "/images/fleet/Innova-Crysta.jpg",
  "/images/fleet/Kia-Carens.jpg",
  "/images/fleet/Tempo-Traveller.jpg",
  "/images/fleet/Urbania-Bus.jpg",
];

const FleetHighway = () => {
  // duplicate to create seamless loop
  const lane = [...cars, ...cars];

  return (
    <section className="highway-wrap">
      <h2 className="fleet-title">Our Fleets</h2>

      {/* LANE 1 → */}
      <div className="lane lane-top">
        <div className="lane-track">
          {lane.map((src, i) => (
            <figure className="car-card" key={`t-${i}`}>
              <img src={src} alt={`Fleet ${i + 1}`} />
              <figcaption>Belgaum Taxi Services</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* LANE 2 ← */}
      <div className="lane lane-bottom">
        <div className="lane-track">
          {lane.map((src, i) => (
            <figure className="car-card" key={`b-${i}`}>
              <img src={src} alt={`Fleet ${i + 1}`} />
              <figcaption>Belgaum Taxi Services</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* dotted center divider */}
      <div className="center-divider" />
    </section>
  );
};

export default FleetHighway;
