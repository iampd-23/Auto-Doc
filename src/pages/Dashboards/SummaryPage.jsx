import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/SummaryPage.scss";

const SummaryPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleCopy = () => {
    alert("Summary copied to clipboard!");
  };

  const handleDownload = () => {
    alert("Downloading the summary...");
  };

  const handleEdit = () => {
    navigate("/dashboard2"); // Navigate to Dashboard 2 on Edit click
  };

  return (
    <div className="summary-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">AutoDoc</div>
        <nav className="sidebar-links">
          <a href="/dashboard" className="nav-link active">Dashboard</a>
          <a href="/history" className="nav-link">History</a>
        </nav>
        <div className="bottom-links">
          <a href="/settings" className="nav-link">
            <img src="/assets/settings.png" alt="Settings" className="icon" />
            Settings
          </a>
          <a href="/signup" className="nav-link">
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