import { createContext } from "react";

const CartContext = createContext({
  bestSellers: [],
  addItem: (item) => {},
});
// console.log(CartContext);
export default CartContext;
