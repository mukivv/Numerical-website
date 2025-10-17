import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'katex/dist/katex.min.css';

import Graphical from './frontend/Root of Equation/Graphical.jsx';
import Bisection from './frontend/Root of Equation/Bisection.jsx';
import FalsePosition from './frontend/Root of Equation/FalsePosition.jsx';
import OnePoint from './frontend/Root of Equation/OnePoint.jsx';
import NewtonRaphson  from './frontend/Root of Equation/NewtonRaphson.jsx';
import Secant from './frontend/Root of Equation/Secant.jsx';

import CramerRule from './frontend/Linear Algebra/CramerRule.jsx';
import GaussElimination from './frontend/Linear Algebra/GaussElimination.jsx';
import GaussJordan from './frontend/Linear Algebra/GaussJordan.jsx';
import MatrixInversion from './frontend/Linear Algebra/MatrixInversion.jsx';
import LUDecomposition from './frontend/Linear Algebra/LUDecomposition.jsx';
import Cholesky from './frontend/Linear Algebra/Cholesky.jsx';
import Jacobi from './frontend/Linear Algebra/Jacobi.jsx';
import GaussSeidel from './frontend/Linear Algebra/GaussSeidel.jsx';

function AppInner() {

  return (
    <>
      <main>
        <Routes>
            {/* ------------ Root of Equation --------------*/}
            <Route path="/graphical" element={<Graphical />} />
            <Route path="/bisection" element={<Bisection />} />
            <Route path="/false-position" element={<FalsePosition />} />
            <Route path="/one-point" element={<OnePoint />} />
            <Route path="/newton-raphson" element={<NewtonRaphson />} />
            <Route path="/secant" element={<Secant />} />
            {/* ------------ Linear Algebra --------------*/}
            <Route path="/cramer-rule" element={<CramerRule />} />
            <Route path="/gauss-elimination" element={<GaussElimination />} />
            <Route path="/gauss-jordan" element={<GaussJordan />} />
            <Route path="/matrix-inversion" element={<MatrixInversion />} />
            <Route path="/lu-decomposition" element={<LUDecomposition />} />
            <Route path="/cholesky" element={<Cholesky />} />
            <Route path="/jacobi" element={<Jacobi />} />
            <Route path="/gauss-seidel" element={<GaussSeidel />} />
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
