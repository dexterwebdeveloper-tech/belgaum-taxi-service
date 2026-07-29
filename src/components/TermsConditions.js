import React from "react";
import { Helmet } from "react-helmet";
import "../css/TermsConditions.css";

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>Belgaum Taxi Service | Terms & Conditions</title>

        <meta
          name="description"
          content="Terms & Conditions for Belgaum Taxi Service including airport taxi, local taxi, outstation cab, and rental services."
        />
      </Helmet>

      <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white">
                  Terms & Conditions
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="terms-section">

        <div className="container">

          <div className="row g-0">

            <img className="img-fluid" src="/images/term.png" alt="Terms" />

            <div className="col-md-12">

              <div className="terms-content">


                <p>
                  <b className="highlight">
                    1. Booking Confirmation:
                  </b>
                  <br />

                  All taxi bookings with Belgaum Taxi Service are subject
                  to vehicle availability. Booking confirmation will be
                  provided after receiving customer details and confirmation
                  from our team.
                </p>


                <p>
                  <b className="highlight">
                    2. Taxi Service Usage:
                  </b>
                  <br />

                  Our vehicles are provided for safe passenger
                  transportation including local taxi, airport transfer,
                  outstation trips, corporate travel, and tour packages.
                  Carrying illegal or hazardous materials is strictly
                  prohibited.
                </p>


                <p>
                  <b className="highlight">
                    3. Payment Policy:
                  </b>
                  <br />

                  Customers can make payments through cash, UPI,
                  online payment, or bank transfer. Advance payment
                  may be required for long-distance trips, rental
                  services, and special bookings.
                </p>


                <p>
                  <b className="highlight">
                    4. Cancellation Policy:
                  </b>
                  <br />

                  Cancellation requests should be informed before the
                  scheduled pickup time. Cancellation charges may apply
                  depending on the booking type and timing.
                </p>


                <p>
                  <b className="highlight">
                    5. Customer Responsibility:
                  </b>
                  <br />

                  Customers must provide correct pickup location,
                  destination details, and contact information.
                  Additional waiting charges may apply due to incorrect
                  details or customer delays.
                </p>


                <p>
                  <b className="highlight">
                    6. Vehicle Capacity & Luggage:
                  </b>
                  <br />

                  Passengers should not exceed the permitted seating
                  capacity of the vehicle. Customers are responsible
                  for their personal belongings and luggage.
                </p>


                <p>
                  <b className="highlight">
                    7. Driver & Travel Rules:
                  </b>
                  <br />

                  Drivers follow transport regulations and safety
                  guidelines. For long-distance journeys, additional
                  driver allowances may apply as per travel requirements.
                </p>


                <p>
                  <b className="highlight">
                    8. Safety Guidelines:
                  </b>
                  <br />

                  Passengers must follow safety instructions, use seat
                  belts where available, and avoid damaging the vehicle.
                  Any damage caused by passengers will be chargeable.
                </p>


                <p>
                  <b className="highlight">
                    9. Service Availability:
                  </b>
                  <br />

                  Belgaum Taxi Service reserves the right to refuse
                  service in situations involving unsafe conditions,
                  inappropriate behaviour, or violation of travel rules.
                </p>


                <p>
                  <b className="highlight">
                    10. Jurisdiction:
                  </b>
                  <br />

                  Any disputes related to taxi bookings and services
                  shall be handled under the applicable local
                  jurisdiction.
                </p>



                <h3>Taxi Rental Policy</h3>


                <p>
                  <b className="highlight">
                    Local & Outstation Taxi Services:
                  </b>
                  <br />

                  Belgaum Taxi Service provides reliable taxi solutions
                  including Belgaum local taxi, airport pickup and drop,
                  railway station transfer, outstation cab booking,
                  family trips, business travel, and tour services.
                </p>


                <p>
                  <b className="highlight">
                    Toll, Parking & Additional Charges:
                  </b>
                  <br />

                  Toll charges, parking fees, interstate taxes, and
                  additional travel charges will be paid by the customer
                  unless included in the selected package.
                </p>



                <h3>Refund Policy</h3>


                <p>
                  <b className="highlight">
                    Refund Eligibility:
                  </b>
                  <br />

                  Refunds depend on cancellation timing, booking type,
                  and service availability.
                </p>


                <p>
                  <b className="highlight">
                    Refund Processing:
                  </b>
                  <br />

                  Approved refunds will be processed within 5–7 working
                  days through the original payment method.
                </p>


                <p>
                  <b className="highlight">
                    No Show Policy:
                  </b>
                  <br />

                  No refund will be provided for customers who fail to
                  arrive at the pickup location or cancel at the last
                  moment.
                </p>


              </div>

            </div>

          </div>



          <div className="contact-info">

            <h2>Contact Us</h2>


            <p>
              For taxi booking, airport transfer, or travel assistance,
              contact Belgaum Taxi Service:
            </p>


            <ul>

              <li>
                <b>Phone:</b>{" "}
                <a href="tel:+918722158435">
                  +91 8722158435
                </a>
              </li>


              <li>
                <b>Email:</b>{" "}
                <a href="mailto:booking@belgaumtaxiservice.com">
                  booking@belgaumtaxiservice.com
                </a>
              </li>


              <li>
                <b className="darkcolorrr">
                  Address:
                </b>

                <br />

                <h6>
                  Belgaum Taxi Service
                </h6>

                P No 30 cCTS No 7023, Sector<br/>
 No 9 Malmaruti Anjaneya Nagar,  <br/>
Belgaum, Karnataka - 590017

              </li>

            </ul>

          </div>


        </div>

      </section>

    </div>
  );
};


export default TermsConditions;