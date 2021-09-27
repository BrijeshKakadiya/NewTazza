import Hero from "../../components/Hero/Hero";
import PostCategory from "../../components/PostCategory/PostCategory";
import styles from "./BlogDetails.module.css";
import news1 from "../../assets/news1.jpg";
import RecentPost from "../../components/RecentPost/RecentPost";
import PopulerTag from "../../components/PopulerTag/PopulerTag";
import Blogimg from "../../assets/BlogDetailsImg.svg";
import CustomerBg from "../../assets/CustomerBg.svg";
import Forminput from "../../components/FormInput/Forminput";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";

const BlogDetails = () => {
  return (
    <>
      <Hero>Blog Details</Hero>
      <div className={styles.blog_part}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <PostCategory />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <RecentPost />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <PopulerTag />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="blog">
                    <div className={styles.blog}>
                      <img
                        src={news1}
                        className="w-100 img-fluid"
                        alt="jpgimg"
                      />
                    </div>
                    <div className="blog_publish d-flex justify-content-between pt-4">
                      <div className={styles.date}>
                        <span>
                          <i className="icofont-ui-calendar"></i> 20 April 2020
                        </span>
                      </div>
                      <div className={styles.fav_icon}>
                        <span>
                          <i className="icofont-ui-love"></i> 568
                        </span>
                        <span>
                          <i className="icofont-speech-comments"></i> 986
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.blog_title} text-uppercase`}>
                      <h4>
                        <a href="/#">
                          Strawberries are low-growing herbaceous plants with a
                          fibrous root system and a crown from which arise basal
                          leaves.
                        </a>
                      </h4>
                    </div>
                    <div className={styles.blog_details}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmeod tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullaemco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in
                        reprehenderit.
                      </p>
                      <div
                        className={` mt-3 mb-3 ${styles.blog_details_comment}`}
                      >
                        <p>
                          Eute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore fugiat nulla pariatur cepteur sint
                          occaecat cudatat non proident sunt ulpa officia
                          deserunt mollit anim id esrum.
                        </p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>
                      <strong>
                        Strawberries are low-growing herbaceous plants with a
                        fibrous root system and a crown from which arise basal
                        leaves.
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmeod tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullaemco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in
                        reprehenderit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>
                      <div className="details_img mt-3 mb-3">
                        <div className="row">
                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src={Blogimg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src={Blogimg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src={Blogimg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>
                      <div className={styles.social_iconber}>
                        <div className="row align-items-center">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-left">
                            <div className={styles.tags}>
                              <span>Tags:</span>
                              <span>
                                <a href="/#">Organic,</a>
                              </span>
                              <span>
                                <a href="/#">Farmer,</a>
                              </span>
                              <span>
                                <a href="/#">Food</a>
                              </span>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-end">
                            <div className={styles.social_icon}>
                              <ul className="social_media list-unstyled ">
                                <li>
                                  <a href="/#">
                                    <i className="icofont-skype"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/#">
                                    <i className="icofont-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/#">
                                    <i className="icofont-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/#">
                                    <i className="icofont-whatsapp"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={` mt-4 ${styles.details_comment} `}>
                        <strong>Comment</strong>
                        <div className={`d-flex mt-3 ${styles.customer}`}>
                          <div className={`mt-2 ${styles.customer_img} `}>
                            <img
                              src={CustomerBg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className={styles.customer_info}>
                            <strong>
                              Jennifer Lofez <br />
                            </strong>
                            <span>20 April 2020</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed doem eiusmoed tempor encidi dunt ut
                              labore et dolorem magna aliqua. Ut enim ad minim
                              veniam, quis nostru exercitation.
                            </p>
                          </div>
                          <div className={styles.reply}>
                            <i className="icofont-reply"></i>Reply
                          </div>
                        </div>
                        <div className={`d-flex mt-3 ${styles.customer}`}>
                          <div className={`mt-2 ${styles.customer_img} `}>
                            <img
                              src={CustomerBg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className={styles.customer_info}>
                            <strong>
                              Belitaram Kusani <br />
                            </strong>
                            <span>20 April 2020</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed doem eiusmoed tempor encidi dunt ut
                              labore et dolorem magna aliqua. Ut enim ad minim
                              veniam, quis nostru exercitation.
                            </p>
                          </div>
                          <div className={styles.reply}>
                            <i className="icofont-reply"></i>Reply
                          </div>
                        </div>
                      </div>
                      <div className={`mt-4 ${styles.blog_form}`}>
                        <strong>Leave A Comments Here</strong>
                        <form action="#">
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <Forminput
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name:"
                              />
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <Forminput
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email:"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <Forminput
                                type="text"
                                id="phonenumber"
                                name="phonenumber"
                                placeholder="Phone:"
                              />
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <Forminput
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                              <TextArea
                                id="message:"
                                name="message:"
                                rows="3"
                                placeholder="Message:"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button square>Submit Comment</Button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default BlogDetails;
