import React, { useState } from "react";
import "../../styles/settings.scss";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hospital: "",
    gender: "Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Profile Saved!");
  };

  return (
    <div className="edit-profile-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">AutoDoc</div>

        {/* Top Links */}
        <nav className="sidebar-links">
          <a href="/dashboard" className="nav-link">
            {/* <img src="/assets/dashboard-icon.png" alt="Dashboard" /> */}
            Dashboard
          </a>
          <a href="/history" className="nav-link active">
            {/* <img src="/assets/profile-icon.png" alt="Profile" /> */}
            History
          </a>
        </nav>

        {/* Bottom Links */}
        <div className="bottom-links">
          {/* <a href="/settings" className="nav-link">
            <img src="/assets/settings.png" alt="Settings" />
            Settings
          </a> */}
          <a href="/logout" className="nav-link">
            <img src="/assets/logout.png" alt="Logout" />
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <div className="content">
          <h1 className="page-title">Edit Profile</h1>

          {/* Profile Card */}
          <div className="edit-profile-card">
            {/* Upload Photo */}
            <div className="upload-section">
              <div className="upload-photo">
                <i className="camera-icon">📷</i>
              </div>
              <p className="upload-text">Upload Photo</p>
            </div>

            {/* Form */}
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  name="phone"
                  placeholder="+91-"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Hospital Name</label>
                <input
                  name="hospital"
                  placeholder="Enter your hospital name"
                  value={formData.hospital}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Save Button */}
            <div className="save-button-container">
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;