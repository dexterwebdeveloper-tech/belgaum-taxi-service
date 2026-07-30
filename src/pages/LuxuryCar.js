// import React from "react";

// const LuxuryCar = () => {
//   const cars = [
//     "car-carousel-1-1.png",
//     // "car-carousel-1-2.png",
//     // "car-carousel-1-3.png",
//   ];

//   return (
//     <section className="luxury-car-one luxury-car-one--two section-space">
//       <div className="container">
//         <div className="row gutter-y-60">

//           {/* Content */}
//           <div className="col-lg-6">
//             <div className="luxury-car-one__content">
//               <div className="sec-title sec-title--two text-start">
//                 <h6 className="sec-title__tagline bw-split-in-right">
//                   BELGAUM TAXI SERVICE
//                 </h6>

//                 <h3 className="sec-title__title bw-split-in-left">
//                   Safe & Comfortable Taxi Rides for Every Journey
//                 </h3>
//               </div>

//               <p
//                 className="luxury-car-one__text wow fadeInUp"
//                 data-wow-duration="1500ms"
//                 data-wow-delay="100ms"
//               >
//                 Belgaum Taxi Service provides reliable local, outstation,
//                 airport transfer, and corporate taxi services with experienced
//                 drivers, clean vehicles, and affordable fares. Travel with
//                 confidence and enjoy a smooth ride every time.
//               </p>

//               <div className="luxury-car-one__feature">

//                 {/* Feature 1 */}
//                 <div
//                   className="luxury-car-one__feature__list wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="100ms"
//                 >
//                   <div className="luxury-car-one__feature__list__icon">
//                     <i className="icon-check1"></i>
//                   </div>

//                   <div className="luxury-car-one__feature__list__content">
//                     <h5 className="luxury-car-one__feature__list__title">
//                       On-Time Pickup
//                     </h5>

//                     <p className="luxury-car-one__feature__list__text">
//                       Our professional drivers arrive on time, ensuring you
//                       never miss a flight, meeting, or important event.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 2 */}
//                 <div
//                   className="luxury-car-one__feature__list wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="300ms"
//                 >
//                   <div className="luxury-car-one__feature__list__icon">
//                     <i className="icon-check1"></i>
//                   </div>

//                   <div className="luxury-car-one__feature__list__content">
//                     <h5 className="luxury-car-one__feature__list__title">
//                       Clean & Safe Cabs
//                     </h5>

//                     <p className="luxury-car-one__feature__list__text">
//                       Choose from well-maintained Sedan, SUV, Innova Crysta,
//                       and Tempo Traveller vehicles for comfortable travel.
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Taxi Image */}
//           <div className="col-lg-6">
//             <div
//               className="luxury-car-one__carousel wow fadeInRight"
//               data-wow-duration="1500ms"
//               data-wow-delay="300ms"
//             >
//               <div
//                 className="luxury-car-one__carousel__bg"
//                 style={{
//                   backgroundImage:
//                     "url(/images/resources/car-carousel-bg.png)",
//                 }}
//               ></div>

//               <div className="luxury-car-one__carousel__inner">
//                 {cars.map((car, index) => (
//                   <div className="luxury-car-one__item" key={index}>
//                     <img
//                       src={`/images/taxi.png`}
//                       alt="Belgaum Taxi Service"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <div className="luxury-car-one__element">
//         <img
//           src="/images/shapes/shape-2-2.png"
//           alt="Shape"
//         />
//       </div>
//     </section>
//   );
// };

// export default LuxuryCar;


import React from "react";

const LuxuryCar = () => {
  const cars = [
    "car-carousel-1-1.png",
  ];

  return (
    <section className="luxury-car-one luxury-car-one--two section-space">
      <div className="container">
        <div className="row gutter-y-60">

          {/* Content */}
          <div className="col-lg-6">
            <div className="luxury-car-one__content">
              <div className="sec-title sec-title--two text-start">
                <h6 className="sec-title__tagline bw-split-in-right">
                  BELGAUM TAXI SERVICE
                </h6>

                <h3 className="sec-title__title bw-split-in-left">
                  Safe & Comfortable Taxi Rides for Every Journey
                </h3>
              </div>

              <p
                className="luxury-car-one__text wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                Belgaum Taxi Service provides reliable local, outstation,
                airport transfer, and corporate taxi services with experienced
                drivers, clean vehicles, and affordable fares. Travel with
                confidence and enjoy a smooth ride every time.
              </p>

              <div className="luxury-car-one__feature">

                {/* Feature 1 */}
                <div
                  className="luxury-car-one__feature__list wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <div className="luxury-car-one__feature__list__icon">
                    <i className="fa-solid fa-check"></i>
                  </div>

                  <div className="luxury-car-one__feature__list__content">
                    <h5 className="luxury-car-one__feature__list__title">
                      On-Time Pickup
                    </h5>

                    <p className="luxury-car-one__feature__list__text">
                      Our professional drivers arrive on time, ensuring you
                      never miss a flight, meeting, or important event.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  className="luxury-car-one__feature__list wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <div className="luxury-car-one__feature__list__icon">
                    <i className="fa-solid fa-check"></i>
                  </div>

                  <div className="luxury-car-one__feature__list__content">
                    <h5 className="luxury-car-one__feature__list__title">
                      Clean & Safe Cabs
                    </h5>

                    <p className="luxury-car-one__feature__list__text">
                      Choose from well-maintained Sedan, SUV, Innova Crysta,
                      and Tempo Traveller vehicles for comfortable travel.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Taxi Image */}
          <div className="col-lg-6 d-none d-md-block">
            <div
              className="luxury-car-one__carousel wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div
                className="luxury-car-one__carousel__bg"
                style={{
                  backgroundImage:
                    "url(/images/resources/car-carousel-bg.png)",
                }}
              ></div>

              <div className="luxury-car-one__carousel__inner">
                {cars.map((car, index) => (
                  <div className="luxury-car-one__item" key={index}>
                    <img
                      src="/images/taxi.png"
                      alt="Belgaum Taxi Service"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="luxury-car-one__element">
        <img
          src="/images/shapes/shape-2-2.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};

export default LuxuryCar;