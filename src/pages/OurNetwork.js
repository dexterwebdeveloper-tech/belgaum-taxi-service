









// import React from "react";
// import {
//   FaMapMarkerAlt,
//   FaTaxi,
//   FaRoute,
//   FaGlobeAsia,
//   FaArrowRight,
// } from "react-icons/fa";

// import "./OurNetwork.css";

// const network = [
//   {
//     city: "Pune",
//     state: "Maharashtra",
//     distance: "340 KM",
//   },
//   {
//     city: "Mumbai",
//     state: "Maharashtra",
//     distance: "500 KM",
//   },
//   {
//     city: "Goa",
//     state: "Goa",
//     distance: "110 KM",
//   },
//   {
//     city: "Kolhapur",
//     state: "Maharashtra",
//     distance: "120 KM",
//   },
//   {
//     city: "Shirdi",
//     state: "Maharashtra",
//     distance: "560 KM",
//   },
//   {
//     city: "Mahabaleshwar",
//     state: "Maharashtra",
//     distance: "290 KM",
//   },
//   {
//     city: "Hyderabad",
//     state: "Telangana",
//     distance: "520 KM",
//   },
//   {
//     city: "Bengaluru",
//     state: "Karnataka",
//     distance: "500 KM",
//   },
//   {
//     city: "Kerala",
//     state: "South India",
//     distance: "850 KM",
//   },
// ];

// const OurNetwork = () => {
//   return (
// <>

//  <div className="page-headder bg-section parallaxie">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="page-header-box text-white">
//                 <h1 className="text-anime-style-3 text-center text-white">
//                   One Network
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     <section className="network-area">
//       <div className="container">

      

//         <div className="row align-items-center">

         

//           <div className="col-lg-6">

//             <div className="network-list">

//               {network.map((item, index) => (

//                 <div
//                   className="network-card"
//                   key={index}
//                 >

//                   <div className="network-icon">
//                     <FaMapMarkerAlt />
//                   </div>

//                   <div className="network-content">

//                     <h4>{item.city}</h4>

//                     <span>{item.state}</span>

//                     <p>{item.distance} from Belgaum</p>

//                   </div>

//                   <div className="network-arrow">
//                     <FaArrowRight />
//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>


//  <div className="col-lg-6">

//             <div className="india-map-box">

//               <svg
//                 className="india-map"
//                 viewBox="0 0 600 700"
//                 xmlns="http://www.w3.org/2000/svg"
//               >

//                 {/* India Shadow */}

//                 <path
//                   className="india-shape"
//                   d="
// M250 40
// L315 55
// L370 90
// L400 135
// L430 165
// L440 210
// L455 255
// L440 315
// L465 355
// L450 425
// L420 470
// L395 520
// L365 560
// L330 610
// L285 655
// L250 620
// L220 575
// L185 545
// L165 500
// L135 455
// L118 390
// L128 330
// L120 270
// L140 225
// L160 175
// L185 140
// L205 90
// Z
//                   "
//                 />

//                 {/* Route Lines */}

//                 <line x1="250" y1="270" x2="190" y2="215" className="route-line"/>
//                 <line x1="250" y1="270" x2="175" y2="330" className="route-line"/>
//                 <line x1="250" y1="270" x2="210" y2="420" className="route-line"/>
//                 <line x1="250" y1="270" x2="335" y2="250" className="route-line"/>
//                 <line x1="250" y1="270" x2="360" y2="145" className="route-line"/>
//                 <line x1="250" y1="270" x2="320" y2="520" className="route-line"/>

//                 {/* Belgaum */}

//                 <circle
//                   cx="250"
//                   cy="270"
//                   r="9"
//                   className="belgaum-dot"
//                 />

//                 <text
//                   x="265"
//                   y="260"
//                   className="map-text"
//                 >
//                   Belgaum
//                 </text>

//                 {/* Pune */}

//                 <circle
//                   cx="210"
//                   cy="220"
//                   r="5"
//                   className="city-dot"
//                 />

//                 <text
//                   x="160"
//                   y="205"
//                   className="map-text"
//                 >
//                   Pune
//                 </text>

//                 {/* Mumbai */}

//                 <circle
//                   cx="175"
//                   cy="330"
//                   r="5"
//                   className="city-dot"
//                 />

//                 <text
//                   x="105"
//                   y="340"
//                   className="map-text"
//                 >
//                   Mumbai
//                 </text>

//                 {/* Goa */}

//                 <circle
//                   cx="210"
//                   cy="420"
//                   r="5"
//                   className="city-dot"
//                 />

//                 <text
//                   x="165"
//                   y="445"
//                   className="map-text"
//                 >
//                   Goa
//                 </text>

//                 {/* Hyderabad */}

