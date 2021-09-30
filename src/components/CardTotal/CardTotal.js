import styles from "./CardTotal.module.css";
import React from "react";
import Button from "../Button/Button";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
// import coupan from "../../pages/Cartoverview/coupan";

const CardTotal = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(props.coupan);

  let subTotal = 0;
  cartCtx.bestSellers.map((value) => {
    subTotal += +value.price * +value.quantity;
  });

  let Discount = 0;
  let Coupan = "Tazza5050";

  if (props.abc === Coupan) {
    Discount = 10;
    console.log(Discount);
  }

  let mainTotal = 0;
  mainTotal = subTotal - Discount;

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
                <td className="text-end">${subTotal}</td>
              </tr>
              <tr>
                <th scope="row" className="discount">
                  Discount:
                </th>
                <td className="text-end">${Discount}</td>
              </tr>
              <tr>
                <th scope="row">Total:</th>
                <td className={`text-end ${styles.total_num}`}>${mainTotal}</td>
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
