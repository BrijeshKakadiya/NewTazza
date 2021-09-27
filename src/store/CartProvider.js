import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  bestSellers: [],
};

const cartReducer = (state, action) => {
  // console.log(state, action);
  if (action.type === "ADD") {
    const existingCartItemIndex = state.bestSellers.findIndex(
      (item) => item.id === action.item.id
    );
    // console.log(action.item.id);
    const existingCardItem = state.bestSellers[existingCartItemIndex];

    let updatedItems;
    if (existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount + action.item.amount,
      };
      updatedItems = [...state.bestSellers];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.bestSellers.concat(action.item);
    }

    return {
      bestSellers: updatedItems,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (bestSellers) => {
    // console.log(bestSellers);
    dispatchCartAction({ type: "ADD", item: bestSellers });
  };

  const cartContext = {
    bestSellers: cartState.bestSellers,
    addItem: addItemToCartHandler,
  };
  // console.log(cartContext);

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
