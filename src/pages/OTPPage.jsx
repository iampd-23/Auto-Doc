//Third Screen - OTP Verification Page

import React, { useState } from "react";
import "../styles/OTPPage.scss"; 

const OTPVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (value, index) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);


    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`OTP Submitted: ${otp.join("")}`);
  // };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>Enter Verification Code</h2>
        <p>Enter the OTP sent to your phone</p>

        <form className="otp-form">
          <div className="otp-inputs">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-input-${i}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
              />
            ))}
          </div>
          <button type="submit" className="otp-submit">
            Submit
          </button>
        </form>
        <p className="resend-otp">Resend OTP (30)</p>
      </div>
    </div>
  );
};

export default OTPVerification;