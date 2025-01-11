import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Dashboard1.scss"; // SCSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Logout handler to navigate to the signup page
  const handleLogout = (e) => {
    e.preventDefault();  // Prevent default anchor behavior
    navigate("/signup"); // Redirect to signup page
  };

  // Handler for the "Get Started" button
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
          <a href="/history" className="nav-link">History</a>
        </nav>

        {/* Bottom Links with Icons */}
        <div className="bottom-links">
          <a href="/settings" className="nav-link">
            <img src="/assets/settings.png" alt="Settings" className="icon" />
            Settings
          </a>
          <a href="/signup" onClick={handleLogout} className="nav-link">
            <img src="/assets/logout.png" alt="Logout" className="icon" />
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
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
            <a
              href="https://www.youtube.com/watch?v=your-video-link"
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              <video
                className="how-to-video"
                controls
                poster="/assets/video-thumbnail.png"
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