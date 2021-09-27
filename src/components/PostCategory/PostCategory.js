import styles from "./PostCategory.module.css";
import Forminput from "../FormInput/Forminput";

const PostCategory = () => {
  return (
    <div className={styles.allpost_content}>
      <div className={styles.serach_btn}>
        <form action="#">
          <div className={styles.search_ber}>
            <Forminput
              type="text"
              className={`${styles.search_button} form-control`}
              id="serach_button"
              name="serach_button"
              placeholder="Search Here"
            />
            <i className="icofont-search-1"></i>
          </div>
        </form>
      </div>
      <div className={styles.post_category}>
        <div className={styles.sidebar}>
          <h4 className="border-0">Post Category</h4>
        </div>
        <ul className="list-group">
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Feature Products
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Organic Juices
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Dried Products
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Fruits Fresh
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Fresh Meal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostCategory;
