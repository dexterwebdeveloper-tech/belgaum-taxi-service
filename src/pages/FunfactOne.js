import React from "react";

const FunfactOne = () => {
  const facts = [
    {
      number: "25",
      suffix: "",
      title: "Vehicle Fleet",
      bg: "/images/resources/funfact-bg-1-1.jpg",
    },
    {
      number: "5",
      suffix: "M+",
      title: "Kilometer of Drive",
      bg: "/images/resources/funfact-bg-1-2.jpg",
    },
    {
      number: "50",
      suffix: "K+",
      title: "Pickup & Drop",
      bg: "/images/resources/funfact-bg-1-3.jpg",
    },
    {
      number: "20",
      suffix: "K+",
      title: "Booking Reserved",
      bg: "/images/resources/funfact-bg-1-4.jpg",
    },
  ];

  return (
    <section className="funfact-one section-space">

      <div
        className="funfact-one__bg"
        style={{
          backgroundImage:
            "url(/images/backgrounds/funfact-bg-1-1.jpg)",
        }}
      ></div>


      <div className="container">
        <div className="row">

          {facts.map((fact, index) => (
            <div className="col-xl-3 col-lg-4" key={index}>

              <div className="funfact-one__item count-box">

                <div
                  className="funfact-one__item__bg"
                  style={{
                    backgroundImage: `url(${fact.bg})`,
                  }}
                ></div>


                <h3 className="funfact-one__funfact__count">
                  <span
                    className="count-text"
                    data-stop={fact.number}
                    data-speed="1500"
                  >
                    {fact.number}
                  </span>

                  {fact.suffix && (
                    <span>{fact.suffix}</span>
                  )}
                </h3>


                <p className="funfact-one__funfact__text">
                  {fact.title}
                </p>


                <div className="funfact-one__border__group">
                  <span></span>
                  <span></span>
                </div>


              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default FunfactOne;