import styles from "./RecentPost.module.css";

const RecentPost = () => {
  return (
    <div className={styles.recent_post}>
      <div className={styles.sidebar}>
        <h4>Recent Post</h4>
      </div>
      <ul>
        <li>
          <span>20 April 2020</span>
          <h4>
            <a href="/#">Strawberries are low-growing herbaceous plants.</a>
          </h4>
        </li>

        <li>
          <span>20 April 2020</span>
          <h4>
            <a href="/#">Strawberries are low-growing herbaceous plants.</a>
          </h4>
        </li>

        <li>
          <span>20 April 2020</span>
          <h4>
            <a href="/#">Strawberries are low-growing herbaceous plants.</a>
          </h4>
        </li>

        <li>
          <span>20 April 2020</span>
          <h4>
            <a href="/#">Strawberries are low-growing herbaceous plants.</a>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default RecentPost;
