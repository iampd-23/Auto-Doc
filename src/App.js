import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
