// import React, { useContext } from "react";
// import CartContext from "../../store/cart-context";
// import HomePage from "../../pages/HomePage/HomePage";
// // import ItemForm from "./ItemForm";

// const Item = (props) => {
//   const cartCtx = useContext(CartContext);
//   //   const price = `$${props.price.toFixed(2)}`;

//   const addToCartHandler = () => {
//     cartCtx.addItem({
//       id: props.id,
//       productName: props.name,
//       prevprice: props.prevprice,
//       price: props.price,
//       soldtag: props.soldtag,
//       img: props.img,
//     });
//     // console.log(cartCtx);
//   };

//   return (
//     <li>
//       {/* <div>
//         <h3>{props.name}</h3>
//         <div>{props.description}</div>
//         <div>{price}</div>
//       </div> */}
//       <div>
//         <HomePage onAddToCart={addToCartHandler} id={props.id} />
//       </div>
//     </li>
//   );
// };

// export default Item;
