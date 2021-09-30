import styles from "./Cartoverview.module.css";
import Hero from "../../components/Hero/Hero";
import CardTotal from "../../components/CardTotal/CardTotal";
import Forminput from "../../components/FormInput/Forminput";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Cartoverview = (props) => {
  const [coupan, setCoupan] = useState();
  const cartCtx = useContext(CartContext);
  const { bestSellers } = cartCtx;

  const AddItemHandler = (value) => {
    cartCtx.addItem(value);
  };

  const RemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  // console.log(RemoveItemHandler);

  const DeleteItemHandler = (id) => {
    cartCtx.deleteItem(id);
  };

  // const onSubmit = (e) => {};

  const OnUpdate = (e) => {
    if (e.target.name === "text") {
      setCoupan(e.target.value);
    }
  };

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
                            <div className={`d-flex`}>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => RemoveItemHandler(value.id)}
                                  style={{
                                    background: "transparent",
                                    border: "transparent",
                                  }}
                                >
                                  <i className="icofont-minus"></i>
                                </button>
                              </div>
                              <div className={styles.quantity_num}>
                                {value.quantity}
                              </div>
                              <div>
                                <button
                                  onClick={() => AddItemHandler(value)}
                                  style={{
                                    background: "transparent",
                                    border: "transparent",
                                  }}
                                >
                                  <i className="icofont-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          ${value.price * value.quantity}
                        </td>
                        <td
                          className="align-middle"
                          onClick={() => DeleteItemHandler(value.id)}
                        >
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
                      name="text"
                      placeholder="Apply Coupon"
                      value={coupan}
                      onChange={OnUpdate}
                    />
                    <button onClick={OnUpdate} className="coupon_btn">
                      <Link to="/Cart" className="border-radius-0">
                        APPLY COUPON
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <CardTotal coupan={coupan} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartoverview;
