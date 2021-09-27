import styles from "./Cartoverview.module.css";
import Hero from "../../components/Hero/Hero";
import CardTotal from "../../components/CardTotal/CardTotal";
import Forminput from "../../components/FormInput/Forminput";
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cartoverview = () => {
  const cartCtx = useContext(CartContext);

  const { bestSellers } = cartCtx;

  const AddItemHandler = (item) => {
    cartCtx.addItem({ ...item });
  };

  // cartCtx.bestSellers.map((bestSellers) => {
  //   return {
  //     id: bestSellers.id,
  //     productName: bestSellers.name,
  //     prevprice: bestSellers.prevprice,
  //     price: bestSellers.price,
  //     soldtag: bestSellers.soldtag,
  //     img: bestSellers.img,
  //   };
  // });
  // console.log(cartCtx);

  return (
    <>
      <Hero>Cart Overview</Hero>
      <div className={styles.cart_overview}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 table-responsive">
              <table className="table">
                <thead>
                  <tr className={styles.cartoverview_title}>
                    <th>IMAGES</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {bestSellers.map((value) => {
                    return (
                      <tr>
                        <th scope="row">
                          <div className="thamnail_img">
                            <img className="img-fluid" src={value.img} alt="" />
                          </div>
                        </th>
                        <td className="align-middle">
                          <b>{value.productName}</b>
                        </td>
                        <td className="align-middle">${value.price}</td>

                        <td className="align-middle">
                          <div className={`d-flex ${styles.cart}`}>
                            <div className={`d-flex ${styles.quantity}`}>
                              <div className="left_arrow">
                                <button type="button">
                                  <i className="icofont-minus"></i>
                                </button>
                              </div>
                              <div className={styles.quantity_num}>
                                {value.quantity}
                              </div>
                              <div className="right_arrow">
                                <button onClick={AddItemHandler}>
                                  <i className="icofont-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">${value.price}</td>
                        <td className="align-middle">
                          <i className="icofont-close text-danger"></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.coupon_part}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className={styles.search_button}>
                <form action="#">
                  <div className={styles.search_ber}>
                    <Forminput
                      type="text"
                      className={`form-control ${styles.search_button} `}
                      id="serach_button"
                      name="serach_button"
                      placeholder="Apply Coupon"
                    />
                    <div className="coupon_btn">
                      <a href="/#" className="border-radius-0">
                        APPLY COUPON
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <CardTotal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartoverview;
