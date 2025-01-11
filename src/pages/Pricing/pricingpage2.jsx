import React from "react";
import "../../styles/PricingLoggedIn.scss";

const PricingPageLoggedIn = () => {
  return (
    <div className="pricing-loggedin-page">
      {/* Sidebar */}
      <aside className="pricing-sidebar">
        <div className="pricing-sidebar-logo">AutoDoc</div>
        <nav className="pricing-sidebar-links">
          <div className="pricing-bottom-links">
            <a href="/settings" className="pricing-nav-link">
              <img src="/assets/settings.png" alt="Settings" className="pricing-icon" />
              Settings
            </a>
            <a href="/logout" className="pricing-nav-link">
              <img src="/assets/logout.png" alt="Logout" className="pricing-icon" />
              Logout
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="pricing-main-content">
        {/* Pricing Section */}
        <section className="pricing-content">
          <h1 className="pricing-title">Pricing</h1>
          <div className="pricing-cards-container">
            {/* Basic Plan */}
            <div className="pricing-card basic-plan">
              <h2 className="pricing-plan-name">Basic</h2>
              <p className="pricing-monthly-charge">Monthly Charge</p>
              <h3 className="pricing-plan-price">FREE</h3>
              <button className="pricing-current-plan-button">Your Current Plan</button>
              <ul className="pricing-features-list">
                <li>3 Discharge Summaries/Month</li>
                <li>Bandwidth Limit 10 GB</li>
                <li>20 User Connection</li>
                <li className="pricing-disabled-feature">Analytics Report</li>
                <li className="pricing-disabled-feature">Public API Access</li>
                <li className="pricing-disabled-feature">Plugins Integration</li>
                <li className="pricing-disabled-feature">Custom Content Management</li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card premium-plan">
              <h2 className="pricing-plan-name">Premium</h2>
              <p className="pricing-monthly-charge">Monthly Charge</p>
              <h3 className="pricing-plan-price">₹2,000</h3>
              <button className="pricing-get-started-button">Get Started</button>
              <ul className="pricing-features-list">
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
    </div>
  );
};

export default PricingPageLoggedIn;