import styles from "./Hero.module.css";
import leaf from "../../assets/leaf.png";
import Button from "../Button/Button";

const Hero = (props) => {
  return (
    <div className={styles["hero_section"]}>
      <div className={styles.png_img}>
        <img className="w-100 img-fluid" src={leaf} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={styles.herosection_content}>
              <h2>{props.children}</h2>
              <Button square>Home - Pages</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
