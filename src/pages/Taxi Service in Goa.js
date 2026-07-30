import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Taxiserviceingoa() {



    const cardData = {


keyword: "Taxi Service in Goa",

headingDescription: "Belgaum Taxi Service offers reliable taxi service in Goa for local travel, airport transfers, hotel pickups, corporate transportation, family vacations, sightseeing tours, and outstation journeys. Whether you need a one-way taxi, round-trip cab, airport transfer, or a customized outstation package, we provide safe, comfortable, and affordable travel with professional chauffeurs. Our fleet includes Sedan, Ertiga, SUV, Innova, Innova Crysta, Tempo Traveller, and premium vehicles suitable for solo travelers, families, and groups. We ensure doorstep pickup, transparent pricing, easy online booking, flexible travel schedules, and 24/7 customer support for a hassle-free travel experience. Belgaum Taxi Service also provides comfortable outstation taxi services from Goa to major cities, hill stations, pilgrimage destinations, and coastal towns across Karnataka and Maharashtra, making every journey convenient and enjoyable.",

topPlaces: [
  {
    title: "Belgaum",
    description: "Belgaum is one of the most popular outstation destinations from Goa, known for its pleasant climate, historic landmarks, business centers, and convenient road connectivity."
  },
  {
    title: "Gokarna",
    description: "Gokarna is a scenic coastal town in Karnataka famous for Om Beach, Kudle Beach, Mahabaleshwar Temple, and peaceful seaside landscapes."
  },
  {
    title: "Dandeli",
    description: "Dandeli is a renowned adventure destination offering river rafting, jungle safaris, wildlife experiences, trekking, and nature tourism."
  },
  {
    title: "Hubballi",
    description: "Hubballi is a major commercial and business city in Karnataka, attracting travelers for corporate meetings, education, shopping, and medical visits."
  },
  {
    title: "Kolhapur",
    description: "Kolhapur is a historic city in Maharashtra known for the Mahalaxmi Temple, traditional cuisine, shopping, and rich cultural heritage."
  },
  {
    title: "Amboli",
    description: "Amboli is a beautiful hill station near Goa, famous for waterfalls, mist-covered hills, lush greenery, and breathtaking viewpoints."
  },
  {
    title: "Mahabaleshwar",
    description: "Mahabaleshwar is a popular hill station known for strawberry farms, scenic viewpoints, lakes, waterfalls, and pleasant year-round weather."
  },
  {
    title: "Pune",
    description: "Pune is a leading IT, educational, and business hub offering corporate offices, historical attractions, shopping destinations, and vibrant city life."
  },
  {
    title: "Mumbai",
    description: "Mumbai is India's financial capital, known for international airports, business districts, iconic landmarks, shopping centers, and entertainment destinations."
  },
  {
    title: "Bangalore",
    description: "Bangalore is a major technology and business city famous for IT parks, multinational companies, gardens, shopping areas, and modern infrastructure."
  }
],




"services": [
  {
    "name": "Goa to Belgaum Taxi",
    "description": "Book Goa to Belgaum Taxi for comfortable one way and round trip travel with experienced chauffeurs, clean AC Sedan, Ertiga, Innova Crysta, and SUV vehicles. Enjoy fixed fares, doorstep pickup, online booking, luggage assistance, and reliable intercity transportation available 24×7."
  },
  {
    "name": "Goa to Pune Taxi",
    "description": "Reserve Goa to Pune Taxi with transparent pricing, professional drivers, premium AC vehicles, flexible pickup timings, and safe highway travel for business, family, and holiday trips."
  },
  {
    "name": "Goa to Mumbai Taxi",
    "description": "Choose Goa to Mumbai Taxi for reliable long-distance travel with chauffeur-driven vehicles, affordable fares, airport transfers, and comfortable intercity transportation."
  },
  {
    "name": "Goa to Bangalore Taxi",
    "description": "Book Goa to Bangalore Taxi with Sedan, Ertiga, Innova Crysta, and SUV options, fixed pricing, experienced chauffeurs, and smooth outstation journeys."
  },
  {
    "name": "Goa to Hyderabad Taxi",
    "description": "Travel with Goa to Hyderabad Taxi offering spacious vehicles, transparent pricing, online booking, and comfortable long-distance travel."
  },
  {
    "name": "Goa to Kolhapur Taxi",
    "description": "Reserve Goa to Kolhapur Taxi for safe and convenient travel with clean AC vehicles, professional drivers, fixed fares, and timely pickup."
  },
  {
    "name": "Goa to Hubli Taxi",
    "description": "Book Goa to Hubli Taxi with affordable fares, experienced chauffeurs, premium vehicles, and dependable outstation transportation."
  },
  {
    "name": "Goa to Gokarna Taxi",
    "description": "Choose Goa to Gokarna Taxi for beach vacations, sightseeing, family trips, and comfortable chauffeur-driven travel with fixed pricing."
  },
  {
    "name": "Goa to Mahabaleshwar Taxi",
    "description": "Hire Goa to Mahabaleshwar Taxi with premium AC vehicles, professional drivers, transparent pricing, and comfortable hill station travel."
  },
  {
    "name": "Goa Outstation Taxi",
    "description": "Book Goa Outstation Taxi for one way, round trip, airport transfers, business travel, and family vacations with Sedan, Ertiga, Innova Crysta, and SUVs."
  },
  {
    "name": "Cheapest Goa to Belgaum Cab",
    "description": "Find Cheapest Goa to Belgaum Cab with budget-friendly fares, clean AC vehicles, experienced chauffeurs, fixed pricing, and reliable service."
  },
  {
    "name": "Cheapest Goa to Pune Cab",
    "description": "Reserve Cheapest Goa to Pune Cab with economical packages, comfortable vehicles, professional drivers, and no hidden charges."
  },
  {
    "name": "Cheapest Goa to Mumbai Cab",
    "description": "Book Cheapest Goa to Mumbai Cab for affordable intercity travel with AC vehicles, transparent pricing, and dependable chauffeur service."
  },
  {
    "name": "Cheapest Goa to Bangalore Cab",
    "description": "Choose Cheapest Goa to Bangalore Cab with fixed fares, premium vehicles, experienced drivers, and comfortable long-distance transportation."
  },
  {
    "name": "Cheapest Goa to Hyderabad Cab",
    "description": "Travel with Cheapest Goa to Hyderabad Cab offering affordable rates, spacious vehicles, online booking, and reliable customer support."
  },
  {
    "name": "Cheapest Goa to Kolhapur Cab",
    "description": "Book Cheapest Goa to Kolhapur Cab with budget-friendly pricing, clean AC cars, professional chauffeurs, and smooth highway travel."
  },
  {
    "name": "Cheapest Goa to Hubli Cab",
    "description": "Reserve Cheapest Goa to Hubli Cab with economical fares, experienced drivers, fixed pricing, and comfortable travel."
  },
  {
    "name": "Cheapest Goa to Gokarna Cab",
    "description": "Choose Cheapest Goa to Gokarna Cab for affordable beach travel with reliable drivers, AC vehicles, and transparent pricing."
  },
  {
    "name": "Cheapest Goa to Mahabaleshwar Cab",
    "description": "Book Cheapest Goa to Mahabaleshwar Cab with affordable packages, premium vehicles, and experienced chauffeurs for safe hill station travel."
  },
  {
    "name": "Cheapest Goa Outstation Taxi",
    "description": "Hire Cheapest Goa Outstation Taxi with economical fares, fixed pricing, AC vehicles, and dependable chauffeur-driven transportation."
  },
  {
    "name": "Best Cheapest Cab Service in Goa",
    "description": "Experience the Best Cheapest Cab Service in Goa with affordable pricing, premium vehicles, courteous chauffeurs, and excellent customer support."
  },
  {
    "name": "Top Budget Taxi Service Goa",
    "description": "Choose Top Budget Taxi Service Goa for cost-effective local and outstation travel with clean AC vehicles and professional drivers."
  },
  {
    "name": "Affordable Taxi Company Goa",
    "description": "Book Affordable Taxi Company Goa for reliable airport transfers, sightseeing tours, intercity travel, and transparent pricing."
  },
  {
    "name": "Safe Cheap Cab Service Goa",
    "description": "Travel with Safe Cheap Cab Service Goa featuring verified chauffeurs, sanitized vehicles, GPS-enabled rides, and affordable fares."
  },
  {
    "name": "Premium Budget Cab Goa",
    "description": "Reserve Premium Budget Cab Goa with comfortable AC vehicles, fixed rates, experienced chauffeurs, and quality travel at economical prices."
  },
  {
    "name": "Family Taxi Service Goa",
    "description": "Book Family Taxi Service Goa with spacious vehicles, luggage assistance, child-friendly travel, sightseeing tours, and comfortable outstation journeys."
  },
  {
    "name": "Airport Pickup Cab Goa",
    "description": "Choose Airport Pickup Cab Goa for on-time airport pickup and drop, flight tracking, luggage support, professional drivers, and hassle-free transportation."
  },
  {
    "name": "Economy Outstation Taxi Goa",
    "description": "Hire Economy Outstation Taxi Goa for budget-friendly intercity travel with Sedan, Ertiga, Innova Crysta, SUVs, and transparent pricing."
  },
  {
    "name": "Online Taxi Booking Goa Cheap",
    "description": "Complete Online Taxi Booking Goa Cheap with instant confirmation, secure payment, affordable fares, multiple vehicle options, and 24×7 customer assistance."
  }
],

"tableData": [
  ["Goa to Belgaum Taxi", "Goa to Pune Taxi"],
  ["Goa to Mumbai Taxi", "Goa to Bangalore Taxi"],
  ["Goa to Hyderabad Taxi", "Goa to Kolhapur Taxi"],
  ["Goa to Hubli Taxi", "Goa to Gokarna Taxi"],
  ["Goa to Mahabaleshwar Taxi", "Goa Outstation Taxi"],
  ["Cheapest Goa to Belgaum Cab", "Cheapest Goa to Pune Cab"],
  ["Cheapest Goa to Mumbai Cab", "Cheapest Goa to Bangalore Cab"],
  ["Cheapest Goa to Hyderabad Cab", "Cheapest Goa to Kolhapur Cab"],
  ["Cheapest Goa to Hubli Cab", "Cheapest Goa to Gokarna Cab"],
  ["Cheapest Goa to Mahabaleshwar Cab", "Cheapest Goa Outstation Taxi"],
  ["Best Cheapest Cab Service in Goa", "Top Budget Taxi Service Goa"],
  ["Affordable Taxi Company Goa", "Safe Cheap Cab Service Goa"],
  ["Premium Budget Cab Goa", "Family Taxi Service Goa"],
  ["Airport Pickup Cab Goa", "Economy Outstation Taxi Goa"],
  ["Online Taxi Booking Goa Cheap", ""]
],





whychoose: [
  {
    WhyChooseheading: "Professional Taxi Service in Goa",
    WhyChoosedescription: "Belgaum Taxi Service provides reliable taxi services across Goa with comfortable vehicles, experienced chauffeurs, and convenient travel solutions for every occasion."
  },
  {
    WhyChooseheading: "Pickup from Any Location in Goa",
    WhyChoosedescription: "Book taxis from North Goa, South Goa, Dabolim Airport, Mopa Airport, railway stations, hotels, resorts, beaches, and residential locations with ease."
  },
  {
    WhyChooseheading: "Modern Fleet for Every Travel Need",
    WhyChoosedescription: "Travel in Sedan, Ertiga, Innova, Innova Crysta, SUVs, Tempo Travellers, and premium vehicles suitable for solo travelers, families, and groups."
  },
  {
    WhyChooseheading: "Experienced & Courteous Drivers",
    WhyChoosedescription: "Our professional drivers are committed to safe driving, punctual arrivals, and providing a pleasant travel experience throughout Goa."
  },
  {
    WhyChooseheading: "Local, Airport & Outstation Taxi Service",
    WhyChoosedescription: "Whether you need city transportation, airport transfers, sightseeing tours, or outstation travel, our taxi service covers all your travel requirements."
  },
  {
    WhyChooseheading: "Reasonable Fare with Transparent Pricing",
    WhyChoosedescription: "Enjoy competitive taxi fares with upfront quotations, flexible travel options, and no hidden charges."
  },
  {
    WhyChooseheading: "Suitable for Tourists & Corporate Travelers",
    WhyChoosedescription: "Our Goa taxi service is ideal for holidaymakers, business professionals, hotel guests, family outings, and special occasions."
  },
  {
    WhyChooseheading: "24/7 Taxi Booking Availability",
    WhyChoosedescription: "Reserve your taxi anytime with instant confirmation and dedicated customer support for smooth and hassle-free travel."
  }
]

};

const faqData = [
  {
    question: "Does Belgaum Taxi Service provide Taxi Service in Goa?",
    answer: "Yes, Belgaum Taxi Service offers local taxi services, airport transfers, sightseeing cabs, and outstation taxi services throughout Goa."
  },
  {
    question: "Can I book a taxi from anywhere in Goa?",
    answer: "Yes, taxi pickup is available from North Goa, South Goa, hotels, beaches, railway stations, airports, and nearby locations."
  },
  {
    question: "Which vehicles are available for taxi booking in Goa?",
    answer: "Our fleet includes Sedan, Ertiga, Innova, Innova Crysta, SUVs, Tempo Travellers, and premium vehicles for different travel requirements."
  },
  {
    question: "Do you provide airport taxi service in Goa?",
    answer: "Yes, we provide airport pickup and drop services from Dabolim Airport and Manohar International Airport (Mopa)."
  },
  {
    question: "Can I hire a taxi for Goa sightseeing?",
    answer: "Yes, customized sightseeing taxis are available for North Goa, South Goa, beaches, forts, churches, temples, waterfalls, and other attractions."
  },
  {
    question: "Is Taxi Service in Goa available 24 hours?",
    answer: "Yes, our taxi services are available 24/7 for airport transfers, local travel, sightseeing, and outstation journeys."
  },
  {
    question: "Can I book a one-way or round-trip taxi?",
    answer: "Yes, both one-way and round-trip taxi bookings are available based on your travel schedule."
  },
  {
    question: "Are toll, parking, and state taxes included in the fare?",
    answer: "Toll charges, parking fees, state taxes, and other applicable charges are generally billed separately unless specified in the confirmed booking."
  },
  {
    question: "Do you provide outstation taxis from Goa?",
    answer: "Yes, we offer outstation taxi services from Goa to Belgaum, Gokarna, Hubli, Bangalore, Pune, Mumbai, and many other destinations."
  },
  {
    question: "How can I book a Taxi Service in Goa?",
    answer: "Share your pickup location, destination, travel date, passenger details, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Rohan D'Souza",
    feedback: "Our Goa taxi experience was outstanding. The driver knew all the major attractions, the vehicle was spotless, and the entire trip was comfortable and well-organized.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Kavya Shetty",
    feedback: "From airport pickup to sightseeing, every part of the journey was managed professionally. The cab was spacious, the driver was courteous, and the service exceeded our expectations.",
    rating: 5
  }
];






    const Images = [
        { place: "/images/keyword/1.jpg", text: "Cab Service in Belgaum", link: "Cab-Service-in-Belgaum" },
        { place: "/images/keyword/2.jpg", text: "Belgaum Taxi Service", link: "Belgaum-Taxi-Service" },
        { place: "/images/keyword/3.jpg", text: "Belgaum to Goa Cab", link: "Belgaum-to-Goa-Cab" },
        { place: "/images/keyword/4.jpg", text: "Belgaum to Mahabaleshwar Cab", link: "Belgaum-to-Mahabaleshwar-Cab" },
        { place: "/images/keyword/5.jpg", text: "Belgaum to Kerala Cab Service", link: "Belgaum-to-Kerala-Cab-Service" },
        { place: "/images/keyword/6.jpg", text: "Goa to Belgaum Cab", link: "Goa-to-Belgaum-Cab" },
        { place: "/images/keyword/7.jpg", text: "Belgaum to Mumbai Cab", link: "Belgaum-to-Mumbai-Cab" },
        { place: "/images/keyword/8.jpg", text: "Belgaum to Bangalore Cab", link: "Belgaum-to-Bangalore-Cab" },
        { place: "/images/keyword/9.jpg", text: "Goa Cab Service", link: "Goa-Cab-Service" },
        { place: "/images/keyword/10.jpg", text: "Taxi Service in Goa", link: "Taxi-Service-in-Goa" },
        { place: "/images/keyword/11.jpg", text: "Cheapest Cab Service in Goa", link: "Cheapest-Cab-Service-in-Goa" },
        { place: "/images/keyword/12.jpg", text: "Corporate Cab Services in Belgaum", link: "Corporate-Cab-Services-in-Belgaum" },
        { place: "/images/keyword/13.jpg", text: "Innova Crysta Rent in Belgaum", link: "Innova-Crysta-Rent-in-Belgaum" },
        { place: "/images/keyword/14.jpg", text: "Ertiga on Rent in Belgaum", link: "Ertiga-on-Rent-in-Belgaum" },
        { place: "/images/keyword/15.jpg", text: "Tempo Traveller Rent in Belgaum", link: "Tempo-Traveller-Rent-in-Belgaum" },
        { place: "/images/keyword/16.jpg", text: "Mini Bus Rental Belgaum", link: "Mini-Bus-Rental-Belgaum" },
        { place: "/images/keyword/17.jpg", text: "Swift Dzire on Rent in Belgaum", link: "Swift-Dzire-on-Rent-in-Belgaum" },
        { place: "/images/keyword/18.jpg", text: "Urbania on Rent in Belgaum", link: "Urbania-on-Rent-in-Belgaum" },
        { place: "/images/keyword/19.jpg", text: "Wedding Car Rental in Belgaum", link: "Wedding-Car-Rental-in-Belgaum" },
        { place: "/images/keyword/20.jpg", text: "Cabs in Belgaum", link: "Cabs-in-Belgaum" },
        { place: "/images/keyword/21.jpg", text: "Belgaum to Hubli Cab", link: "Belgaum-to-Hubli-Cab" },
        { place: "/images/keyword/22.jpg", text: "Belgaum to Dharwad Cab", link: "Belgaum-to-Dharwad-Cab" },
        { place: "/images/keyword/23.jpg", text: "Belgaum to Kolhapur Cab", link: "Belgaum-to-Kolhapur-Cab" },
        { place: "/images/keyword/24.jpg", text: "Belgaum Airport Cab Service", link: "Belgaum-Airport-Cab-Service" },
        { place: "/images/keyword/25.jpg", text: "Belgaum to Bagalkot Cab", link: "Belgaum-to-Bagalkot-Cab" },
    ];










const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Taxi Service in Goa",
  "image": "https://www.belgaumtaxiservice.com/assets/images/taxi-service-in-goa.webp",
  "description":
    "Book Taxi Service in Goa with Belgaum Taxi Service for safe, comfortable, and affordable taxi services. We provide Goa outstation taxis, airport transfers, and one-way cab services from Goa to Belgaum, Pune, Mumbai, Bangalore, Hyderabad, Kolhapur, Hubli, Gokarna, and Mahabaleshwar with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Belgaum Taxi Service"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "8517"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.belgaumtaxiservice.com/taxi-service-in-goa"
  }
};




    return (
        <div>


<Helmet>
  <title>Taxi Service in Goa | Outstation Cab Booking | +91 8722158435</title>

  <meta
    name="description"
    content="Book Taxi Service in Goa with Belgaum Taxi Service for reliable local and outstation taxi services. Get affordable cabs from Goa to Belgaum, Pune, Mumbai, Bangalore, Hyderabad, Kolhapur, Hubli, Gokarna, and Mahabaleshwar with Sedan, Ertiga, SUV, Innova, and Innova Crysta available 24x7."
  />

  <meta
    name="keywords"
    content="Goa to Belgaum Taxi, Goa to Pune Taxi, Goa to Mumbai Taxi, Goa to Bangalore Taxi, Goa to Hyderabad Taxi, Goa to Kolhapur Taxi, Goa to Hubli Taxi, Goa to Gokarna Taxi, Goa to Mahabaleshwar Taxi, Goa Outstation Taxi, Cheapest Goa to Belgaum Cab, Cheapest Goa to Pune Cab, Cheapest Goa to Mumbai Cab, Cheapest Goa to Bangalore Cab, Taxi Service in Goa, Goa Outstation Cab Service"
  />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>





            <div className="page-headder bg-section parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header-box text-white">
                                <h1 className="text-anime-style-3 text-center text-white">
                                    {cardData.keyword}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>













            <section>
                <div className="container-fluid p-0" >
                    <div className="row container-fluid px-md-2">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keyword/10.jpg' alt='img' className='img-fluid' />
                            <h3 className="py-1"
                                style={{
                                    color: '#183765', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >Belgaum Taxi Service: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>

                            <div className="topPlaces">

                                <p className="sectionLead">Top Places to visit from {cardData.keyword} </p>
                                {cardData.topPlaces.map((place, index) => (
                                    <article key={index} className="placeCard borderr" tabIndex="0">
                                        <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                                        <div className="placeBody">
                                            <h4 className="placeTitle">{place.title}</h4>
                                            <p className="placeDesc">{place.description}</p>

                                        </div>

                                        <span className="placeArrow" aria-hidden>›</span>
                                    </article>
                                ))}
                            </div>


                            {/* <div className="services-section">
                {cardData.services.map((service, index) => (
                  <div key={index} className="service-row">
                  
                    <div>
                      <h4 className="service-title">{service.name}</h4>
                      <p className="service-desc">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div> */}


                            <div className="services-section">
                                {cardData.services.map((service, index) => (
                                    <div className="service-card" key={index}>
                                        <div className="service-content">
                                            <h4>{service.name}</h4>
                                            <span className="line"></span>
                                            <p>{service.description}</p>
                                        </div>

                                        <div className="service-icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="keyword-grid">
                                {cardData.tableData.flat().map((keyword, index) => (
                                    <div key={index} className="keyword-item">
                                        <span className="keyword-bullet">-</span>
                                        {keyword}
                                    </div>
                                ))}
                            </div>



                            <div id="why-choose-section" className="why-choose-section">

                                <h2 className="section-title text-dark">
                                    Why Choose <span>Belgaum Taxi Service</span>
                                </h2>

                                <div className="bento-grid">
                                    {cardData.whychoose.map((item, index) => (
                                        <div className="bento-card" key={index}>

                                            <div className="bento-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            <h4>{item.WhyChooseheading}</h4>

                                            <p>{item.WhyChoosedescription}</p>

                                        </div>
                                    ))}
                                </div>

                            </div>



                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Belgaum Taxi Service </h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">

                                                <FaqSection
                                                    title=""
                                                    subtitle=""
                                                    items={faqData}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <TestimonialSectionKeyword
                                testimonials={testimonials}
                            />


                            <ContactShowcase keyword={cardData.keyword} />
                        </div>

                        <div className='col-12 col-md-4' >
                            <div className="routeList">
                                {Images.map((e, i) => {
                                    const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                                    const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                                    return (
                                        <a
                                            key={e.link || i}
                                            href={href}
                                            className="routeItem"
                                            aria-label={e.text}
                                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            <div className="routeThumb">
                                                <img src={e.place} alt="" loading="lazy" />
                                            </div>

                                            <div className="routeMeta">
                                                <h6 className="routeTitle">{e.text}</h6>
                                                <span className="routeUnderline" />
                                            </div>

                                            <span className="routeArrow" aria-hidden>›</span>
                                        </a>
                                    );
                                })}
                            </div>




                            <div>
                                <FleetHighway />
                            </div>
                            <div className="pc-contact">
                                <h4 className="pc-title">Contact Information</h4>

                                <div className="pc-grid">
                                    {/* Phones */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fas fa-phone-alt"></i>
                                            <span>Phone Numbers</span>
                                        </header>

                                        <div className="pc-list">
                                            <a href="tel:+918722158435 " className="pc-call">+91 8722158435 </a>
                                        </div>

                                        <div className="pc-cta">
                                            <a
                                                href="https://wa.me/918722158435 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pc-whats"
                                            >
                                                <i className="bi bi-whatsapp"></i> WhatsApp
                                            </a>
                                            <a href="tel:+918722158435 " className="pc-primary">
                                                Call Now
                                            </a>
                                        </div>
                                    </section>

                                    {/* Email */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-envelope"></i>
                                            <span>Email</span>
                                        </header>

                                        <a href="mailto:booking@belgaumtaxiservice.com" className="pc-email">
                                            booking@belgaumtaxiservice.com
                                        </a>
                                    </section>

                                    {/* Address */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Address</span>
                                        </header>

                                        <address className="pc-address">
                                            <strong>Belgaum Taxi Service</strong><br />
                                            P No 30 cCTS No 7023,
                                            Sector No 9 Malmaruti Anjaneya Nagar,
                                            Belgaum, Karnataka - 590017




                                        </address>
                                    </section>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Taxiserviceingoa;