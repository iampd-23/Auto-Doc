import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/SignupORLogin/SignupORLogin';
import OTPPage from './pages/SignupORLogin/OTPPage';
import ErrorPage from './pages/ErrorPages/ErrorPage';
import ErrorPage2 from './pages/ErrorPages/ErrorPage2';
import Settings from './pages/Profile/settings';
import Dashboard1 from './pages/Dashboards/Dashboard1';
import Dashboard2 from './pages/Dashboards/Dashboard2';
import SummaryPage from "./pages/Dashboards/SummaryPage";
import PricingPage from './pages/Pricing/pricingpage';
import PricingPage2 from './pages/Pricing/pricingpage2';
import SubscriptionPage from './pages/Pricing/subscriptionpage';


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTPPage />} />

            <Route path="/error" element={<ErrorPage />} />
            <Route path="/error2" element={<ErrorPage2 />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/dashboard" element={<Dashboard1 />} />
            <Route path="/dashboard2" element={<Dashboard2 />} />
            <Route path="/summary" element={<SummaryPage />} />

            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/pricing2" element={<PricingPage2 />} />
            <Route path="/subscription" element={<SubscriptionPage />} />

            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
