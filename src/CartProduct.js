import React, { useContext } from "react";
import "./CartProduct.css";
import { CartContext } from "./CartContext";

function CartProduct({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useContext(CartContext);
  const removeFromCart = () => {
    console.log("removed" + id);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="cartProduct">
      <img src={image} alt="cartProduct image" className="cartProduct__image" />
      <div className="cartProduct__info">
        <p>{title}</p>
        <div className="cartProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span className="star">&#9733;</span>
            ))}
        </div>
        <div className="cartProduct__pricing">
          <span>&#8377;</span>
          <span>{price}/-</span>
        </div>
      <button onClick={removeFromCart}>remove Item</button>
      </div>
    </div>
  );
}

export default CartProduct;
