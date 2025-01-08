import React from "react";
import "../../styles/SummaryPage.scss";

const SummaryPage = () => {
  const handleCopy = () => {
    alert("Summary copied to clipboard!");
  };

  const handleDownload = () => {
    alert("Downloading the summary...");
  };

  const handleEdit = () => {
    alert("Navigating to the edit page...");
  };

  return (
    <div className="summary-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">DashStack</div>
        <nav className="sidebar-links">
          <a href="/dashboard" className="nav-link active">Dashboard</a>
          <a href="/patient" className="nav-link">Patient</a>
          <a href="/chat" className="nav-link">Chat</a>
        </nav>
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
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="page-title">Patient's Discharge Summary</h1>
        <div className="summary-card">
          <p className="summary-content">SUMMARY DISPLAYED</p>
        </div>
        <div className="action-buttons">
          <button className="action-button copy" onClick={handleCopy}>
            Copy
          </button>
          <button className="action-button download" onClick={handleDownload}>
            Download
          </button>
          <button className="action-button edit" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;