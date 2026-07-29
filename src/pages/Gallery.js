


import React, { useState } from "react";

const gallery = [
  { image: "/images/fleet/Swift-Dzire.jpg" },
  { image: "/images/fleet/Maruti-Ertiga.jpg" },
  { image: "/images/fleet/Toyota-Rumion.jpg" },
  { image: "/images/fleet/Kia-Carens.jpg" },
  { image: "/images/fleet/Innova-Cab.jpg" },
  { image: "/images/fleet/Innova-Crysta.jpg" },
  { image: "/images/fleet/Tempo-Traveller.jpg" },
  { image: "/images/fleet/Urbania-Bus.jpg" },
  { image: "/images/fleet/bus.jpg" },


 
 
  // {
  //   id: 5,
  //   name: "Hyundai Aura",
  //   seats: "4 Seater",
  //   image: "images/fleets/Aura.jpg",
  // },

  // {
  //   id: 7,
  //   name: "Maruti Dzire",
  //   seats: "4 Seater",
  //   image: "images/fleets/Dzire.jpg",
  // },

  // {
  //   id: 8,
  //   name: "Ertiga",
  //   seats: "7 Seater",
  //   image: "images/fleets/Ertiga.jpg",
  // },

  // {
  //   id: 1,
  //   name: "Kia Carens",
  //   seats: "7 Seater",
  //   image: "images/fleets/Kia.jpg",
  // },
  // // {
  // //   id: 10,
  // //   name: "Innova ",
  // //   seats: "7 Seater",
  // //   image: "images/fleets/Innova.jpg",
  // // },

  // {
  //   id: 10,
  //   name: "Innova Crysta",
  //   seats: "7 Seater",
  //   image: "images/fleets/Innova-Crysta.jpg",
  // },

  // {
  //   id: 6,
  //   name: "Mini Bus",
  //   seats: "30-50 Seater",
  //   image: "images/fleets/Bus.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Tempo Traveller",
  //   seats: "12-17 Seater",
  //   image: "images/fleets/Tempo-traveler.jpg",
  // },

  // {
  //   id: 4,
  //   name: "Urbania",
  //   seats: "17 Seater",
  //   image: "images/fleets/urbania.jpg",
  // },



  // {
  //   id: 6,
  //   name: "Bus",
  //   seats: "30-50 Seater",
  //   image: "images/fleets/Bus.jpg",
  // },
];
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
       <div className="page-headder bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box text-white">
                <h1 className="text-anime-style-3 text-center text-white">
                  Gallery
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


    


      <div className="container py-5">
        <div className="row">
          {gallery.map((item, index) => (
            // <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            //   <div className="gallery-card borderr" onClick={() => openImage(index)}>
            //     <img src={item.image} alt={item.name} />
            //     <h5>{item.name}</h5>
            //   </div>
            // </div>

            <div className="col-lg-4 col-md-6 mb-4" key={index}>
  <div className="fleetCard" onClick={() => openImage(index)}>

    <div className="fleetBadge">
      Premium
    </div>

    <div className="fleetImage">
      <img src={item.image} alt={item.name} />
    </div>

    <div className="fleetContent">
      <h4>{item.name}</h4>

      <div className="fleetBottom">
        <span>Comfort Ride</span>

        <button>
          View
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

  </div>
</div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {currentIndex !== null && (
        <div className="lightbox">
          <span className="close darkcolorrrr" onClick={closeImage}>✖</span>

          <span className="prev" onClick={prevImage}>❮</span>
          <img
            src={gallery[currentIndex].image}
            alt="preview"
            className="lightbox-img "
          />
          <span className="next" onClick={nextImage}>❯</span>
        </div>
      )}
    </>
  );
};

export default Gallery;