import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <div className={styles.footer_bottom}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <div className={`${styles.footer_txt} text-center`}>
              <p>
                Copyright 2020 <span>TazZa</span>. All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
