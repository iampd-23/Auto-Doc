// Initial Profile 

import React, { useState } from "react";
import "../../styles/profileInitial.scss"; 

const EditProfile = () => {
  // Example state for controlled inputs
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
    // Do something with the form data
    alert("Profile Saved!");
  };

  return (
    <div className="edit-profile-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          AutoDoc
        </div>
        <nav className="sidebar-links">
          <div className="nav-link">Settings</div>
          <div className="nav-link">Logout</div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="main-content">
        {/* Header / Topbar */}
        <header className="topbar">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="user-info">
            <span className="notification-bell">🔔</span>
            <span className="language">English ▼</span>
            <span className="user-name">Moni Roy (Admin)</span>
          </div>
        </header>

        {/* Content section */}
        <div className="content">
          <h1 className="page-title">Edit Profile</h1>

          {/* White Card */}
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
              {/* First Name */}
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <label>Last Name</label>
                <input
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Your Email</label>
                <input
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  name="phone"
                  placeholder="+91-"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Hospital Name */}
              <div className="form-group">
                <label>Hospital Name</label>
                <input
                  name="hospital"
                  placeholder="Enter your hospital name"
                  value={formData.hospital}
                  onChange={handleChange}
                />
              </div>

              {/* Gender */}
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