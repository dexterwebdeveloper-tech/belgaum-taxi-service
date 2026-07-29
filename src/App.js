
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import Aboutus from './components/AboutSection';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import Gallery from './pages/Gallery';
import Cabserviceinbelgaum from './pages/Cab Service in Belgaum';
import Belgaumtaxiservice from './pages/Belgaum Taxi Service';
import ScrollToTop from './components/ScrollToTop';
import Belgaumtogoacab from './pages/Belgaum to Goa Cab';
import Belgaumtomahabaleshwarcab from './pages/Belgaum to Mahabaleshwar Cab';
import Belgaumtokeralacabservice from './pages/Belgaum to Kerala Cab Service';
import Goatobelgaumcab from './pages/Goa to Belgaum Cab';
import Belgaumtomumbaicab from './pages/Belgaum to Mumbai Cab';
import Belgaumtobanglorecab from './pages/Belgaum to Bangalore Cab';
import Goacabservice from './pages/Goa Cab Service';
import Taxiserviceingoa from './pages/Taxi Service in Goa';
import Cheapestcabserviceingoa from './pages/Cheapest Cab Service in Goa';
import Corporatecabserviceinbelgaum from './pages/Corporate Cab Services in Belgaum';
import Innovacrystarentinbelgaum from './pages/Innova Crysta Rent in Belgaum';
import Ertigaonrentinbelgaum from './pages/Ertiga on Rent in Belgaum';
import Tempotravellerrentinbelgaum from './pages/Tempo Traveller Rent in Belgaum';
import Minibusrentalbelgaum from './pages/Mini Bus Rental Belgaum';
import Swiftdzireonrentinbelgaum from './pages/Swift Dzire on Rent in Belgaum';
import Urbanisonrentinbelgaum from './pages/Urbania on Rent in Belgaum';
import Weddingcarrenatalinbelgaum from './pages/Wedding Car Rental in Belgaum';
import Cabsinbelgaum from './pages/Cabs in Belgaum';
import Belgaumtohublicab from './pages/Belgaum to Hubli Cab';
import Belgaumtodharwadcab from './pages/Belgaum to Dharwad Cab';
import Belgaumairportcabservice from './pages/Belgaum Airport Cab Service';
import Belaumtobagalkotcab from './pages/Belgaum to Bagalkot Cab';
import Belgaumtobijapurcabs from './pages/Belgaum to Bijapur Cab';
import Punetobelgaumtaxifare from './pages/Pune to Belgaum Taxi Fare';
import Belgaumtoshivamoggacabs from './pages/Belgaum to Shivamogga Cab';
import Belgaumtohyderabadcab from './pages/Belgaum to Hyderabad Cabs';
import Belgaumtoshirdicabs from './pages/Belgaum to Shirdi Cabs';
import Belgaumtomanglorecab from './pages/Belgaum to Mangalore Cab';
import Belgaumtomurudeshwarcab from './pages/Belgaum to Murudeshwar Cab';
import Belgaumtokoppaltaxiservice from './pages/Belgaum to Koppal Taxi Service';
import Belgaumtonipanicab from './pages/Belgaum to Nipani Cab';
import Belgaumtochikolitaxi from './pages/Belgaum to Chikodi Taxi';
import Belgaumtolonadacab from './pages/Belgaum to Londa Cab';
import Belagaumtomudholtaxi from './pages/Belgaum to Mudhol Taxi';
import Belgaumtojamkhandicab from './pages/Belgaum to Jamkhandi Cab';
import Belgaumtohavericab from './pages/Belgaum to Haveri Cab';
import Blgaumtorenabennurcab from './pages/Belgaum to Ranebennur Cab';
import Belgaumtodavangeretaxi from './pages/Belgaum to Davangere Taxi';
import Belgaumtochitradurgataxi from './pages/Belgaum to Chitradurga Taxi Service';
import Belgaumtomysoretourpackage from './pages/Belgaum to Mysore Tour Package';
import Belgaumtomysorecabservice from './pages/Belgaum to Mysore Cab Service';
import Belgaumtoganpatipulecab from './pages/Belgaum to Ganpatipule Cab';
import Belgaumtosataracab from './pages/Belgaum to Satara Cab Service';
import Belgaumtomirajcab from './pages/Belgaum to Miraj Cab';
import Belgaumtosangliecab from './pages/Belgaum to Sangli Taxi';
import Belgaumtopandharpurcab from './pages/Belgaum to Pandharpur Cab';
import Belgaumtotuljapurtourpackages from './pages/Belgaum to Tuljapur Tour Package';
import Belgaumtotuljapurtourspackages from './pages/Belgaum to Tuljapur Tour Package';
import Belgaumdharmasthlacabs from './pages/Belgaum Dharmasthala Cabs';
import Belgaumtosolapurtaxiservice from './pages/Belgaum to Solapur Taxi Service';
import Belgaumtogadagcabs from './pages/Belgaum to Gadag Cabs';
import Belgaumtohospettaxifare from './pages/Belgaum to Hospet Taxi Fare';
import Belgaumtokitturtaxi from './pages/Belgaum to Kittur Taxi';
import Belgaumtogokarnatourpackages from './pages/Belgaum to Gokarna Tour Packages';
import Belgaumtokumtacab from './pages/Belgaum to Kumta Cab';
import Belgaumtohonnavarcabservice from './pages/Belgaum to Honnavar Cab Service';
import Belgaumtosirsicabstaxi from './pages/Belgaum to Sirsi Cabs Taxi';
import Belgaumtopanindiacabservice from './pages/Belgaum to Pan India Cab Service';
import Belgaumtokolhapurcab from './pages/Belgaum to Kolhapur Cab';
import Belgaumtoathnicabbooking from './pages/Belgaum to Athani Cab Booking';

