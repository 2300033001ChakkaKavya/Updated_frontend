import React from "react";
import "../css/Sucess.css";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h1>🎉 Payment Successful! 🎉</h1>
      <p>Thank you for your order. Your transaction has been completed successfully.</p>
      <p>We will send you a confirmation email with the details of your purchase shortly.</p>
      <button className="home-button" onClick={() => navigate("/homepage")}>Back to Home</button>
    </div>
  );
}

export default Success;
