import React, { useState } from "react";

const Career = () => {

const [formData, setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    city:"",
    position:"",
    experience:"",
    message:""
});

const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });
};

const handleSubmit=(e)=>{
    e.preventDefault();

    const message=`*Belgaum Taxi Service Career Application*

Name : ${formData.name}
Phone : ${formData.phone}
Email : ${formData.email}
City : ${formData.city}
Position : ${formData.position}
Experience : ${formData.experience}

Message :
${formData.message}`;

window.open(`https://wa.me/918722158435?text=${encodeURIComponent(message)}`,"_blank");

};

return(

    <>
     <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white">
                  Career
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


<section className="career-section p-0">

<div className="container">

<div className="career-heading text-center">

{/* <span>CAREERS</span>

<h2>Drive Your Career With Belgaum Taxi Service</h2>

<p>
Join one of Belgaum's fastest-growing taxi companies and build
a rewarding career with endless opportunities.
</p> */}

</div>

<div className="row">

<div className="col-lg-7">

<div className="career-grid">

<div className="career-card">

<div className="career-icon">
<i className="fas fa-handshake"></i>
</div>

<h4>Business Partner</h4>

<p>
Partner with us to expand your taxi or travel business.
Enjoy regular bookings, dedicated support, and long-term
business growth.
</p>

<ul>

<li>Regular Business Leads</li>

<li>Fleet Support</li>

<li>High Earnings</li>

<li>Long Term Partnership</li>

</ul>

</div>

<div className="career-card">

<div className="career-icon">
<i className="fas fa-id-card"></i>
</div>

<h4>Driver Partner</h4>

<p>
Become a professional driver partner and enjoy flexible
working hours with attractive daily income opportunities.
</p>

<ul>

<li>Commercial Badge</li>

<li>Daily Trips</li>

<li>Weekly Incentives</li>

<li>24×7 Driver Support</li>

</ul>

</div>

<div className="career-card">

<div className="career-icon">
<i className="fas fa-route"></i>
</div>

<h4>Travel Consultant</h4>

<p>
Help customers plan local, airport and outstation journeys
with personalized travel assistance.
</p>

<ul>

<li>Customer Interaction</li>

<li>Booking Management</li>

<li>Travel Planning</li>

<li>Career Growth</li>

</ul>

</div>

<div className="career-card">

<div className="career-icon">
<i className="fas fa-headset"></i>
</div>

<h4>Customer Support</h4>

<p>
Assist customers with taxi bookings, ride updates and
24×7 customer support services.
</p>

<ul>

<li>Booking Support</li>

<li>Call Handling</li>

<li>Problem Solving</li>

<li>Friendly Environment</li>

</ul>

</div>

</div>

</div>

<div className="col-lg-5">

<div className="career-form">

<h3>Apply Now</h3>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Full Name"
required
onChange={handleChange}
/>

<input
type="tel"
name="phone"
placeholder="Mobile Number"
required
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email Address"
required
onChange={handleChange}
/>

<input
type="text"
name="city"
placeholder="City"
required
onChange={handleChange}
/>

<select
name="position"
required
onChange={handleChange}
>

<option value="">Select Position</option>

<option>Business Partner</option>

<option>Driver Partner</option>

<option>Travel Consultant</option>

<option>Customer Support</option>

</select>

<input
type="text"
name="experience"
placeholder="Years of Experience"
required
onChange={handleChange}
/>

<textarea
rows="5"
name="message"
placeholder="Tell us about yourself"
onChange={handleChange}
></textarea>

<button type="submit">

Submit Application

</button>

</form>

<div className="career-contact">

<h5>Contact Us</h5>

<p>

<i className="fas fa-phone-alt"></i>

+91 8722158435

</p>

<p>

<i className="fas fa-envelope"></i>

careers@belgaumtaxiservice.com

</p>

<p>

<i className="fas fa-map-marker-alt"></i>

P No 30 CTS No 7023,
Sector No 9,
Malmaruti,
Belgaum,
Karnataka 590017

</p>

</div>

</div>

</div>

</div>

</div>

</section>
    
    </>

);

};

export default Career;