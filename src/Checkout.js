import React, { useContext } from "react";
import { CartContext } from "./CartContext.js";
import CartProduct from "./CartProduct.js";
import SubTotalComponent from "./SubTotalComponent.js";
import banner from "./images/cart_banner_2.jpg";
import "./Checkout.css";

function Checkout() {
  const [{ cart }, dispatch] = useContext(CartContext);
  return (
    <div className="checkout">
      <div className={(cart.length!==0) ? "checkout__bannerShort" : "checkout__bannerLong"}>
        <img src={banner} alt="amazon ad" className="checkout__bannerImage" />
      </div>
      <div className="checkout__info">
        <div className="checkout__left">
          <div className="checkout__content">
            {cart.length === 0 ? (
              <div className="checkout__empty">
                <h1>Your shopping cart is Empty</h1>
                <span>
                  You have no items in your cart.To add an item to cart ,Click
                  the 'Add to Cart' button near the item.
                </span>
              </div>
            ) : (
              <div className="checkout__list">
                <h1>Review your order</h1>
                {cart.map((item) => (
                  <div>
                    <CartProduct
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      image={item.image}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="checkout__right">
          {cart.length != 0 ? (
            <div className="checkout__subtotal">
              <SubTotalComponent />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
