import React, { useState } from "react";

const BookingCar = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    cabType: "",
    date: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*Belgaum Taxi Booking Request*

Name: ${formData.name}
Phone: ${formData.phone}
Pickup: ${formData.pickup}
Drop: ${formData.dropoff}
Cab Type: ${formData.cabType}
Journey Date: ${formData.date}`;

    window.open(
      `https://wa.me/918722158435?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="booking-car-one bg-transparent">
      <div className="booking-car-one__inner">
        <div
          className="booking-car-one__bg"
          style={{
            backgroundImage: "url(/images/backgrounds/car-bg.png)",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="booking-car-one__content">
                <form
                  className="booking-car-one__form"
                  onSubmit={handleSubmit}
                >
                  <div className="booking-car-one__form__top">
                    <h4 className="booking-car-one__form__title">
                      Book Your Taxi
                    </h4>

                    <p className="booking-car-one__form__text">
                      Safe, Reliable & Affordable Taxi Service in Belgaum
                    </p>
                  </div>

                  <div className="booking-car-one__form__grid">

                    <div className="booking-car-one__form__control">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="booking-car-one__form__control">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="booking-car-one__form__control">
                      <input
                        type="text"
                        name="pickup"
                        placeholder="Pickup Location"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="booking-car-one__form__control">
                      <input
                        type="text"
                        name="dropoff"
                        placeholder="Drop Location"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    {/* <div className="booking-car-one__form__control">
                      <select
                        name="cabType"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Select Cab</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Innova Crysta</option>
                        <option>Tempo Traveller</option>
                      </select>
                    </div> */}
                    <div className="booking-car-one__form__control">
 <select
  name="cabType"
  required
  value={formData.cabType}
  onChange={handleChange}
  style={{
    width: "100%",
    height: "58px",
    border: "1px solid #e5e5e5",
    borderRadius: "35px",
    padding: "0 20px",
    fontSize: "18px",
    color: "#666",
    background: "#fff",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    outline: "none",
    cursor: "pointer",
  }}
>
  <option value="">Select Cab</option>
  <option value="Sedan">Sedan</option>
  <option value="SUV">SUV</option>
  <option value="Innova Crysta">Innova Crysta</option>
  <option value="Tempo Traveller">Tempo Traveller</option>
</select>
</div>

                <div className="booking-car-one__form__control">
  <input
    type="date"
    name="date"
    min={new Date().toISOString().split("T")[0]}
    required
    onChange={handleChange}
  />
</div>

                    <div className="booking-car-one__form__control">
                      <button
                        type="submit"
                        className="booking-car-one__btn"
                      >
                        <span>Book Now</span>
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="booking-car-one__man">
            <img
              src="/images/resources/man-1-1.png"
              alt="Taxi Booking"
            />
          </div>

          <div className="booking-car-one__element">
            <img
              src="/images/shapes/details-shape.png"
              alt="Shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCar;