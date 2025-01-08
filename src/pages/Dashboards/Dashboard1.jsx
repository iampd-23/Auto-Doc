import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../../styles/Dashboard1.scss"; // Custom SCSS file for styling

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleGetStarted = () => {
    navigate("/dashboard2"); // Navigate to Dashboard 2
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">AutoDoc</div>
        <nav className="sidebar-links">
          <a href="/dashboard" className="nav-link active">Dashboard</a>
          <a href="/patient" className="nav-link">Patient</a>
          <a href="/chat" className="nav-link">Chat</a>
          <div className="bottom-links">
            <a href="/settings" className="nav-link">Settings</a>
            <a href="/logout" className="nav-link">Logout</a>
          </div>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="user-info">
            <span className="greeting">Hey Moni 👋</span>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-card">
            <h2>Welcome to AI Discharge Summary</h2>
            <p>This tool helps you create comprehensive discharge summaries in 4 simple steps:</p>
            <ul>
              <li>1. Enter patient details and department</li>
              <li>2. Upload relevant medical documents and reports</li>
              <li>3. Record your voice notes or observations</li>
              <li>4. Add any additional text notes if needed</li>
            </ul>
            <button className="get-started-button" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="how-to-section">
          <h2>How to use?</h2>
          <div className="how-to-card">
            {/* Video Section */}
            <a
              href="https://www.youtube.com/watch?v=your-video-link"
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              <video
                className="how-to-video"
                controls
                poster="/assets/video-thumbnail.png" // Optional thumbnail image
              >
                <source src="/assets/how-to-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;