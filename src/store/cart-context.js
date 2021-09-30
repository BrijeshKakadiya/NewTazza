import { createContext } from "react";

const CartContext = createContext({
  bestSellers: [],
  totalamount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  deleteItem: (id) => {},
});
// console.log(CartContext);
export default CartContext;
