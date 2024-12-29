// Error Page when Not logined

import React from "react";
import "../styles/ErrorPage.scss";

const NotFound = () => {
  const handleBackToDashboard = () => {
    // Put your actual navigation or redirect logic here.
    alert("Redirecting to homepage...");
  };

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-image">
          {/* Since "404 photo.png" is in `public/assets`, reference it with "/assets/..." */}
          <img
            src="/assets/404 photo.png"
            alt="404 Error Illustration"
          />
        </div>

        <h2>Looks like you’ve got lost…</h2>

        <button onClick={handleBackToDashboard}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;