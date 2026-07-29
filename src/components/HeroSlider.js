import React from 'react';
import Carousel from './Carousel';
import HowRentTwo from './HowRentTwo';
import BookingCar from '../pages/BookingCar';
import YourDreamOne from '../pages/YourDreamOne';
import ExploreOurCars from '../pages/ExploreOurCars';
import LuxuryCar from '../pages/LuxuryCar';
import AskedQuestion from '../pages/AskedQuestion';
import FAQSection from '../pages/AskedQuestion';
import FleetCTA from '../pages/FleetCTA';
import Testimonials from '../pages/Testimonials';
import CtaTwo from '../pages/CtaTwo';
import BlogSix from '../pages/BlogSix';





const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
<Carousel/>
<HowRentTwo/>
<BookingCar/>
<YourDreamOne/>
{/* <ExploreOurCars/> */}
<LuxuryCar/>
{/* <AskedQuestion/> */}
{/* <FAQSection/> */}
<FleetCTA/>
<Testimonials/>
<CtaTwo/>
<BlogSix/>

    </div>
  );
};

export default HeroSection;
