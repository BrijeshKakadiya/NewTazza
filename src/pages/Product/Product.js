import styles from "./Product.module.css";
import Hero from "../../components/Hero/Hero";
import fruit from "../../assets/Fruit2.jpg";
import Slider from "react-slick";
import Button from "../../components/Button/Button";
import { bestSellers } from "../../lopping/FirstBanner";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

// const NextArrow = (props) => {
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

// const PrevArrow = (props) => {
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

const ProductDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  const cartCtx = useContext(CartContext);

  const setProduct = (item) => {
    cartCtx.addItem(item);
    // console.log(item);
  };

  return (
    <>
      <Hero>Product Details</Hero>
      <div className={styles.product_details}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className={`${styles.product_img} d-flex`}>
                <div className={styles.small_img}>
                  <img className="w-100" src={fruit} alt="" />
                  <img className="w-100" src={fruit} alt="" />
                  <img className="w-100" src={fruit} alt="" />
                </div>
                <div className={styles.big_img}>
                  <img src={fruit} className="w-100 img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className={styles.producudetails_content}>
                <h3>Strawberries: Health Benefi</h3>
                <div className={styles.customer_review}>
                  <ul>
                    <li>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </li>
                    <li>
                      <p>(3 Customer Review)</p>
                    </li>
                  </ul>
                </div>
                <strong>$60.00 </strong>
                <strong>
                  <del>$70.00 </del>
                </strong>
                <p>
                  It is a long established fact that a reader will be distracted
                  the readable content off a page when looking at its layout
                  fact that a reader will bee distracted the readable content.
                </p>

                <div className={`${styles.add_to_cart} d-flex`}>
                  <div className={`${styles.quantity} d-flex`}>
                    <div className={styles.left_arrow}>
                      <button type="button">
                        <i className="icofont-minus"></i>
                      </button>
                    </div>
                    <div className={styles.quantity_num}>1</div>
                    <div className={styles.right_arrow}>
                      <button type={styles.button}>
                        <i className="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="ms-5">
                    <Button>Add to cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // tabber */}
      <div className={styles.product_tabber}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <nav className={`mb-3 ${styles["nav_custom"]}`}>
                  <div
                    className={`nav nav-tabs ${styles["nav-tab"]}`}
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className={` nav-link active ${styles["nav-link-custom"]}`}
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      DESCRIPTION
                    </button>
                    <button
                      className={` nav-link ${styles["nav-link-custom"]}`}
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      INFORMATION
                    </button>
                    <button
                      className={` nav-link ${styles["nav-link-custom"]}`}
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      REVIEW
                    </button>
                  </div>
                </nav>
              </div>

              <div
                className={`tab-content ${styles.tab_desc}`}
                id="myTabContent"
              >
                <div
                  className={`${styles["tab-panes"]} tab-pane  fade show active`}
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
                <div
                  className={`${styles["tab-panes"]} tab-pane  fade`}
                  id="information"
                  role="tabpanel"
                  aria-labelledby="information-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
                <div
                  className={`${styles["tab-panes"]} tab-pane  fade`}
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className={styles["full-bestSeller"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <h3 className="section-title">Related Product</h3>
            </div>
          </div>
          <div className="row mt-5">
            <Slider {...settings}>
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
                            ${value.prevprice} KG
                          </span>
                          <span className={styles["product-price"]}>
                            ${value.price} KG
                          </span>
                        </div>
                        <div className="buttons">
                          <span
                            className={`${styles["sold-out-tag"]} position-top-right`}
                          >
                            {value.soldtag}
                          </span>
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
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
