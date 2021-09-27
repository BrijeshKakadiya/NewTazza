import styles from "./Blog.module.css";
import Hero from "../../components/Hero/Hero";
import PostCategory from "../../components/PostCategory/PostCategory";
import RecentPost from "../../components/RecentPost/RecentPost";
import PopulerTag from "../../components/PopulerTag/PopulerTag";
import news1 from "../../assets/news1.jpg";

const Blog = () => {
  return (
    <>
      <Hero>Blog Page</Hero>
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
                  <div className={styles.blog}>
                    <div className={styles.blog_img}>
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
                      <a href="/#" className="underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className={styles.blog}>
                    <div className={styles.blog_img}>
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
                      <a href="/#" className="underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className={styles.blog}>
                    <div className={styles.blog_img}>
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
                      <a href="/#" className="underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 text-center">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className={styles.pages_num}>
                    <ul>
                      <li>
                        <a href="/#">1</a>
                      </li>
                      <li>
                        <a href="/#">2</a>
                      </li>
                      <li>
                        <a href="/#">3</a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="icofont-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
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

export default Blog;