//                 <circle
//                   cx="335"
//                   cy="250"
//                   r="5"
//                   className="city-dot"
//                 />

//                 <text
//                   x="345"
//                   y="245"
//                   className="map-text"
//                 >
//                   Hyderabad
//                 </text>

//                 {/* Bengaluru */}

//                 <circle
//                   cx="320"
//                   cy="520"
//                   r="5"
//                   className="city-dot"
//                 />

//                 <text
//                   x="330"
//                   y="530"
//                   className="map-text"
//                 >
//                   Bengaluru
//                 </text>

//               </svg>

//               <div className="coverage-box">

//                 {/* <h3>Coverage</h3> */}

//                 <div className="coverage-item">
//                   <FaTaxi />
//                   <span>500+ Daily Trips</span>
//                 </div>

//                 <div className="coverage-item">
//                   <FaRoute />
//                   <span>250+ Routes</span>
//                 </div>

//                 <div className="coverage-item">
//                   <FaGlobeAsia />
//                   <span>Pan India Service</span>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* Bottom Features */}

//         <div className="network-footer">

//           <div className="footer-box">

//             <FaTaxi />

//             <h4>Outstation Taxi</h4>

//             <p>
//               Safe & comfortable long-distance taxi services from Belgaum to
//               all major cities.
//             </p>

//           </div>

//           <div className="footer-box">

//             <FaRoute />

//             <h4>Airport Transfers</h4>

//             <p>
//               Hassle-free airport pickup & drop to Belgaum, Hubli, Goa,
//               Bengaluru and Pune Airports.
//             </p>

//           </div>

//           <div className="footer-box">

//             <FaGlobeAsia />

//             <h4>Pan India Travel</h4>

//             <p>
//               Travel anywhere across India with experienced drivers and
//               well-maintained vehicles.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>

// </>
//   );
// };

// export default OurNetwork;





import React from "react";
import {
  FaMapMarkerAlt,
  FaTaxi,
  FaRoute,
  FaGlobeAsia,
  FaArrowRight,
} from "react-icons/fa";

import "./OurNetwork.css";

const network = [
  {
    city: "Pune",
    state: "Maharashtra",
    distance: "340 KM",
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    distance: "500 KM",
  },
  {
    city: "Goa",
    state: "Goa",
    distance: "110 KM",
  },
  {
    city: "Kolhapur",
    state: "Maharashtra",
    distance: "120 KM",
  },
  {
    city: "Shirdi",
    state: "Maharashtra",
    distance: "560 KM",
  },
  {
    city: "Mahabaleshwar",
    state: "Maharashtra",
    distance: "290 KM",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    distance: "520 KM",
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    distance: "500 KM",
  },
  {
    city: "Kerala",
    state: "South India",
    distance: "850 KM",
  },
];

