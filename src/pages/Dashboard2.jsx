import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard2.scss";

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    id: "",
    department: "Internal Medicine",
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [voiceNote, setVoiceNote] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const navigate = useNavigate();

  const handlePatientDetailsChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file) => ({
      name: file.name,
      status: "uploading",
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);

    setTimeout(() => {
      setUploadedFiles((prevFiles) =>
        prevFiles.map((file) =>
          updatedFiles.some((f) => f.name === file.name)
            ? { ...file, status: file.name.endsWith(".pdf") ? "success" : "failed" }
            : file
        )
      );
    }, 2000);
  };

  const handleRetry = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.name === fileName ? { ...file, status: "uploading" } : file
      )
    );

    setTimeout(() => {
      setUploadedFiles((prevFiles) =>
        prevFiles.map((file) =>
          file.name === fileName
            ? { ...file, status: file.name.endsWith(".pdf") ? "success" : "failed" }
            : file
        )
      );
    }, 2000);
  };

  useEffect(() => {
    const validateStep = (step) => {
      if (step === 0) {
        return patientDetails.name.trim() && patientDetails.id.trim();
      } else if (step === 1) {
        return uploadedFiles.some((file) => file.status === "success");
      } else if (step === 2) {
        return voiceNote;
      } else if (step === 3) {
        return additionalNotes.trim();
      }
      return false;
    };

    if (validateStep(currentStep)) {
      setTimeout(() => {
        if (currentStep < 3) {
          setCurrentStep((prev) => prev + 1);
        }
      }, 500);
    }
  }, [patientDetails, uploadedFiles, voiceNote, additionalNotes, currentStep]);

  const handleGenerateSummary = () => {
    navigate("/summary");
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">Auto Doc</div>
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
        {/* Progress Steps */}
        <div className="progress-steps">
          {["Patient Details", "Upload Documents", "Voice Notes", "Additional Notes"].map((step, index) => (
            <div
              key={index}
              className={`step ${index <= currentStep ? "completed" : ""}`}
            >
              <div className="circle">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>

        {/* Step Cards */}
        <div className="step-cards">
          {/* Step 1: Patient Details */}
          <div className="card">
            <h3>Patient Details <br /> (Step 1)</h3>
            <div className="patient-details-form">
              <div className="form-group">
                <label>Patient Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter patient name"
                  value={patientDetails.name}
                  onChange={handlePatientDetailsChange}
                />
              </div>
              <div className="form-group">
                <label>Patient ID</label>
                <input
                  type="text"
                  name="id"
                  placeholder="Enter patient ID"
                  value={patientDetails.id}
                  onChange={handlePatientDetailsChange}
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select
                  name="department"
                  value={patientDetails.department}
                  onChange={handlePatientDetailsChange}
                >
                  <option value="Internal Medicine">Internal Medicine</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Documents */}
          <div className="card">
            <h3>Documents <br /> (Step 2)</h3>
            <div className="upload-area">
              <p>Drag and drop files here or</p>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="file-input"
              />
            </div>
            <ul className="uploaded-files">
              {uploadedFiles.map((file, index) => (
                <li key={index} className={`file-item ${file.status}`}>
                  {file.name}
                  {file.status === "failed" && (
                    <button
                      className="retry-button"
                      onClick={() => handleRetry(file.name)}
                    >
                      Retry
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3: Voice Notes */}
          <div className="card">
            <h3>Voice Notes <br /> (Step 3)</h3>
            <button
              className="record-button"
              onClick={() => setVoiceNote(true)}
            >
              🔴 Start Recording
            </button>
            <div className="transcription">Start speaking to see transcription...</div>
          </div>

          {/* Step 4: Additional Notes */}
          <div className="card">
            <h3>Additional Notes <br /> (Step 4)</h3>
            <textarea
              className="additional-notes-textarea"
              placeholder="Enter any additional notes here..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Generate Summary Button */}
        <div className="generate-summary-container">
          <button
            className="generate-summary-button"
            onClick={handleGenerateSummary}
          >
            Generate Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;