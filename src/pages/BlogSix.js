import React from "react";

const BlogSix = () => {

  const blogs = [
    {
      image: "/images/blog/blog-6-1.jpg",
      title: "Cab Service in Belgaum",
      link: "/Cab-Service-in-Belgaum",
      date: "20",
    },

    {
      image: "/images/blog/blog-6-1.jpg",
      title: "Belgaum to Goa Cab",
      link: "/Belgaum-to-Goa-Cab",
      date: "20",
    },

    {
      image: "/images/blog/blog-6-1.jpg",
      title: "Belgaum to Kolhapur Cab",
      link: "/Belgaum-to-Kolhapur-Cab",
      date: "20",
    },
  ];


  return (

    <section className="blog-six section-space">


      <div
        className="blog-six__bg"
        style={{
          backgroundImage:
            "url(/images/shapes/blgo-6-1.png)",
        }}
      ></div>



      <div className="container">


        <div className="sec-title sec-title--two text-center">


          <h6 className="sec-title__tagline bw-split-in-right">
            TAXI SERVICES
          </h6>


          <h3 className="sec-title__title bw-split-in-left">
            Our Cab Services in Belgaum
          </h3>


        </div>




        <div className="row gutter-y-30">


          {
            blogs.map((blog,index)=>(


              <div
                className="col-lg-4 col-md-6"
                key={index}
              >


                <div className="blog-six__item">



                  <div className="blog-six__item__image">


                    <img
                      src={blog.image}
                      alt={blog.title}
                    />



                    <a
                      href={blog.link}
                      className="blog-six__item__image__hover"
                    ></a>


                  </div>





                  <div className="blog-six__item__content">



                    <h3 className="blog-six__item__title">

                      <a href={blog.link}>
                        {blog.title}
                      </a>

                    </h3>




                    <p className="blog-six__item__text">

                      Book a comfortable and reliable taxi with
                      Belgaum Taxi Service. We provide safe rides,
                      professional drivers and affordable cab
                      services for local and outstation travel.

                    </p>




                    <ul className="blog-six__item__meta list-unstyled">


                      <li className="blog-six__item__meta__item">

                        <a href={blog.link}>

                          <i className="icon-car"></i>

                          Belgaum Taxi Service

                        </a>

                      </li>



                      <li className="blog-six__item__meta__item">

                        <a href={blog.link}>

                          <i className="icon-pin"></i>

                          24/7 Available

                        </a>

                      </li>


                    </ul>





                    <div className="blog-six__item__date">

                      <span>
                        {blog.date}
                      </span>

                      July

                    </div>



                  </div>



                </div>


              </div>


            ))
          }



        </div>



      </div>





      <div className="blog-six__element-one">

        <img
          src="/images/shapes/blog-angle-1-1.png"
          alt="shape"
        />

      </div>




      <div className="blog-six__element-two">

        <img
          src="/images/shapes/blog-angle-1-1.png"
          alt="shape"
        />

      </div>



    </section>

  );

};


export default BlogSix;