import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ExploreOurCars = () => {


  const categories = [
    {
      img:"car-1-1.png",
      title:"Solterra",
      cars:"05 Cars"
    },
    {
      img:"car-1-2.png",
      title:"Outback",
      cars:"03 Cars"
    },
    {
      img:"car-1-3.png",
      title:"Forester",
      cars:"07 Cars"
    },
    {
      img:"car-1-4.png",
      title:"Impreza",
      cars:"09 Cars"
    },
    {
      img:"car-1-5.png",
      title:"Crosstrek",
      cars:"04 Cars"
    },
    {
      img:"car-1-6.png",
      title:"Legacy",
      cars:"05 Cars"
    }
  ];



  const fleet = [
    {
      img:"car-2-1.jpg",
      name:"Hyundai Sonata"
    },
    {
      img:"car-2-2.jpg",
      name:"ROLLS-ROYCE CULLINAN"
    },
    {
      img:"car-2-3.jpg",
      name:"Porsche Luxury Car"
    },
    {
      img:"car-2-4.jpg",
      name:"Land Rover"
    },
    {
      img:"car-2-5.jpg",
      name:"Mercedes-Benz"
    },
    {
      img:"car-2-1.jpg",
      name:"Hyundai Sonata"
    },
    {
      img:"car-2-2.jpg",
      name:"ROLLS-ROYCE CULLINAN"
    }
  ];



return (

<section className="explore-our-cars">


<div
className="explore-our-cars__bg"
style={{
backgroundImage:
"url(/images/backgrounds/card-1-1.jpg)"
}}
></div>




{/* Top Category */}

<div className="explore-our-cars__top">

<div className="container">


<div className="explore-our-cars__inner">


<div
className="explore-our-cars__inner__bg"
style={{
backgroundImage:
"url(/images/shapes/car-bg-1-1.png)"
}}
></div>




<ul className="explore-our-cars__list list-unstyled">


{
categories.map((item,index)=>(


<li key={index}>


<div
className="explore-our-cars__list__item wow fadeInUp"
data-wow-duration="1500ms"
data-wow-delay={`${index+1}00ms`}
>


<div className="explore-our-cars__list__item__image">

<img
src={`/images/resources/${item.img}`}
alt={item.title}
/>

</div>



<h4 className="explore-our-cars__list__item__title">

{item.title}

</h4>



<span className="explore-our-cars__list__item__tag">

{item.cars}

</span>


</div>


</li>


))
}


</ul>


</div>


</div>

</div>







{/* Fleet Section */}

<div className="explore-our-cars__bottom section-space">


<div className="container">


<div className="explore-our-cars__bottom__top">


<div className="sec-title sec-title--two text-center">


<h6 className="sec-title__tagline bw-split-in-right">

EXPLORE OUR CARS

</h6>



<h3 className="sec-title__title bw-split-in-left">

OUR VEHICLE FLEET

</h3>


</div>


</div>


</div>






<div className="container-fluid">


<Swiper


modules={[
Autoplay,
Navigation,
Pagination
]}


spaceBetween={30}


loop={true}



autoplay={{
delay:3000,
disableOnInteraction:false
}}



navigation={true}



pagination={{
clickable:true
}}



breakpoints={{


0:{
slidesPerView:1
},


576:{
slidesPerView:2
},


992:{
slidesPerView:3
},


1200:{
slidesPerView:4
},


1600:{
slidesPerView:5
}


}}



className="explore-car-slider"



>



{
fleet.map((car,index)=>(


<SwiperSlide key={index}>


<div className="explore-our-cars__item">



<div className="explore-our-cars__item__image">


<img
src={`/images/fleet/${car.img}`}
alt={car.name}
/>


</div>




<div className="explore-our-cars__content">



<div className="rentol-ratings">


{
[1,2,3,4,5].map((star)=>(


<span
key={star}
className="rentol-ratings__icon"
>


<i className="icon-star"></i>


</span>


))
}


</div>




<h4 className="explore-our-cars__item__title">


<a href="/fleet-details">

{car.name}

</a>


</h4>





<p className="explore-our-cars__item__text">

Comfortable, safe and affordable vehicle for your journey.

</p>






<div className="explore-our-cars__content__bottom">



<div className="explore-our-cars__item__price">

₹129 <span>/day</span>

</div>




<a
href="/fleet-details"
className="explore-our-cars__item__link"
>

<i className="icon-up-right-arrow"></i>

</a>



</div>





</div>



</div>



</SwiperSlide>


))
}



</Swiper>


</div>


</div>






<div className="explore-our-cars__element">


<img
src="/images/shapes/shape-faq.png"
alt="shape"
/>


</div>




</section>

);


};


export default ExploreOurCars;