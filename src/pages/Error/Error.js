import styles from "./Error.module.css";
import Hero from "../../components/Hero/Hero";
import error from "../../assets/error.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
const Error = (props) => {
  return (
    <>
      <Hero>404_Error</Hero>
      <div className={styles.error_part}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className={styles.error_content}>
                <h4>Opps......This{props.children}</h4>
                <p>
                  Botanically, the strawberry fruit is considered an “accessory
                  fruit” and is not a true berry. The flesh consists of the
                  greatly nlarged flower receptacle.
                </p>
                <Link to="/HomePage">
                  <Button position="left" iconName="icofont-bubble-left">
                    Back To Home
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className={styles.error_img}>
                <img src={error} className="w-100 img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
