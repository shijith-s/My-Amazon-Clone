import React from "react";
import logo from "./images/amazon_logo.png";
import "./Footer.css";

function Footer() {
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div>
      <div className="Footer">
        <button className="Footer__backToTop" onClick={scrollToTop}>Back to top</button>
        <div className="Footer__info">
          <ul>
            <li>Get to Know Us</li>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>Amazon Cares</li>
            <li>Gift a smile</li>
          </ul>
          <ul>
            <li>Connect with us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul>
            <li>Make Money with Us</li>
            <li>Sell on fake Amazon</li>
            <li>Sell under fake Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Pay</li>
          </ul>
          <ul>
            <li>Connect with us</li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="Footer__copyright">
          <img src={logo} />
          <h4>Amazon Clone created by &copy; Shijith</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
