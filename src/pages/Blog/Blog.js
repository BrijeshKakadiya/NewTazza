import styles from "./Blog.module.css";
import Hero from "../../components/Hero/Hero";
import PostCategory from "../../components/PostCategory/PostCategory";
import RecentPost from "../../components/RecentPost/RecentPost";
import PopulerTag from "../../components/PopulerTag/PopulerTag";
import { LatestNews } from "../../lopping/FirstBanner";
import { Link } from "react-router-dom";

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
              {LatestNews.map((value) => {
                return (
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className={styles.blog}>
                        <div className={styles.blog_img}>
                          <img
                            src={value.img1}
                            className="w-100 img-fluid"
                            alt="jpgimg"
                          />
                        </div>
                        <div className="blog_publish d-flex justify-content-between pt-4">
                          <div className={styles.date}>
                            <span>
                              <i className="icofont-ui-calendar"></i>{" "}
                              {value.date}
                            </span>
                          </div>
                          <div className={styles.fav_icon}>
                            <span>
                              <i className={value.like}></i> {value.likes}
                            </span>
                            <span>
                              <i className={value.comment}></i> {value.comments}
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.blog_title} text-uppercase`}>
                          <h4>
                            <a href="/#">{value.heading}</a>
                          </h4>

                          <Link
                            to={`/BlogDetails/${value.id}`}
                            className="underline"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
