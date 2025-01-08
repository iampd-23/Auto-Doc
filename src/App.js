import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/SignupORLogin/SignupORLogin';
import OTPPage from './pages/SignupORLogin/OTPPage';
import ErrorPage from './pages/ErrorPages/ErrorPage';
import ErrorPage2 from './pages/ErrorPages/ErrorPage2';
import ProfileInitial from './pages/Profile/profileInitial';
import Dashboard1 from './pages/Dashboards/Dashboard1';
import Dashboard2 from './pages/Dashboards/Dashboard2';
import SummaryPage from "./pages/Dashboards/SummaryPage";


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTPPage />} />

            <Route path="/error" element={<ErrorPage />} />
            <Route path="/error2" element={<ErrorPage2 />} />
            <Route path="/profile" element={<ProfileInitial />} />

            <Route path="/dashboard" element={<Dashboard1 />} />
            <Route path="/dashboard2" element={<Dashboard2 />} />
            <Route path="/summary" element={<SummaryPage />} />

            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
