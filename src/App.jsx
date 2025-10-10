import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Graphical from './frontend/Root of Equation/Graphical.jsx';
import Bisection from './frontend/Root of Equation/Bisection.jsx';
import Home from './frontend/Home.jsx';
import FalsePosition from './frontend/Root of Equation/FalsePosition.jsx';
import OnePoint from './frontend/Root of Equation/OnePoint.jsx';
import NewtonRaphson  from './frontend/Root of Equation/NewtonRaphson.jsx';
import Secant from './frontend/Root of Equation/Secant.jsx';


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
            <Route path="/one-point" element={<OnePoint />} />
            <Route path="/newton-raphson" element={<NewtonRaphson />} />
            <Route path="/secant" element={<Secant />} />
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
