import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabsinbelgaum() {



    const cardData = {




keyword: "Cabs in Belgaum",

headingDescription: "Belgaum Taxi Service offers reliable and comfortable cabs in Belgaum for local travel, airport transfers, railway station pickups, corporate transportation, family trips, sightseeing, and outstation journeys. We provide a wide range of vehicles including Sedan, Ertiga, Innova, Innova Crysta, Tempo Traveller, and premium cars to meet different travel requirements. Whether you need a cab for daily travel, business meetings, airport pickup, hotel transfers, one-way trips, round trips, or long-distance travel, our professional drivers ensure a safe and smooth journey. Belgaum Taxi Service focuses on punctual service, clean vehicles, transparent pricing, easy booking, doorstep pickup, and 24/7 customer assistance. Our cabs are available for travel across Belgaum city and popular destinations in Karnataka, Goa, Maharashtra, and nearby states, making us a convenient choice for individuals, families, corporate travelers, and tourists.",

topPlaces: [
  {
    title: "Pune",
    description: "Pune is a major IT, education, and business hub in Maharashtra. Cab services from Belgaum to Pune are preferred by travelers for corporate meetings, airport transfers, family visits, and long-distance journeys."
  },
  {
    title: "Mumbai",
    description: "Mumbai is India's financial capital and a popular destination for business and personal travel. Comfortable cabs from Belgaum to Mumbai are available for airport transfers, corporate trips, and family journeys."
  },
  {
    title: "Bangalore",
    description: "Bangalore is India's leading technology city with IT parks, corporate offices, and commercial centers. Belgaum to Bangalore cab services are popular among business travelers and families."
  },
  {
    title: "Goa",
    description: "Goa is a famous holiday destination known for beaches, resorts, churches, and sightseeing attractions. Travelers prefer private cabs from Belgaum for comfortable Goa trips."
  },
  {
    title: "Kolhapur",
    description: "Kolhapur is an important city in Maharashtra known for business activities, temples, shopping, and cultural heritage. It is a frequently traveled route from Belgaum."
  },
  {
    title: "Hubballi",
    description: "Hubballi is a major commercial city in Karnataka with business, educational, and healthcare facilities. Cab services provide convenient connectivity from Belgaum."
  },
  {
    title: "Hyderabad",
    description: "Hyderabad is a major IT and business destination known for technology parks, corporate offices, and tourism attractions. Long-distance cab services connect Belgaum with Hyderabad."
  },
  {
    title: "Chennai",
    description: "Chennai is an important industrial and business city in South India. Cab rentals are suitable for travelers planning comfortable interstate journeys from Belgaum."
  }
],




  "services": [
    {
      "name": "Taxi in Belgaum",
      "description": "Book Taxi in Belgaum for safe, comfortable, and reliable local and outstation travel with professional chauffeurs and well-maintained AC vehicles. Get Sedan, Ertiga, Innova Crysta, SUV, and premium cab options for airport transfers, family trips, business travel, sightseeing, and long-distance journeys with flexible booking options."
    },
    {
      "name": "Cab Service in Belgaum",
      "description": "Choose Cab Service in Belgaum for affordable and convenient transportation solutions with experienced drivers, clean vehicles, transparent pricing, doorstep pickup, and 24x7 customer support. Our cab services are suitable for local rides, corporate travel, airport transfers, and outstation trips."
    },
    {
      "name": "Taxi Service in Belgaum",
      "description": "Hire Taxi Service in Belgaum for comfortable city travel, airport transportation, and outstation journeys. Enjoy reliable chauffeur-driven cabs, fixed fares, multiple vehicle categories, and hassle-free travel experiences for individuals, families, and corporate customers."
    },
    {
      "name": "Belgaum Cabs",
      "description": "Book Belgaum Cabs for smooth and convenient travel across the city and nearby destinations. Choose from Sedan, SUV, Ertiga, and Innova Crysta cabs with professional drivers, affordable rates, online booking facilities, and flexible one way or round trip options."
    },
    {
      "name": "Belgaum Taxi",
      "description": "Reserve Belgaum Taxi for reliable transportation with comfortable seating, sanitized vehicles, and experienced chauffeurs. Whether you need local rides, airport pickup, business travel, or outstation taxi services, we provide safe and timely travel solutions."
    },
    {
      "name": "Best Cabs in Belgaum",
      "description": "Choose the Best Cabs in Belgaum offering premium vehicles, skilled drivers, competitive pricing, and dependable service. Our fleet is ideal for airport transfers, family vacations, corporate travel, weddings, and long-distance routes from Belgaum."
    },
    {
      "name": "Best Taxi in Belgaum",
      "description": "Book the Best Taxi in Belgaum for comfortable journeys with professional chauffeurs, well-maintained cars, affordable fares, and quick booking assistance. Experience reliable transportation for local and outstation travel requirements."
    },
    {
      "name": "Online Cab Booking Belgaum",
      "description": "Complete Online Cab Booking in Belgaum with easy reservations, instant confirmation, flexible pickup locations, and multiple vehicle choices. Get convenient taxi booking services for airport rides, city travel, and outstation destinations."
    },
    {
      "name": "Online Taxi Booking Belgaum",
      "description": "Book Online Taxi Booking Belgaum services with simple booking procedures, transparent pricing, and professional drivers. Enjoy comfortable travel with Sedan, SUV, Ertiga, and Innova Crysta vehicles available for different travel needs."
    },
    {
      "name": "Outstation Cabs in Belgaum",
      "description": "Hire Outstation Cabs in Belgaum for safe and comfortable long-distance travel. Our outstation taxi services include one way cabs, round trips, family travel, corporate journeys, and customized travel packages with experienced drivers."
    },
    {
      "name": "Outstation Taxi Service Belgaum",
      "description": "Choose Outstation Taxi Service Belgaum for reliable intercity transportation with clean AC cars, fixed fares, flexible schedules, and professional chauffeurs. Travel comfortably from Belgaum to major destinations with complete convenience."
    },
    {
      "name": "Airport Cabs in Belgaum",
      "description": "Book Airport Cabs in Belgaum for timely airport pickup and drop services with experienced drivers and comfortable vehicles. Enjoy smooth airport transfers with Sedan, Ertiga, Innova Crysta, and SUV cab options."
    },
    {
      "name": "Belgaum Airport Cab",
      "description": "Reserve Belgaum Airport Cab for reliable airport transportation with punctual pickup, clean vehicles, and professional chauffeurs. Our airport taxi services ensure comfortable travel for passengers, families, and business travelers."
    },
    {
      "name": "Belgaum Airport Taxi",
      "description": "Choose Belgaum Airport Taxi for affordable and convenient airport transfers. Get doorstep pickup, flight schedule assistance, comfortable seating, and 24x7 cab availability for hassle-free airport travel."
    },
    {
      "name": "One Way Cab Belgaum",
      "description": "Book One Way Cab Belgaum for economical single-trip travel without return charges. Enjoy fixed pricing, comfortable AC vehicles, professional drivers, and doorstep pickup for intercity travel."
    },
    {
      "name": "Round Trip Cab Belgaum",
      "description": "Hire Round Trip Cab Belgaum for flexible return journeys with affordable packages and experienced chauffeurs. Perfect for family trips, business travel, sightseeing tours, and weekend getaways."
    },
    {
      "name": "Innova Crysta Cab Belgaum",
      "description": "Book Innova Crysta Cab Belgaum for premium and spacious travel with luxury seating, large luggage capacity, and experienced drivers. Ideal for airport transfers, corporate trips, family tours, and outstation journeys."
    },
    {
      "name": "Ertiga Cab Belgaum",
      "description": "Choose Ertiga Cab Belgaum for comfortable 6 to 7 seater travel with affordable pricing and spacious interiors. Perfect for family trips, airport transfers, corporate travel, and outstation routes."
    },
    {
      "name": "Sedan Cab Belgaum",
      "description": "Book Sedan Cab Belgaum for economical and comfortable travel with clean AC vehicles and professional chauffeurs. Suitable for business meetings, airport transfers, local rides, and long-distance journeys."
    },
    {
      "name": "Corporate Cab Service Belgaum",
      "description": "Get Corporate Cab Service Belgaum for employee transportation, business meetings, office travel, and executive journeys. We provide reliable fleet solutions with professional drivers and customized travel plans."
    },
    {
      "name": "Cheap Cabs in Belgaum",
      "description": "Find Cheap Cabs in Belgaum with affordable fares, quality vehicles, and reliable chauffeur services. Enjoy budget-friendly transportation without compromising safety, comfort, and service quality."
    },
    {
      "name": "Luxury Cab Service Belgaum",
      "description": "Experience Luxury Cab Service Belgaum with premium vehicles, executive-class comfort, and professional chauffeurs. Ideal for corporate travel, weddings, VIP transportation, and special occasions."
    },
    {
      "name": "Cab Hire in Belgaum",
      "description": "Hire Cab in Belgaum for flexible rental options including local travel, airport transfers, outstation trips, and special events. Choose from multiple vehicle categories with reliable driver services."
    },
    {
      "name": "Belgaum to Goa Cab",
      "description": "Book Belgaum to Goa Cab for a comfortable journey with experienced drivers, AC vehicles, and flexible one way or round trip options. Travel conveniently to North Goa, South Goa, and Goa Airport."
    },
    {
      "name": "Belgaum to Bangalore Cab",
      "description": "Reserve Belgaum to Bangalore Cab for safe and convenient intercity travel. Get premium vehicles, professional chauffeurs, affordable fares, and reliable transportation for business and personal journeys."
    },
    {
      "name": "Belgaum to Pune Cab",
      "description": "Choose Belgaum to Pune Cab for comfortable outstation travel with Sedan, Ertiga, Innova Crysta, and SUV options. Enjoy doorstep pickup, transparent pricing, and experienced drivers."
    },
    {
      "name": "Belgaum to Mumbai Cab",
      "description": "Book Belgaum to Mumbai Cab for reliable long-distance travel with comfortable AC cars and professional chauffeurs. Suitable for airport transfers, business trips, and family journeys."
    },
    {
      "name": "Belgaum to Hyderabad Cab",
      "description": "Travel with Belgaum to Hyderabad Cab offering safe, comfortable, and affordable outstation taxi services. Choose from multiple vehicle options for individual, family, and corporate travel."
    },
    {
      "name": "Belgaum to Hubli Cab",
      "description": "Book Belgaum to Hubli Cab for convenient intercity travel with experienced drivers and well-maintained vehicles. Enjoy smooth transportation for business trips, personal travel, and local transfers."
    },
    {
      "name": "Belgaum to Dharwad Cab",
      "description": "Choose Belgaum to Dharwad Cab for reliable taxi services with comfortable vehicles, affordable pricing, and professional drivers. Perfect for quick and hassle-free travel between cities."
    },
    {
      "name": "Belgaum to Kolhapur Cab",
      "description": "Reserve Belgaum to Kolhapur Cab for safe and comfortable journeys with flexible booking options. Travel conveniently with AC cabs, experienced chauffeurs, and affordable packages."
    },
    {
      "name": "Belgaum to Mahabaleshwar Cab",
      "description": "Book Belgaum to Mahabaleshwar Cab for relaxing hill station travel with spacious vehicles and professional drivers. Ideal for family vacations, sightseeing trips, and weekend getaways."
    },
    {
      "name": "Belgaum to Shirdi Cab",
      "description": "Hire Belgaum to Shirdi Cab for comfortable pilgrimage travel with reliable chauffeurs and premium vehicles. Enjoy safe journeys with one way, round trip, and customized travel options."
    }
  ],
  "tableData": [
    ["Taxi in Belgaum", "Cab Service in Belgaum"],
    ["Taxi Service in Belgaum", "Belgaum Cabs"],
    ["Belgaum Taxi", "Best Cabs in Belgaum"],
    ["Best Taxi in Belgaum", "Online Cab Booking Belgaum"],
    ["Online Taxi Booking Belgaum", "Outstation Cabs in Belgaum"],
    ["Outstation Taxi Service Belgaum", "Airport Cabs in Belgaum"],
    ["Belgaum Airport Cab", "Belgaum Airport Taxi"],
    ["One Way Cab Belgaum", "Round Trip Cab Belgaum"],
    ["Innova Crysta Cab Belgaum", "Ertiga Cab Belgaum"],
    ["Sedan Cab Belgaum", "Corporate Cab Service Belgaum"],
    ["Cheap Cabs in Belgaum", "Luxury Cab Service Belgaum"],
    ["Cab Hire in Belgaum", "Belgaum to Goa Cab"],
    ["Belgaum to Bangalore Cab", "Belgaum to Pune Cab"],
    ["Belgaum to Mumbai Cab", "Belgaum to Hyderabad Cab"],
    ["Belgaum to Hubli Cab", "Belgaum to Dharwad Cab"],
    ["Belgaum to Kolhapur Cab", "Belgaum to Mahabaleshwar Cab"],
    ["Belgaum to Shirdi Cab", ""]
  ],





whychoose: [
  {
    WhyChooseheading: "Reliable Cabs in Belgaum",
    WhyChoosedescription: "Belgaum Taxi Service offers comfortable and dependable cab services in Belgaum with professional drivers, clean vehicles, and convenient travel solutions."
  },
  {
    WhyChooseheading: "Wide Range of Cab Options",
    WhyChoosedescription: "Choose from Sedan, Swift Dzire, Ertiga, Innova, Innova Crysta, SUVs, Tempo Travellers, and premium cars based on your travel needs."
  },
  {
    WhyChooseheading: "Local & Outstation Cab Services",
    WhyChoosedescription: "Book cabs for local city travel, airport transfers, railway station pickup, sightseeing, business trips, and outstation destinations from Belgaum."
  },
  {
    WhyChooseheading: "Pickup Anywhere in Belgaum",
    WhyChoosedescription: "Get doorstep pickup from Belgaum Airport, Railway Station, hotels, offices, homes, and nearby locations with timely service."
  },
  {
    WhyChooseheading: "Experienced & Professional Drivers",
    WhyChoosedescription: "Our trained chauffeurs ensure safe driving, punctual arrival, and a smooth travel experience for every passenger."
  },
  {
    WhyChooseheading: "Affordable Cab Booking",
    WhyChoosedescription: "Enjoy competitive fares with transparent pricing, flexible booking options, and no hidden charges."
  },
  {
    WhyChooseheading: "Perfect for Every Journey",
    WhyChoosedescription: "Our cabs are suitable for family trips, corporate travel, airport transfers, weddings, sightseeing tours, and personal transportation."
  },
  {
    WhyChooseheading: "24/7 Cab Availability",
    WhyChoosedescription: "Book your cab anytime with quick confirmation and dedicated customer support for hassle-free travel."
  }
]

};

const faqData = [
  {
    question: "Does Belgaum Taxi Service provide Cabs in Belgaum?",
    answer: "Yes, we provide reliable cab services in Belgaum for local travel, airport transfers, sightseeing, corporate trips, and outstation journeys."
  },
  {
    question: "Which types of cabs are available in Belgaum?",
    answer: "We offer Sedan, Swift Dzire, Ertiga, Innova, Innova Crysta, SUVs, Tempo Travellers, and other comfortable vehicles."
  },
  {
    question: "Can I book a cab for outstation travel from Belgaum?",
    answer: "Yes, we provide outstation cabs from Belgaum to Goa, Bangalore, Mumbai, Pune, Kerala, Hubli, and other destinations."
  },
  {
    question: "Do you provide Belgaum Airport cab service?",
    answer: "Yes, we offer airport pickup and drop services to and from Belgaum Airport with comfortable vehicles."
  },
  {
    question: "Is cab service available 24 hours in Belgaum?",
    answer: "Yes, our cab booking service is available 24/7 for local and outstation travel requirements."
  },
  {
    question: "Can I book a one-way cab in Belgaum?",
    answer: "Yes, one-way cab services are available for local as well as outstation routes."
  },
  {
    question: "Do you provide cabs for corporate travel?",
    answer: "Yes, we offer corporate cab services for employee transportation, business meetings, client transfers, and events."
  },
  {
    question: "Are toll and parking charges included in cab fare?",
    answer: "Toll charges, parking fees, state taxes, and other applicable charges are generally billed separately unless included in the confirmed quotation."
  },
  {
    question: "Can I hire a cab for sightseeing in and around Belgaum?",
    answer: "Yes, we provide sightseeing cab services for exploring Belgaum attractions and nearby destinations."
  },
  {
    question: "How can I book a cab in Belgaum?",
    answer: "Share your pickup location, destination, travel date, passenger details, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Ajay Kulkarni",
    feedback: "The cab service was excellent. The vehicle was clean, the driver was polite, and the journey was comfortable from pickup to drop location.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Priyanka Patil",
    feedback: "We booked a cab for our family trip and had a smooth experience. The service was reliable, affordable, and managed professionally.",
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
  "name": "Cabs in Belgaum",
  "image": "https://www.belgaumtaxiservice.com/assets/images/cabs-in-belgaum.webp",
  "description":
    "Book Cabs in Belgaum with Belgaum Taxi Service for safe, comfortable, and affordable taxi services. We provide local cabs, airport taxis, outstation cabs, one-way taxi services, and online cab booking in Belgaum with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7.",
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
    "url": "https://www.belgaumtaxiservice.com/cabs-in-belgaum"
  }
};




    return (
        <div>


<Helmet>
  <title>Cabs in Belgaum | Taxi Service & Cab Booking | +91 8722158435</title>

  <meta
    name="description"
    content="Book Cabs in Belgaum with Belgaum Taxi Service for reliable local, airport, and outstation taxi services. Get affordable Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs in Belgaum with online booking facility and 24x7 availability."
  />

  <meta
    name="keywords"
    content="Cabs in Belgaum, Taxi in Belgaum, Cab Service in Belgaum, Taxi Service in Belgaum, Belgaum Cabs, Belgaum Taxi, Best Cabs in Belgaum, Best Taxi in Belgaum, Online Cab Booking Belgaum, Online Taxi Booking Belgaum, Outstation Cabs in Belgaum, Outstation Taxi Service Belgaum, Airport Cab Service Belgaum, Belgaum Airport Taxi, Local Cab Service Belgaum"
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
                            <img src='/images/keyword/20.jpg' alt='img' className='img-fluid' />
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

export default Cabsinbelgaum;