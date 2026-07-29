import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Belgaumtaxiservice() {



    const cardData = {


keyword: "Belgaum Taxi Service",

headingDescription: "Belgaum Taxi Service is a trusted provider of reliable, safe, and affordable taxi services in Belgaum for local travel, airport transfers, railway station pickups, corporate transportation, family outings, hotel transfers, sightseeing tours, and outstation journeys. Whether you need a one-way cab, round-trip taxi, full-day cab rental, airport pickup, business travel, or customized outstation package, we offer flexible travel solutions to suit every requirement. Our fleet includes comfortable Sedan cars, Ertiga, SUVs, Innova, Innova Crysta, Tempo Travellers, and premium vehicles for individuals, families, corporate teams, and group travel. Every trip is handled by experienced chauffeurs who focus on punctuality, safety, and customer satisfaction. With transparent pricing, doorstep pickup, well-maintained vehicles, easy online booking, flexible travel schedules, and 24/7 customer support, Belgaum Taxi Service has become a preferred choice for travelers looking for dependable taxi services in and around Belgaum. We also provide comfortable cab services to popular destinations including Goa, Dandeli, Gokarna, Hubballi, Dharwad, Kolhapur, Bengaluru, Pune, Mumbai, and many other cities across Karnataka, Maharashtra, and Goa.",

topPlaces: [
  {
    title: "Belagavi Airport",
    description: "Belagavi Airport is one of the busiest travel hubs in North Karnataka, serving business and leisure travelers. Belgaum Taxi Service provides convenient airport pickup and drop services with timely arrivals and comfortable vehicles."
  },
  {
    title: "Belagavi Railway Station",
    description: "Belagavi Railway Station connects the city with major destinations across India. Taxi services are available for railway transfers, hotel pickups, local travel, and onward outstation journeys."
  },
  {
    title: "Udyambag Industrial Area",
    description: "Udyambag is a leading industrial estate in Belgaum, home to engineering companies, manufacturing units, foundries, and commercial businesses. It is a frequent destination for corporate and industrial travel."
  },
  {
    title: "Tilakwadi",
    description: "Tilakwadi is one of Belgaum's prime residential and commercial localities, featuring educational institutions, restaurants, shopping areas, hospitals, and business establishments."
  },
  {
    title: "Goa",
    description: "Goa is one of the most popular destinations from Belgaum, known for its beaches, resorts, churches, water sports, and vibrant nightlife. Belgaum Taxi Service offers comfortable one-way and round-trip taxi services to Goa."
  },
  {
    title: "Dandeli",
    description: "Dandeli is a renowned adventure destination famous for river rafting, wildlife sanctuary, jungle safaris, trekking, and nature tourism. It is a popular weekend getaway from Belgaum."
  },
  {
    title: "Gokarna",
    description: "Gokarna is a scenic coastal town known for Om Beach, Kudle Beach, Mahabaleshwar Temple, and peaceful seaside landscapes. It is a preferred destination for family holidays and beach vacations."
  },
  {
    title: "Amboli",
    description: "Amboli is a beautiful hill station near Belgaum, famous for waterfalls, lush green forests, viewpoints, and pleasant weather. It is an ideal destination for monsoon drives and weekend trips."
  },
  {
    title: "Kolhapur",
    description: "Kolhapur is a historic city known for the Mahalaxmi Temple, shopping, rich cultural heritage, and delicious cuisine. It is one of the most frequently traveled routes from Belgaum."
  },
  {
    title: "Hubballi",
    description: "Hubballi is a major commercial, educational, and business hub in Karnataka with excellent road connectivity from Belgaum. It is a preferred destination for corporate, medical, and personal travel."
  }
],





"services": [
  {
    "name": "Belgaum Taxi Service Belagavi",
    "description": "Book Belgaum Taxi Service Belagavi for reliable local and outstation travel with professional drivers, clean AC Sedan, Ertiga, Innova Crysta, and SUV cabs. Enjoy affordable fares, doorstep pickup, online booking, airport transfers, corporate travel, family trips, sightseeing tours, and 24x7 customer support."
  },
  {
    "name": "Belgaum Taxi Service",
    "description": "Choose Belgaum Taxi Service for safe, comfortable, and affordable transportation with experienced chauffeurs, fixed pricing, well-maintained vehicles, local sightseeing, airport transfers, and outstation journeys across Karnataka, Goa, and Maharashtra."
  },
  {
    "name": "Belgaum Taxi",
    "description": "Hire a Belgaum Taxi for business travel, family outings, airport pickup, railway station transfers, and outstation trips with clean vehicles, punctual service, and transparent pricing."
  },
  {
    "name": "Cab in Belgaum",
    "description": "Book a Cab in Belgaum with instant confirmation, professional drivers, AC vehicles, flexible pickup timings, and comfortable travel for local, airport, and outstation requirements."
  },
  {
    "name": "Taxi Booking in Belgaum",
    "description": "Complete Taxi Booking in Belgaum online with quick confirmation, affordable fares, multiple vehicle choices, secure reservations, and reliable chauffeur-driven cab services."
  },
  {
    "name": "Taxi in Belgaum",
    "description": "Reserve a Taxi in Belgaum for local rides, business meetings, airport transfers, railway station pickups, and comfortable outstation travel with experienced drivers."
  },
  {
    "name": "Belgaum Cab Service",
    "description": "Belgaum Cab Service offers Sedan, Ertiga, Innova Crysta, SUV, and premium vehicles for local travel, airport pickup, corporate transportation, and long-distance journeys with fixed fares."
  },
  {
    "name": "Taxi Service in Belgaum",
    "description": "Book Taxi Service in Belgaum for dependable transportation with sanitized vehicles, courteous chauffeurs, affordable pricing, luggage assistance, and 24x7 availability."
  },
  {
    "name": "Cab Service in Belgaum",
    "description": "Choose Cab Service in Belgaum for convenient city rides, airport transfers, family travel, corporate bookings, and outstation trips with professional drivers and comfortable vehicles."
  },
  {
    "name": "Best Taxi Service in Belgaum",
    "description": "Experience the Best Taxi Service in Belgaum with premium vehicles, verified chauffeurs, transparent fares, timely pickups, and excellent customer support for every journey."
  },
  {
    "name": "Best Cab Service in Belgaum",
    "description": "Hire the Best Cab Service in Belgaum offering clean AC cars, luxury SUVs, affordable pricing, airport transfers, business travel, and safe outstation cab services."
  },
  {
    "name": "Online Taxi Booking Belgaum",
    "description": "Make Online Taxi Booking Belgaum with instant confirmation, easy reservations, secure payments, multiple vehicle options, and professional chauffeur-driven service."
  },
  {
    "name": "Online Cab Booking Belgaum",
    "description": "Reserve Online Cab Booking Belgaum for quick booking, fixed fares, AC vehicles, airport transfers, local travel, and outstation transportation."
  },
  {
    "name": "Belgaum Taxi Booking",
    "description": "Belgaum Taxi Booking provides reliable transportation with Sedan, Ertiga, Innova Crysta, SUV, and luxury vehicles for local and intercity travel."
  },
  {
    "name": "Belgaum Cab Booking",
    "description": "Book Belgaum Cab Booking online with transparent pricing, experienced chauffeurs, doorstep pickup, and comfortable rides for airport, railway station, and outstation travel."
  },
  {
    "name": "Local Taxi Service Belgaum",
    "description": "Choose Local Taxi Service Belgaum for shopping trips, office travel, sightseeing, railway station pickup, airport transfers, and daily transportation with affordable fares."
  },
  {
    "name": "Local Cab Service Belgaum",
    "description": "Hire Local Cab Service Belgaum with flexible hourly packages, clean vehicles, experienced drivers, and comfortable travel for city rides and nearby destinations."
  },
  {
    "name": "Outstation Taxi Service Belgaum",
    "description": "Book Outstation Taxi Service Belgaum for Goa, Dandeli, Hubli, Pune, Kolhapur, Bangalore, and other destinations with fixed pricing and reliable chauffeur-driven vehicles."
  },
  {
    "name": "Outstation Cab Service Belgaum",
    "description": "Reserve Outstation Cab Service Belgaum for one way and round trip journeys with AC cars, experienced drivers, transparent fares, and premium travel comfort."
  },
  {
    "name": "Airport Taxi Service Belgaum",
    "description": "Airport Taxi Service Belgaum offers timely airport pickup and drop, flight tracking, luggage assistance, clean vehicles, and professional drivers for stress-free airport transfers."
  },
  {
    "name": "Belgaum Airport Cab",
    "description": "Book Belgaum Airport Cab with punctual pickup, fixed fares, spacious luggage capacity, and comfortable airport transportation available 24x7."
  },
  {
    "name": "Belgaum Airport Taxi",
    "description": "Hire Belgaum Airport Taxi for reliable airport transfers with AC vehicles, experienced chauffeurs, online booking, and affordable pricing."
  },
  {
    "name": "One Way Taxi Service Belgaum",
    "description": "Choose One Way Taxi Service Belgaum for affordable intercity travel with fixed fares, professional drivers, clean vehicles, and comfortable long-distance rides."
  },
  {
    "name": "One Way Cab Service Belgaum",
    "description": "Book One Way Cab Service Belgaum with instant confirmation, doorstep pickup, transparent pricing, and comfortable Sedan, Ertiga, and Innova Crysta vehicles."
  },
  {
    "name": "Round Trip Taxi Belgaum",
    "description": "Reserve Round Trip Taxi Belgaum with flexible return schedules, affordable packages, premium vehicles, and reliable chauffeur-driven transportation."
  },
  {
    "name": "Car Rental in Belgaum",
    "description": "Hire Car Rental in Belgaum for local travel, corporate use, weddings, airport transfers, sightseeing, and outstation journeys with Sedan, SUV, Ertiga, and Innova Crysta options."
  },
  {
    "name": "Innova Crysta Taxi Belgaum",
    "description": "Book Innova Crysta Taxi Belgaum for luxury travel, airport transfers, business trips, family tours, spacious seating, and premium outstation transportation."
  },
  {
    "name": "Ertiga Cab Belgaum",
    "description": "Reserve Ertiga Cab Belgaum for comfortable six-seater travel, airport pickup, group tours, family vacations, and affordable outstation journeys."
  },
  {
    "name": "Sedan Taxi Belgaum",
    "description": "Choose Sedan Taxi Belgaum for economical airport transfers, local travel, business meetings, and comfortable outstation rides with professional chauffeurs."
  },
  {
    "name": "SUV Cab Service Belgaum",
    "description": "Book SUV Cab Service Belgaum for family trips, corporate travel, sightseeing, airport transfers, and long-distance journeys with spacious premium vehicles."
  },
  {
    "name": "Corporate Taxi Service Belgaum",
    "description": "Corporate Taxi Service Belgaum provides executive transportation, employee travel, airport transfers, business meetings, and dedicated corporate cab solutions with professional chauffeurs."
  },
  {
    "name": "Private Taxi Service Belgaum",
    "description": "Hire Private Taxi Service Belgaum for exclusive chauffeur-driven travel with privacy, flexible schedules, premium comfort, and personalized transportation."
  },
  {
    "name": "Cheap Taxi Service Belgaum",
    "description": "Book Cheap Taxi Service Belgaum with budget-friendly fares, AC vehicles, experienced drivers, transparent pricing, and dependable local and outstation travel."
  },
  {
    "name": "24/7 Taxi Service Belgaum",
    "description": "Choose 24/7 Taxi Service Belgaum for round-the-clock airport pickups, railway station transfers, emergency travel, and outstation cab bookings with instant availability."
  },
  {
    "name": "Luxury Car Rental Belgaum",
    "description": "Reserve Luxury Car Rental Belgaum for VIP travel, corporate events, weddings, airport transfers, premium chauffeur-driven vehicles, and luxury outstation journeys."
  }
],

"tableData": [
  ["Belgaum Taxi Service Belagavi", "Belgaum Taxi Service"],
  ["Belgaum Taxi", "Cab in Belgaum"],
  ["Taxi Booking in Belgaum", "Taxi in Belgaum"],
  ["Belgaum Cab Service", "Taxi Service in Belgaum"],
  ["Cab Service in Belgaum", "Best Taxi Service in Belgaum"],
  ["Best Cab Service in Belgaum", "Online Taxi Booking Belgaum"],
  ["Online Cab Booking Belgaum", "Belgaum Taxi Booking"],
  ["Belgaum Cab Booking", "Local Taxi Service Belgaum"],
  ["Local Cab Service Belgaum", "Outstation Taxi Service Belgaum"],
  ["Outstation Cab Service Belgaum", "Airport Taxi Service Belgaum"],
  ["Belgaum Airport Cab", "Belgaum Airport Taxi"],
  ["One Way Taxi Service Belgaum", "One Way Cab Service Belgaum"],
  ["Round Trip Taxi Belgaum", "Car Rental in Belgaum"],
  ["Innova Crysta Taxi Belgaum", "Ertiga Cab Belgaum"],
  ["Sedan Taxi Belgaum", "SUV Cab Service Belgaum"],
  ["Corporate Taxi Service Belgaum", "Private Taxi Service Belgaum"],
  ["Cheap Taxi Service Belgaum", "24/7 Taxi Service Belgaum"],
  ["Luxury Car Rental Belgaum", ""]
],





whychoose: [
  {
    WhyChooseheading: "Reliable Belgaum Taxi Service",
    WhyChoosedescription: "Belgaum Taxi Service delivers dependable taxi solutions with experienced drivers, clean vehicles, and comfortable rides for local, airport, and outstation travel."
  },
  {
    WhyChooseheading: "Extensive Fleet for Every Journey",
    WhyChoosedescription: "Select from Sedan, Ertiga, Innova, Innova Crysta, SUVs, Tempo Travellers, and premium vehicles suitable for solo travelers, families, and corporate groups."
  },
  {
    WhyChooseheading: "Convenient Pickup Across Belgaum",
    WhyChoosedescription: "Enjoy hassle-free pickup from Belgaum Airport, Belgaum Railway Station, hotels, homes, offices, and nearby locations with timely service."
  },
  {
    WhyChooseheading: "Professional & Experienced Chauffeurs",
    WhyChoosedescription: "Our courteous drivers focus on passenger safety, punctuality, and a smooth travel experience on every trip."
  },
  {
    WhyChooseheading: "Local, Airport & Outstation Taxi Services",
    WhyChoosedescription: "Travel comfortably within Belgaum or book taxis to Goa, Hubli, Bangalore, Pune, Dandeli, Gokarna, and other popular destinations."
  },
  {
    WhyChooseheading: "Affordable Fares with Transparent Pricing",
    WhyChoosedescription: "Benefit from competitive taxi rates with upfront pricing, flexible travel options, and no hidden charges."
  },
  {
    WhyChooseheading: "Clean & Well-Maintained Vehicles",
    WhyChoosedescription: "Every taxi is regularly inspected, sanitized, and maintained to provide a safe, reliable, and comfortable journey."
  },
  {
    WhyChooseheading: "24/7 Taxi Booking Support",
    WhyChoosedescription: "Book your Belgaum taxi anytime with quick confirmations and dedicated customer assistance throughout your journey."
  }
]

};

const faqData = [
  {
    question: "Does Belgaum Taxi Service provide local and outstation taxi services?",
    answer: "Yes, Belgaum Taxi Service offers local city rides, airport transfers, railway station pickups, and outstation taxi services to multiple destinations."
  },
  {
    question: "Can I book a one-way taxi in Belgaum?",
    answer: "Yes, one-way taxi services are available for both local travel and outstation routes."
  },
  {
    question: "Which vehicles are available for booking?",
    answer: "Our fleet includes Sedan, Ertiga, Innova, Innova Crysta, SUVs, Tempo Travellers, and premium vehicles for different travel requirements."
  },
  {
    question: "Do you provide Belgaum Airport taxi service?",
    answer: "Yes, we offer timely airport pickup and drop services to and from Belgaum Airport."
  },
  {
    question: "Is Belgaum Taxi Service available 24/7?",
    answer: "Yes, our taxi services are available 24 hours a day for local, airport, and outstation travel."
  },
  {
    question: "Can I hire a taxi for Goa, Hubli, Bangalore, and Pune?",
    answer: "Yes, we provide comfortable taxi services from Belgaum to Goa, Hubli, Bangalore, Pune, Dandeli, Gokarna, and many other destinations."
  },
  {
    question: "Do you offer round-trip taxi services?",
    answer: "Yes, both one-way and round-trip taxi bookings are available according to your travel plans."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless mentioned in the confirmed booking."
  },
  {
    question: "Can I book taxis for corporate and family travel?",
    answer: "Yes, our taxi services are suitable for business trips, family vacations, sightseeing tours, airport transfers, and special occasions."
  },
  {
    question: "How can I book Belgaum Taxi Service?",
    answer: "Share your pickup location, destination, travel date, preferred vehicle, and passenger details to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Vinay Desai",
    feedback: "Belgaum Taxi Service provided a comfortable and punctual ride for our outstation journey. The vehicle was spotless, and the driver ensured a safe and pleasant experience throughout the trip.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Shweta Patil",
    feedback: "Our airport transfer was managed perfectly from start to finish. The booking was quick, the taxi arrived on time, and the driver was friendly and professional.",
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
  "name": "Belgaum Taxi Service",
  "image": "https://www.belgaumtaxiservice.com/assets/images/belgaum-taxi-service.webp",
  "description":
    "Book Belgaum Taxi Service with Belgaum Taxi Service for reliable, safe, and affordable taxi solutions. We provide local taxi, airport taxi, outstation cab, and online taxi booking services in Belgaum with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7.",
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
    "url": "https://www.belgaumtaxiservice.com/belgaum-taxi-service"
  }
};








    return (
        <div>

<Helmet>
  <title>Belgaum Taxi Service | Best Cab Booking | +91 8722158435</title>

  <meta
    name="description"
    content="Book Belgaum Taxi Service for safe and affordable local, airport, and outstation cab services in Belgaum. Get reliable taxi booking with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7 for all travel needs."
  />

  <meta
    name="keywords"
    content="belgaum taxi service belagavi, belgaum taxi service, belgaum taxi, cab in belgaum, taxi booking in belgaum, Taxi in belgaum, Belgaum Taxi Service, Belgaum Cab Service, Taxi Service in Belgaum, Cab Service in Belgaum, Best Taxi Service in Belgaum, Best Cab Service in Belgaum, Online Taxi Booking Belgaum, Online Cab Booking Belgaum, Belgaum Taxi Booking, Belgaum Cab Booking, Local Taxi Service Belgaum, Local Cab Service Belgaum"
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
                <div className="container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keyword/.jpg' alt='img' className='img-fluid' />
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

                                <h2 className="section-title text-white">
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

export default Belgaumtaxiservice;