//Screen 1 (Login / Signup)

import React from "react";
import "../styles/signup.scss";

const LoginSignup = () => {
  return (
    <div className="login-signup-container">
      <div className="login-signup-card">
        <h2>Login or Sign Up</h2>
        <p>We will send a verification code on this number</p>
        <form>
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
