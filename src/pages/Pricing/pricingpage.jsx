// pricing page for logged out
 
import React from "react";
import "../../styles/Pricing.scss";

const PricingPage = () => {
  return (
    <div className="pricing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-logo">AutoDoc</div>
        {/* <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-user">
          <span className="notification">🔔</span>
          <span className="language">English ▼</span>
          <div className="user-info">
            <img
              src=""
              alt="User Avatar"
              className="user-avatar"
            />
            <span>Moni Roy (Admin)</span>
          </div>
        </div> */}
      </header>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h1 className="pricing-title">Pricing</h1>
        <div className="pricing-cards">
          {/* Basic Plan */}
          <div className="pricing-card">
            <h2 className="plan-name">Basic</h2>
            <p className="monthly-charge">Monthly Charge</p>
            <h3 className="price">FREE</h3>
            <button className="get-started-button">Get Started</button>
            <ul className="features-list">
              <li>3 Discharge Summaries/Month</li>
              <li>Bandwidth Limit 10 GB</li>
              <li>20 User Connection</li>
              <li className="disabled">Analytics Report</li>
              <li className="disabled">Public API Access</li>
              <li className="disabled">Plugins Integration</li>
              <li className="disabled">Custom Content Management</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card premium">
            <h2 className="plan-name">Premium</h2>
            <p className="monthly-charge">Monthly Charge</p>
            <h3 className="price">₹2,000</h3>
            <button className="get-started-button">Get Started</button>
            <ul className="features-list">
              <li>50 Discharge Summaries/Month</li>
              <li>Bandwidth Limit 10 GB</li>
              <li>20 User Connection</li>
              <li>Analytics Report</li>
              <li>Public API Access</li>
              <li>Plugins Integration</li>
              <li>Custom Content Management</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;