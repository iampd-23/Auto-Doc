import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/SignupORLogin';
import OTPPage from './pages/OTPPage';
import ErrorPage from './pages/ErrorPage';
import ErrorPage2 from './pages/ErrorPage2';


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTPPage />} />

            <Route path="/error" element={<ErrorPage />} />
            <Route path="/error2" element={<ErrorPage2 />} />

            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
