import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  bestSellers: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  // console.log(state, action);
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.bestSellers.findIndex(
      (item) => item.id === action.item.id
    );
    // console.log(action.item.id);

    const existingCardItem = state.bestSellers[existingCartItemIndex];

    let updatedItems;
    if (existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        quantity: +existingCardItem.quantity + 1,
      };
      updatedItems = [...state.bestSellers];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.bestSellers.concat(action.item);
    }

    return {
      bestSellers: updatedItems,
      totalamount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.bestSellers.findIndex(
      (item) => item.id === action.id
    );
    // console.log(existingCartItemIndex);
    const existingItem = state.bestSellers[existingCartItemIndex];

    let updatedItems;

    if (existingItem.quantity === 1) {
      updatedItems = state.bestSellers.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.bestSellers];
      updatedItems[existingCartItemIndex] = updatedItem;
      // console.log(updatedItems);
    }
    return { bestSellers: updatedItems };
  }

  if (action.type === "DELETE") {
    const deleteItem = state.bestSellers.filter(
      (item) => item.id !== action.id
    );
    // console.log(deleteItem);
    return {
      bestSellers: [...deleteItem],
    };
  }

  return defaultCartState;
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

  const removeItemToCartHandler = (id) => {
    // console.log(id);
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const deleteItemToCartHandler = (id) => {
    // console.log(id);
    dispatchCartAction({ type: "DELETE", id: id });
  };

  const cartContext = {
    bestSellers: cartState.bestSellers,
    totalamount: cartState.totalamount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    deleteItem: deleteItemToCartHandler,
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
