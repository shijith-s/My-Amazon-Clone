import React, { useContext } from "react";
import "./Product.css";
import { CartContext } from "./CartContext";

function Product({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useContext(CartContext);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: { id, title, price, rating, image },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="product image" className="product__image" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span className="star">&#9733;</span>
            ))}
        </div>
        <div className="product__pricing">
          <span>&#8377;</span>
          <span>{price}/-</span>
        </div>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
