//First Screen - Signup or Login Page

import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/SignupORLogin.scss";

const LoginSignup = () => {
  const navigate = useNavigate();

  const handleGetOTP = (e) => {
    e.preventDefault();
    // Here, you could validate the phone number or do any needed checks
    // If valid, navigate to the OTP page:
    navigate("/otp");
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-card">
        <h2>Login or Sign Up</h2>
        <p>We will send a verification code on this number</p>
        <form onSubmit={handleGetOTP}>
          <label htmlFor="phone-number">Enter Phone Number</label>
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input
              type="tel"
              id="phone-number"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button type="submit" className="get-otp-button">
            Get OTP
          </button>
        </form>
        <p className="privacy-policy">
          By continuing you agree to our <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;