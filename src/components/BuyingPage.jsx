import React, { useState } from "react";
import "../css/BuyingPage.css";

function BuyingPage() {
  const [cardInfo, setCardInfo] = useState({ name: "", cardNumber: "", expiry: "", cvc: "", amount: "" });
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase(); // Generates a random 6-character code
  }

  const handleChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (e) => {
    setUserCaptcha(e.target.value);
  };

  const handlePurchase = (e) => {
    if (userCaptcha === captchaCode) {
      alert("Purchase successful!");
      window.location.href = "/s"
    } else {
      alert("Incorrect Captcha! Please try again.");
      setCaptchaCode(generateCaptcha()); // Refresh captcha
      setUserCaptcha("");
    }
  };

  return (
    <div className="buying-container">
      <h1>Checkout</h1>
      <div className="checkout-section">
        {/* Payment Information */}
        <div className="payment-info">
          <h2>Payment Details</h2>
          <input type="text" name="name" placeholder="Cardholder Name" onChange={handleChange} />
          <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} />
          <input type="text" name="expiry" placeholder="MM/YY" onChange={handleChange} />
          <input type="text" name="cvc" placeholder="CVC" onChange={handleChange} />
          <input type="number" name="amount" placeholder="Enter Amount" value={cardInfo.amount} onChange={handleChange} />

          {/* Captcha Verification - placed directly under the amount field */}
          <div className="captcha-section">
            <p className="captcha-code">{captchaCode}</p>
            <input type="text" placeholder="Enter Captcha Code" value={userCaptcha} onChange={handleCaptchaChange} />
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p><strong>Total Amount: ${cardInfo.amount || "0"}</strong></p>
          <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
        </div>
      </div>
    </div>
  );
}

export default BuyingPage;