const OurNetwork = () => {
  return (
    <>

      <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white">
                  Our Network
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="network-area py-0">

        <div className="container">

          <div className="section-title text-center">

            {/* <span>OUR NETWORK</span> */}

            {/* <h2>
              Belgaum Taxi Service Across
              <br />
              South & West India
            </h2> */}

            {/* <p>
              Reliable taxi services connecting Belgaum with major
              cities across India.
            </p> */}

          </div>

          {/* GRID START */}

          <div className="network-grid">

            {/* MAP COLUMN */}

            <div className="network-map">

              <div className="india-map-box">

                <svg
                  className="india-map"
                  viewBox="0 0 600 700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                    {/* India Shape */}

<defs>

  <linearGradient id="indiaGradient" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stopColor="#2b2b2b"/>
    <stop offset="100%" stopColor="#101010"/>
  </linearGradient>

  <filter id="glow">
    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
    <feMerge>
      <feMergeNode in="coloredBlur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>

</defs>

<path
    fill="url(#indiaGradient)"
    stroke="#FFC107"
    strokeWidth="2"
    d="
M252 48
L285 58
L330 82
L370 108
L402 145
L418 188
L442 240
L446 296
L430 345
L447 392
L430 440
L405 486
L378 528
L350 564
L320 606
L286 646
L250 630
L228 598
L202 564
L178 530
L158 488
L138 440
L122 386
L120 334
L126 288
L138 246
L156 204
L176 170
L194 136
L214 96
Z"
/>

{/* Routes */}

<line
    x1="250"
    y1="280"
    x2="215"
    y2="220"
    className="route-line"
/>

<line
    x1="250"
    y1="280"
    x2="180"
    y2="330"
    className="route-line"
/>

<line
    x1="250"
    y1="280"
    x2="210"
    y2="430"
    className="route-line"
/>

<line
    x1="250"
    y1="280"
    x2="340"
    y2="255"
    className="route-line"
/>

<line
    x1="250"
    y1="280"
    x2="315"
    y2="515"
    className="route-line"
/>

<line
    x1="250"
    y1="280"
    x2="355"
    y2="150"
    className="route-line"
/>

{/* Belgaum */}

<circle
    cx="250"
    cy="280"
    r="10"
    fill="#ff4d4f"
    filter="url(#glow)"
/>

<text
    x="265"
    y="272"
    fill="#fff"
    fontWeight="700"
    fontSize="16"
>
    Belgaum
</text>

{/* Pune */}

<circle cx="215" cy="220" r="5" fill="#FFC107"/>
<text x="150" y="215" fill="#fff" fontSize="14">
    Pune
</text>

{/* Mumbai */}

<circle cx="180" cy="330" r="5" fill="#FFC107"/>
<text x="100" y="340" fill="#fff" fontSize="14">
    Mumbai
</text>

{/* Goa */}

<circle cx="210" cy="430" r="5" fill="#FFC107"/>
<text x="160" y="448" fill="#fff" fontSize="14">
    Goa
</text>

{/* Hyderabad */}

<circle cx="340" cy="255" r="5" fill="#FFC107"/>
<text x="350" y="250" fill="#fff" fontSize="14">
    Hyderabad
</text>

{/* Bengaluru */}

<circle cx="315" cy="515" r="5" fill="#FFC107"/>
<text x="325" y="530" fill="#fff" fontSize="14">
    Bengaluru
</text>

{/* Kerala */}

<circle cx="250" cy="610" r="5" fill="#FFC107"/>
<text x="260" y="625" fill="#fff" fontSize="14">
    Kerala
</text>
{/* Kolhapur */}

<circle
    cx="205"
    cy="310"
    r="5"
    fill="#FFC107"
/>

<text
    x="120"
    y="300"
    fill="#ffffff"
    fontSize="14"
>
    Kolhapur
</text>

<line
    x1="250"
    y1="280"
    x2="205"
    y2="310"
    className="route-line"
/>

{/* Shirdi */}

<circle
    cx="270"
    cy="165"
    r="5"
    fill="#FFC107"
/>

<text
    x="280"
    y="160"
    fill="#ffffff"
    fontSize="14"
>
    Shirdi
</text>

<line
    x1="250"
    y1="280"
    x2="270"
    y2="165"
    className="route-line"
/>

{/* Mahabaleshwar */}

<circle
    cx="230"
    cy="235"
    r="5"
    fill="#FFC107"
/>

<text
    x="115"
    y="240"
    fill="#ffffff"
    fontSize="13"
>
    Mahabaleshwar
</text>

<line
    x1="250"
    y1="280"
    x2="230"
    y2="235"
    className="route-line"
/>

{/* Decorative Glow */}

<circle
    cx="250"
    cy="280"
    r="24"
    fill="none"
    stroke="#FFC107"
    strokeWidth="2"
    opacity=".25"
/>

<circle
    cx="250"
    cy="280"
    r="38"
    fill="none"
    stroke="#FFC107"
    strokeWidth="1"
    opacity=".12"
/>

</svg>

<div className="coverage-box">

    <div className="coverage-item">
        <FaTaxi />
        <span>500+ Daily Trips</span>
    </div>

    <div className="coverage-item">
        <FaRoute />
        <span>250+ Routes</span>
    </div>

    <div className="coverage-item">
        <FaGlobeAsia />
        <span>Pan India Service</span>
    </div>

</div>

</div>

</div>

{/* RIGHT COLUMN */}

<div className="network-cards">

    <div className="network-list">

        {network.map((item, index) => (

            <div
                className="network-card"
                key={index}
            >

                <div className="network-icon">
                    <FaMapMarkerAlt />
                </div>

                <div className="network-content">

                    <h4>{item.city}</h4>

                    <span>{item.state}</span>

                    <p>{item.distance} from Belgaum</p>

                </div>

                <div className="network-arrow">
                    <FaArrowRight />
                </div>

            </div>

        ))}

    </div>

</div>

</div>

{/* FOOTER */}

<div className="network-footer">

    <div className="footer-box">

        <FaTaxi />

        <h4>Outstation Taxi</h4>

        <p>
            Safe & comfortable outstation taxi services from
            Belgaum to all major cities across India.
        </p>

    </div>

    <div className="footer-box">

        <FaRoute />

        <h4>Airport Transfers</h4>

        <p>
            Easy pickup & drop services to Goa, Hubli,
            Belgaum, Pune and Bengaluru Airports.
        </p>

    </div>

    <div className="footer-box">

        <FaGlobeAsia />

        <h4>Pan India Coverage</h4>

        <p>
            Premium taxi services covering Maharashtra,
            Karnataka, Goa, Telangana, Kerala and
            nearby destinations.
        </p>

    </div>

</div>

</div>

</section>

</>

);
};

export default OurNetwork;