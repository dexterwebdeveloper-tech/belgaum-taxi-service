import React from "react";
import { Helmet } from "react-helmet";
import "../css/privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Belgaum Taxi Service</title>

        <meta
          name="description"
          content="Privacy Policy for Belgaum Taxi Service. Learn how we collect, use, and protect your personal information for taxi booking, airport transfer, and travel services."
        />

        <meta
          name="keywords"
          content="Belgaum Taxi Service, Taxi Booking, Airport Taxi Belgaum, Outstation Cab, Privacy Policy"
        />
      </Helmet>


      <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white">
                  Privacy Policy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="privacy-policy">

        <div className="container px-0">


          <div className="row g-0">

            <img 
              className="img-fluid" 
              src="/images/privacy.png" 
              alt="Privacy Policy"
            />


            <div className="col-12 col-md-12">


              <h3 className="title">
                Privacy Policy – Belgaum Taxi Service
              </h3>


              <p>
                At <b>Belgaum Taxi Service</b>, we respect your privacy
                and are committed to protecting your personal information.
                This Privacy Policy explains how we collect, use,
                and protect your information when you use our taxi
                booking, airport transfer, local taxi, and outstation
                travel services.
              </p>



              <div className="section">


                <p className="highlight darkcolor">
                  Information We Collect:
                </p>


                <p className="highlight darkcolor">
                  1. Personal Information:
                </p>


                <p>
                  When you book a taxi or contact Belgaum Taxi Service,
                  we may collect details such as your name, phone number,
                  email address, pickup location, destination details,
                  travel date, and payment information.
                </p>



                <p className="highlight darkcolor">
                  2. Booking Information:
                </p>


                <p>
                  We collect travel details including vehicle preference,
                  passenger count, pickup and drop locations, trip type,
                  and journey details to provide smooth transportation
                  services.
                </p>



                <p className="highlight darkcolor">
                  3. Website Usage Information:
                </p>


                <p>
                  We may collect technical information such as IP address,
                  browser details, device information, and website usage
                  data to improve our website performance and customer
                  experience.
                </p>


              </div>




              <div className="section">


                <p className="highlight darkcolor">
                  How We Use Your Information:
                </p>



                <p className="highlight darkcolor">
                  1. Taxi Booking & Service Management:
                </p>


                <p>
                  Your information helps us confirm taxi bookings,
                  allocate drivers, manage schedules, and provide
                  reliable travel services.
                </p>



                <p className="highlight darkcolor">
                  2. Customer Support:
                </p>


                <p>
                  We use your contact information to provide booking
                  confirmation, driver updates, trip details, and
                  customer assistance.
                </p>



                <p className="highlight darkcolor">
                  3. Service Improvement:
                </p>


                <p>
                  Customer feedback and service information help us
                  improve our taxi services and provide a better
                  travel experience.
                </p>



                <p className="highlight darkcolor">
                  4. Offers & Updates:
                </p>


                <p>
                  With your permission, we may send information about
                  offers, discounts, and new services provided by
                  Belgaum Taxi Service.
                </p>


              </div>




              <div className="section">


                <p className="highlight darkcolor">
                  Information Sharing:
                </p>



                <p className="highlight darkcolor">
                  1. Drivers & Operations Team:
                </p>


                <p>
                  Necessary booking details may be shared with drivers
                  and our support team to complete your taxi service
                  safely and efficiently.
                </p>



                <p className="highlight darkcolor">
                  2. Legal Requirements:
                </p>


                <p>
                  We may share information if required by law,
                  government authorities, or for protecting customer
                  safety and legal rights.
                </p>


              </div>




              <div className="section">


                <p className="highlight darkcolor">
                  Data Security:
                </p>


                <p>
                  Belgaum Taxi Service follows appropriate security
                  measures to protect customer information from
                  unauthorized access, misuse, or disclosure.
                </p>



                <p className="highlight darkcolor">
                  Your Rights:
                </p>


                <p>
                  Customers may request access, correction, or deletion
                  of their personal information and can choose whether
                  to receive promotional communication.
                </p>



                <p className="highlight darkcolor">
                  Policy Updates:
                </p>


                <p>
                  This Privacy Policy may be updated from time to time.
                  Any changes will be published on this page.
                </p>


              </div>


            </div>

          </div>





          <div className="contact-info">


            <h2>
              Contact Us
            </h2>



            <p>
              If you have any questions regarding this Privacy Policy,
              please contact Belgaum Taxi Service:
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


export default PrivacyPolicy;