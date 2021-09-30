import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";
import Icofont from "react-icofont";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = () => {
  const [show, setShow] = useState(false);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { bestSellers } = cartCtx;
  // console.log(bestSellers);

  // const numberOfCartItem = bestSellers.reduce((curNumber, item) => {
  //   return curNumber + item;
  // }, 0);
  // console.log(numberOfCartItem);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (bestSellers.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [bestSellers]);

  return (
    <header className={styles.sticky}>
      <div className={styles.header}>
        <div className="container">
          <nav
            className={`navbar navbar-expand-lg navbar-light ${styles["navbar-lights"]} ${styles["header-bg"]}  ${styles.headerr}`}
          >
            <Link className={`navbar-brand ${styles["navbar-brands"]}`} to="/">
              <img src={logo} alt="" />
            </Link>
            <button
              className={`navbar-toggler ${styles["navbar-toggler-item"]}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <Icofont icon="navigation-menu" />
            </button>

            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className={`navbar-nav ${styles["navbar-nav-nav"]} mx-auto`}>
                <li className={`${styles.active} nav-item`}>
                  <NavHashLink
                    className={`${styles["nav-link-nav"]} nav-link`}
                    to="/"
                  >
                    Home
                  </NavHashLink>
                </li>

                <li className="nav-item">
                  <NavHashLink
                    className={`${styles["nav-link-nav"]} nav-link`}
                    to="/#full-about"
                  >
                    About
                  </NavHashLink>
                </li>

                <li className="nav-item">
                  <NavHashLink
                    className={`${styles["nav-link-nav"]} nav-link`}
                    to="/#product"
                  >
                    Product
                  </NavHashLink>
                </li>

                <li className="nav-item">
                  <NavHashLink
                    className={`${styles["nav-link-nav"]} nav-link`}
                    to="/#full-testimonial"
                  >
                    Testimonial
                  </NavHashLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="/#"
                    className={`nav-link ${styles["nav-link-nav"]} dropdown-toggle`}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to="/"
                  >
                    Pages
                  </a>
                  <ul
                    className={`dropdown-menu  ${styles["dropdown-menus"]}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className={`dropdown-item ${styles["dropdown-items"]}`}
                        to="/Product"
                      >
                        Product Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${styles["dropdown-items"]}`}
                        to="/Blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link
                        className={`dropdown-item ${styles["dropdown-items"]}`}
                        to="/BlogDetails"
                      >
                        Blog Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${styles["dropdown-items"]}`}
                        to="/Error"
                      >
                        404 Error
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${styles["dropdown-items"]}`}
                        to="/Cart"
                      >
                        Cart Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${styles["dropdown-items"]}`}
                        to="/CheckOut"
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className={`${styles["nav-link-nav"]} nav-link`}
                    to="/Contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className={styles["header-content"]}>
                <div className={`${styles["header_contact"]} text-right`}>
                  <span>Call Us!</span>
                  <span className={styles.phone_no}>+00 569 846 348</span>
                </div>
                <Link to="/Cart">
                  <button className={btnClasses}>
                    <div className={styles.header_icon}>
                      <i className="icofont icofont-cart"></i>
                      <span className={styles.cart_no}>
                        {bestSellers.length}
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
