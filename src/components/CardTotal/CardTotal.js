import styles from "./CardTotal.module.css";
import React from "react";
import Button from "../Button/Button";

const CardTotal = () => {
  return (
    <>
      <div>
        <div className="order_cardTotal">
          <table className="table">
            <thead>
              <tr>
                <th
                  scope="col"
                  colSpan="2"
                  className={`text-uppercase ${styles.card_total}`}
                >
                  Card total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="subtotal">
                  Subtotal:
                </th>
                <td className="text-end">$568</td>
              </tr>
              <tr>
                <th scope="row" className="discount">
                  Discount:
                </th>
                <td className="text-end">$80</td>
              </tr>
              <tr>
                <th scope="row">Total:</th>
                <td className={`text-end ${styles.total_num}`}>$890</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="chechout_btn text-end">
          <Button square>Checkout</Button>
          {/* <a
            href="checkout.html"
            className="btn border-radius-0 border-transparent"
          >
            Checkout
          </a> */}
        </div>
      </div>
    </>
  );
};

export default CardTotal;
