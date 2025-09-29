import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Bisection from './frontend/bisection.jsx';
import { useEffect } from 'react';


function AppInner() {

  return (
    <>
      <main>
        <Routes>
            {/*<Route path="/" element={<HomePage />} />*/}
              {/* Public routes that don't require authentication */}
            <Route path="/bisection" element={<Bisection />} />
            
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
