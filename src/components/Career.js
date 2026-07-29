
import React, { useState } from "react";
import {
  FaCar,
  FaUserTie,
  FaHandshake,
  FaHeadset,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Career = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
🚀 Career Application - Aaradhya Travels

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Position: ${form.position}
Message: ${form.message}
    `;

    const url = `https://wa.me/918722158435?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* HEADER */}
      <div className="page-headder bg-section parallaxie">
        <div className="container">
          <h1 className="career-title">Aaradhya Travels Career</h1>
        </div>
      </div>

      {/* SECTION */}
      <section className="career-section">
        <div className="container">

          {/* HEADING */}
          <div className="career-heading">
            <span>JOIN OUR TEAM</span>
            <h2>
              Career Opportunities at <strong>Aaradhya Travels</strong>
            </h2>
            <p>
              Build your career with one of the fastest-growing travel service
              providers. Explore exciting opportunities and grow with us.
            </p>
          </div>

          {/* CAREER CARDS */}
          <div className="career-grid">

            {/* BUSINESS PARTNER */}
            <div className="career-card">
              <FaHandshake className="icon" />
              <h3>Business Partner</h3>
              <p>
                Expand your transport business with Aaradhya Travels and build a
                strong long-term revenue stream in the travel industry.
              </p>
              <ul>
                <li>Consistent trip allocations</li>
                <li>High earning potential from corporate & tourist bookings</li>
                <li>Fleet support & operational assistance</li>
                <li>Trusted brand collaboration</li>
                <li>Business expansion opportunities across Maharashtra & India</li>
              </ul>
            </div>

            {/* DRIVER PARTNER */}
            <div className="career-card">
              <FaCar className="icon" />
              <h3>Driver Partner</h3>
              <p>
                Join as a professional driver and earn stable income with flexible
                working hours and steady trip assignments.
              </p>
              <ul>
                <li>Fixed + trip-based earning options</li>
                <li>Local & outstation trips</li>
                <li>Weekly / monthly payouts</li>
                <li>Safe verified bookings</li>
                <li>Support for continuous assignments</li>
              </ul>
            </div>

            {/* TRAVEL AGENT */}
            <div className="career-card">
              <FaUserTie className="icon" />
              <h3>Travel Agent</h3>
              <p>
                Work as a booking partner and earn commission by managing travel
                inquiries and customer bookings.
              </p>
              <ul>
                <li>Attractive commission per booking</li>
                <li>Work from home or office</li>
                <li>Daily customer leads</li>
                <li>Easy booking system support</li>
                <li>Growth into senior coordinator role</li>
              </ul>
            </div>

            {/* CUSTOMER SUPPORT */}
            <div className="career-card">
              <FaHeadset className="icon" />
              <h3>Customer Support</h3>
              <p>
                Be the voice of Aaradhya Travels by handling customer queries,
                bookings, and travel coordination.
              </p>
              <ul>
                <li>Handle calls, WhatsApp & emails</li>
                <li>Day & night shifts available</li>
                <li>Training provided</li>
                <li>Career growth into operations</li>
                <li>Freshers welcome</li>
              </ul>
            </div>

          </div>

          {/* CONTACT INFO */}
          <div className="contact-box">
            <h3>Contact Details</h3>
            <p><FaPhoneAlt /> +91 8722158435</p>
            <p><FaEnvelope /> booking@belgaumtaxiservice.com</p>
            <p>
              <FaMapMarkerAlt />
              Near RMD College, Opp. Chaudhary Parking, Warje, Pune - 411058
            </p>
          </div>

          {/* FORM */}
          <div className="form-box">
            <h3>Apply Now</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />

              <select
                name="position"
                onChange={handleChange}
                required
              >
                <option value="">Select Position</option>
                <option value="Business Partner">Business Partner</option>
                <option value="Driver Partner">Driver Partner</option>
                <option value="Travel Agent">Travel Agent</option>
                <option value="Customer Support">Customer Support</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about yourself"
                rows="4"
                onChange={handleChange}
              ></textarea>

              <button type="submit">Apply via WhatsApp</button>
            </form>
          </div>

        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .career-section {
          background: linear-gradient(135deg, #564e3a, #564e3a);
          padding: 60px 0;
          color: #fff;
        }

        .career-title {
          text-align: center;
          color: #ffffff;
          font-size: 36px;
          font-weight: 700;
        }

        .career-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .career-heading span {
          color: #ff4d4d;
          font-weight: 600;
        }

        .career-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .career-card {
          background: #111;
          border: 1px solid #8b0000;
          padding: 20px;
          border-radius: 14px;
          transition: 0.3s;
        }

        .career-card:hover {
          transform: translateY(-6px);
          border-color: #ff1a1a;
        }

        .icon {
          font-size: 28px;
          color: #ff1a1a;
          margin-bottom: 10px;
        }

        .career-card h3 {
          color: #ff1a1a;
          margin-bottom: 10px;
        }

        .career-card p {
          color: #ccc;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .career-card ul {
          padding-left: 18px;
          color: #ddd;
          font-size: 13px;
        }

        .contact-box {
          background: #111;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #8b0000;
          margin-bottom: 40px;
        }

        .contact-box p {
          margin: 8px 0;
          color: #ddd;
        }

        .form-box {
          background: #111;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #8b0000;
        }

        .form-box input,
        .form-box select,
        .form-box textarea {
          width: 100%;
          margin-bottom: 12px;
          padding: 10px;
          background: #1a1a1a;
          border: 1px solid #8b0000;
          color: #fff;
          border-radius: 8px;
        }

        .form-box button {
          width: 100%;
          padding: 12px;
          background: #ff1a1a;
          border: none;
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
        }

        .form-box button:hover {
          background: #cc0000;
        }
      `}</style>
    </>
  );
};

export default Career;