function App() {
  return (
    <Router>
      {/* <ContactButtons /> */}
      <ScrollToTop />
<Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Cab-Service-in-Belgaum" element={<Cabserviceinbelgaum />} />

<Route path="/Belgaum-Taxi-Service" element={<Belgaumtaxiservice />} />
<Route path="/Belgaum-to-Goa-Cab" element={<Belgaumtogoacab />} />
<Route path="/Belgaum-to-Mahabaleshwar-Cab" element={<Belgaumtomahabaleshwarcab />} />
<Route path="/Belgaum-to-Kerala-Cab-Service" element={<Belgaumtokeralacabservice />} />
<Route path="/Goa-to-Belgaum-Cab" element={<Goatobelgaumcab />} />
<Route path="/Belgaum-to-Mumbai-Cab" element={<Belgaumtomumbaicab />} />
<Route path="/Belgaum-to-Bangalore-Cab" element={<Belgaumtobanglorecab />} />
<Route path="/Goa-Cab-Service" element={<Goacabservice />} />
<Route path="/Taxi-Service-in-Goa" element={<Taxiserviceingoa />} />
<Route path="/Cheapest-Cab-Service-in-Goa" element={<Cheapestcabserviceingoa />} />
<Route path="/Corporate-Cab-Services-in-Belgaum" element={<Corporatecabserviceinbelgaum />} />
<Route path="/Innova-Crysta-Rent-in-Belgaum" element={<Innovacrystarentinbelgaum />} />
<Route path="/Ertiga-on-Rent-in-Belgaum" element={<Ertigaonrentinbelgaum />} />
<Route path="/Tempo-Traveller-Rent-in-Belgaum" element={<Tempotravellerrentinbelgaum />} />
<Route path="/Mini-Bus-Rental-Belgaum" element={<Minibusrentalbelgaum />} />
<Route path="/Swift-Dzire-on-Rent-in-Belgaum" element={<Swiftdzireonrentinbelgaum />} />
<Route path="/Urbania-on-Rent-in-Belgaum" element={<Urbanisonrentinbelgaum />} />
<Route path="/Wedding-Car-Rental-in-Belgaum" element={<Weddingcarrenatalinbelgaum />} />
<Route path="/Cabs-in-Belgaum" element={<Cabsinbelgaum />} />
<Route path="/Belgaum-to-Hubli-Cab" element={<Belgaumtohublicab />} />

<Route path="/Belgaum-to-Dharwad-Cab" element={<Belgaumtodharwadcab />} />
<Route path="/Belgaum-to-Kolhapur-Cab" element={<Belgaumtokolhapurcab/>} />
<Route path="/Belgaum-Airport-Cab-Service" element={<Belgaumairportcabservice />} />
<Route path="/Belgaum-to-Bagalkot-Cab" element={<Belaumtobagalkotcab />} />
<Route path="/Belgaum-to-Bijapur-Cab" element={<Belgaumtobijapurcabs />} />
<Route path="/Pune-to-Belgaum-Taxi-Fare" element={<Punetobelgaumtaxifare />} />
<Route path="/Belgaum-to-Shivamogga-Cab" element={<Belgaumtoshivamoggacabs />} />
<Route path="/Belgaum-to-Hyderabad-Cabs" element={<Belgaumtohyderabadcab />} />
<Route path="/Belgaum-to-Shirdi-Cabs" element={<Belgaumtoshirdicabs />} />
<Route path="/Belgaum-to-Mangalore-Cab" element={<Belgaumtomanglorecab />} />
<Route path="/Belgaum-to-Murudeshwar-Cab" element={<Belgaumtomurudeshwarcab />} />
<Route path="/Belgaum-to-Koppal-Taxi-Service" element={<Belgaumtokoppaltaxiservice />} />
<Route path="/Belgaum-to-Nipani-Cab" element={<Belgaumtonipanicab />} />
<Route path="/Belgaum-to-Chikodi-Taxi" element={<Belgaumtochikolitaxi />} />
<Route path="/Belgaum-to-Londa-Cab" element={<Belgaumtolonadacab />} />
<Route path="/Belgaum-to-Mudhol-Taxi" element={<Belagaumtomudholtaxi />} />
<Route path="/Belgaum-to-Jamkhandi-Cab" element={<Belgaumtojamkhandicab />} />
<Route path="/Belgaum-to-Haveri-Cab" element={<Belgaumtohavericab />} />
<Route path="/Belgaum-to-Ranebennur-Cab" element={<Blgaumtorenabennurcab />} />
<Route path="/Belgaum-to-Davangere-Taxi" element={<Belgaumtodavangeretaxi />} />

<Route path="/Belgaum-to-Chitradurga-Taxi-Service" element={<Belgaumtochitradurgataxi />} />
<Route path="/Belgaum-to-Mysore-Tour-Package" element={<Belgaumtomysoretourpackage />} />
<Route path="/Belgaum-to-Mysore-Cab-Service" element={<Belgaumtomysorecabservice />} />
<Route path="/Belgaum-to-Ganpatipule-Cab" element={<Belgaumtoganpatipulecab />} />
<Route path="/Belgaum-to-Satara-Cab-Service" element={<Belgaumtosataracab />} />
<Route path="/Belgaum-to-Miraj-Cab" element={<Belgaumtomirajcab />} />
<Route path="/Belgaum-to-Sangli-Taxi" element={<Belgaumtosangliecab />} />
<Route path="/Belgaum-to-Athani-Cab-Booking" element={<Belgaumtoathnicabbooking />} />
<Route path="/Belgaum-to-Pandharpur-Cab" element={<Belgaumtopandharpurcab />} />
<Route path="/Belgaum-to-Tuljapur-Tour-Package" element={<Belgaumtotuljapurtourspackages />} />
<Route path="/Belgaum-Dharmasthala-Cabs" element={<Belgaumdharmasthlacabs />} />
<Route path="/Belgaum-to-Solapur-Taxi-Service" element={<Belgaumtosolapurtaxiservice />} />
<Route path="/Belgaum-to-Gadag-Cabs" element={<Belgaumtogadagcabs />} />
<Route path="/Belgaum-to-Hospet-Taxi-Fare" element={<Belgaumtohospettaxifare />} />
<Route path="/Belgaum-to-Kittur-Taxi" element={<Belgaumtokitturtaxi />} />
<Route path="/Belgaum-to-Gokarna-Tour-Packages" element={<Belgaumtogokarnatourpackages />} />
<Route path="/Belgaum-to-Kumta-Cab" element={<Belgaumtokumtacab />} />
<Route path="/Belgaum-to-Honnavar-Cab-Service" element={<Belgaumtohonnavarcabservice />} />
<Route path="/Belgaum-to-Sirsi-Cabs-Taxi" element={<Belgaumtosirsicabstaxi />} />
<Route path="/Belgaum-to-Pan-India-Cab-Service" element={<Belgaumtopanindiacabservice />} />      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
