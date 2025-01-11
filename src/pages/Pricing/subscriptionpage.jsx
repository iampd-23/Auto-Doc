import React from "react";
import "../../styles/SubscriptionPage.scss";

const SubscriptionPage = () => {
  return (
    <div className="subscription-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">AutoDoc</div>
        <nav className="sidebar-links">
          {/* <a href="/dashboard" className="nav-link">Dashboard</a>
          <a href="/products" className="nav-link">Products</a>
          <a href="/favorites" className="nav-link">Favorites</a>
          <a href="/inbox" className="nav-link">Inbox</a>
          <a href="/order-list" className="nav-link">Order Lists</a>
          <a href="/product-stock" className="nav-link">Product Stock</a>

          <h3 className="section-heading">Pages</h3>
          <a href="/pricing" className="nav-link active">Pricing</a>
          <a href="/calendar" className="nav-link">Calendar</a>
          <a href="/to-do" className="nav-link">To-Do</a>
          <a href="/contact" className="nav-link">Contact</a>
          <a href="/invoice" className="nav-link">Invoice</a>
          <a href="/ui-elements" className="nav-link">UI Elements</a>
          <a href="/team" className="nav-link">Team</a>
          <a href="/table" className="nav-link">Table</a> */}

          <div className="bottom-links">
            <a href="/settings" className="nav-link">
              <img src="/assets/settings.png" alt="Settings" className="icon" />
              Settings
            </a>
            <a href="/logout" className="nav-link">
              <img src="/assets/logout.png" alt="Logout" className="icon" />
              Logout
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="page-title">Subscription Page</h1>

        <div className="subscription-cards">
          {/* Premium Plan */}
          <div className="plan-card">
            <h2>Premium</h2>
            <p>Monthly Charge</p>
            <h3>₹2,000</h3>
            <button className="current-plan-btn">Your Current Plan</button>
            <ul className="features-list">
              <li>50 Discharge Summaries/Month</li>
              <li>Bandwidth Limit 10 GB</li>
              <li>20 User Connection</li>
              <li className="disabled">Analytics Report</li>
              <li className="disabled">Public API Access</li>
              <li className="disabled">Plugins Integration</li>
              <li className="disabled">Custom Content Management</li>
            </ul>
          </div>

          {/* Usage Summary */}
          <div className="usage-card">
            <div className="usage-chart">
              <svg width="120" height="120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#ccc"
                  strokeWidth="15"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#4b8bf4"
                  strokeWidth="15"
                  fill="none"
                  strokeDasharray="75 314"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>
            </div>
            <p className="discharge-left">25 Discharge Left</p>
            <hr />
            <p className="credits-text">Need More Credits?</p>
            <p className="contact-email">Write to us at <br /> contact@autodoc.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;