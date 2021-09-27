import styles from "./HomePage.module.css";
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Slider from "react-slick";
import Icofont from "react-icofont";
import Button from "../../components/Button/Button";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import {
  FirstBanner,
  Feature,
  bestSellers,
  Partner,
  TestimonialImg,
  TestimonialReview,
} from "../../lopping/FirstBanner";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <Icofont
        icon="icofont-double-right"
        className={styles["icofont-double-right"]}
        onClick={onClick}
      />
    </>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <Icofont
        icon="icofont-double-left"
        className={styles["icofont-double-left"]}
        onClick={onClick}
      />
    </>
  );
};

// const PartnersNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <>
//       <Icofont
//         icon="icofont-double-right"
//         className={styles["icofont-double-right"]}
//         onClick={onClick}
//       />
//     </>
//   );
// };

// const PartnersPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <>
//       <Icofont
//         icon="icofont-double-left"
//         className={styles["icofont-double-left"]}
//         onClick={onClick}
//       />
//     </>
//   );
// };

const HomePage = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Features = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const partners = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <PartnersNextArrow />,
    // prevArrow: <PartnersPrevArrow />,
  };

  const testimonials = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonial = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const cartCtx = useContext(CartContext);

  const setProduct = (item) => {
    cartCtx.addItem(item);
    // console.log(item);
  };

  return (
    <>
      {/* Banner */}
      <div className={styles["full-banner"]}>
        <div className="container">
          <div className="row banner-slider">
            <Slider {...settings}>
              {FirstBanner.map((value) => {
                return (
                  <div className="col-md-12">
                    <div className={styles["banner-content"]}>
                      <h1>
                        {value.per} <span>{value.tag}</span>
                      </h1>
                      <h3>{value.heading}</h3>
                      <p>{value.description}</p>
                      <Button position="right" iconName="icofont-bubble-right">
                        ALL PRoducts
                      </Button>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* //Feature section */}
      <div className={styles["full-features"]}>
        <div className="container">
          <div className="row">
            <Slider {...Features}>
              {Feature.map((value) => {
                return (
                  <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                    <div className={`${styles["features-box"]} text-center`}>
                      <div className={styles["features-icon-border"]}>
                        <div className={styles["features-icon"]}>
                          <i className={value.icon}></i>
                        </div>
                      </div>
                      <div className={styles["features-text"]}>
                        <h3>{value.heading}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* About */}
      <div className={styles["full-about"]} id="full-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles["about-content"]}>
                <h3>We Providing Services Since 1841 With Proud.</h3>
                <div className={styles["about-details"]}>
                  <p>
                    The readable content off a page when looking layout using
                    Lorem Ipsum is that it has.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content off a page when looking at
                    its layout using Lorem Ipsum is that it has.
                  </p>
                </div>

                <div
                  className={`align-items-center ${styles["about-icon-text"]}`}
                >
                  <div className={styles["abt-icon"]}>
                    <i className="icofont-fruits"></i>
                  </div>
                  <div className={styles["abt-text"]}>
                    <h2>
                      Fresh Look And <span>100% Organic</span> Farm Fresh
                      Produce Right.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BestSeller */}
      <div className={styles["full-bestSeller"]} id="product">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className={styles["section-title"]}>
                Our Best Seller Product
              </h3>
              <p className={styles["secttion-subtitle"]}>
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row mt-5">
            {bestSellers.map((value) => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div className={styles.product}>
                    <div className={styles["product-img"]}>
                      <img className="w-100" src={value.img} alt="" />
                    </div>
                    <div className={styles["product-content"]}>
                      <div className="product-details position-bottom-left">
                        <h3 className={styles["product-name"]}>
                          <a href="/#">{value.productName}</a>
                        </h3>
                        <span className={styles["product-prev-price"]}>
                          ${value.prevprice}KG
                        </span>
                        <span className={styles["product-price"]}>
                          ${value.price}KG
                        </span>
                      </div>
                      <div className="buttons">
                        {value.soldtag === "Sold out" ? (
                          <span
                            className={`${styles["sold-out-tag"]} position-top-right`}
                          >
                            {value.soldtag}
                          </span>
                        ) : (
                          ""
                        )}

                        <span
                          className={`position-bottom-right ${styles["to-cart"]}`}
                        >
                          <Button cart onClick={() => setProduct(value)}>
                            Add to cart
                          </Button>
                        </span>
                      </div>

                      <div className={`${styles.icons} position-center`}>
                        <div className="rounded-icon">
                          <i className="icofont-eye"></i>
                        </div>

                        <div className="rounded-icon">
                          <i className="icofont-heart-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* offer */}
      <div className={styles["full-offer"]}>
        <div className={`bg-1 ${styles["bgg-1"]}`}></div>
        <div className="bg-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles["offer-content"]}>
                <h3>Daily Essentials</h3>
                <h2>
                  Sale 68% Off <br /> All Fruite Products
                </h2>
                <Button position="right" iconName="icofont-bubble-right">
                  Explore more
                </Button>
                {/* <a href="#" className={`btn ${styles.btnn}`}>
                  <i className="icofont-bubble-right"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className={styles["full-partners"]}>
        <div className="container">
          <div className="row partner-slider">
            <Slider {...partners}>
              {Partner.map((value) => {
                return (
                  <div className="col-md-12">
                    <div className="partner-img text-center">
                      <img className="w-50 mx-auto" src={value.img} alt="" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className={styles["full-testimonial"]} id="full-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className={styles["section-title"]}>Our Happy Customers</h3>
              <p className={styles["secttion-subtitle"]}>
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-md-4">
              <div className={`${styles["testimonial-img"]} text-center`}>
                <Slider {...testimonials}>
                  {TestimonialImg.map((value) => {
                    return (
                      <div className="img">
                        <img className="w-100" src={value.img} alt="" />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="col-md-8">
              <div className={styles["testimonial-text"]}>
                <Slider {...testimonial}>
                  {TestimonialReview.map((value) => {
                    return (
                      <div className={styles["testimonial-info"]}>
                        <p>{value.description}</p>
                        <h3>{value.name}</h3>
                        <h4>{value.heading}</h4>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className={styles["contact-now"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className={styles["contact-quote"]}>
                If you Need Natural And Fresh Organic Fruits!
              </h3>
              <div className="text-center mt-5">
                <Button position="right" iconName="icofont-bubble-right">
                  Contact Now
                </Button>
              </div>
              {/* <a href="#" className="btn mt-5">
                Contact Now <i className="icofont-bubble-right"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* LatestNews */}
      <div className="full-latest-news">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className={styles["section-title"]}>Latest News</h3>
              <p className={styles["secttion-subtitle"]}>
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="latest-news-grid">
                <div className={styles["news-img"]}>
                  <img className="w-100" src={news1} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles.date}>16 January’20</span>
                    <span className={styles.react}>
                      <i className="icofont-ui-love"></i> 56
                    </span>
                    <span className={styles.react}>
                      <i className="icofont-speech-comments"></i> 98
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <a href="/">
                      <h4>
                        The passage experienced a popularity during the used it
                        on their dry-transfer sheets.
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={`${styles["latest-news-list"]} d-flex`}>
                <div className={styles["news-img"]}>
                  <img className="w-100" src={news2} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles.date}>16 January’20</span>
                    <span className={styles.react}>
                      <i className="icofont-ui-love"></i> 56
                    </span>
                    <span className={styles.react}>
                      <i className="icofont-speech-comments"></i> 98
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <a href="/">
                      <h4>The passage popularity dry transfer sheets.</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${styles["latest-news-list"]} d-flex`}>
                <div className={styles["news-img"]}>
                  <img className="w-100" src={news3} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles.date}>16 January’20</span>
                    <span className={styles.react}>
                      <i className="icofont-ui-love"></i> 56
                    </span>
                    <span className={styles.react}>
                      <i className="icofont-speech-comments"></i> 98
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <a href="/">
                      <h4>The passage popularity dry transfer sheets.</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
