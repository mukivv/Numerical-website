import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Graphical from './frontend/Graphical.jsx';
import Bisection from './frontend/bisection.jsx';
import Home from './frontend/Home.jsx';
import { useEffect } from 'react';
import FalsePosition from './frontend/FalsePosition.jsx';


function AppInner() {

  return (
    <>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
              {/* Public routes that don't require authentication */}
            <Route path="/graphical" element={<Graphical />} />
            <Route path="/bisection" element={<Bisection />} />
            <Route path="/false-position" element={<FalsePosition />} />
            {/* ถ้าเข้า path ที่ไม่เจอ -> redirect ไปหน้า HomePage */}
            <Route path="*" element={<Navigate to="/bisection" replace />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App;
