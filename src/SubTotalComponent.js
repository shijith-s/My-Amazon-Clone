import React, { useContext } from "react";
import { CartContext } from "./CartContext.js";
import { CartSumTotal } from "./Reducer";
import "./SubTotalComponent.css";

function SubTotalComponent({ list }) {
  const [{ cart }, dispatch] = useContext(CartContext);
  const amount = CartSumTotal(cart);
  return (
    <div className="subTotal">
      <div className="order__summary">
        <button className="place__order">Place your order</button>
        <p>
          By placing your order,you agree to Amazon's <a href="#">privacy policies</a>{" "}
          and <a href="#">conditions of use</a>
        </p>
        <h3>Order Summary</h3>
        <div className="subTotal__amount">
          <span>Items&#40;{cart.length}&#41;: </span>
          <span>&#8377;{amount}</span>
        </div>
        <div className="subTotal__amount">
          <span>Shipping &amp; Handling: </span>
          <span>&#8377;40</span>
        </div>
        <hr/>
        <div className="subTotal__amount">
          <span>Total before tax: </span>
          <span>&#8377;{amount+40}</span>
        </div>
        <div className="subTotal__amount">
          <span>Estimated tax to be collected: </span>
          <span>&#8377;0</span>
        </div>
        <hr/>
        <div className="subTotal__finalAmount subTotal__amount">
          <span>Order total:</span>
          <span>&#8377;{amount+40}</span>
        </div>
      </div>
      {/* <div className="subTotal__gift"><input type="checkbox" name="gift"/><p></p></div> */}
    </div>
  );
}

export default SubTotalComponent;
