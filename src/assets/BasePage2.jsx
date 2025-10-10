import React from 'react'
import Plot from 'react-plotly.js'
import '../index.css'

class BasePage2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      xInitial: 0,
      x: 0,
      error: 0.000001,
      fx: "",
      table: [],
    };
  }

  setError = (error) => this.setState({ error: error });

  setFx = (fx) => this.setState({ fx: fx });

  setxInitial = (xInitial) => this.setState({ xInitial: xInitial });

  setx = (x) => this.setState({ x: x });

  calculate = () => {};

  createGraph = () => {
    const tableX = this.state.table.map((t) => t.Iteration);
    const tableY = this.state.table.map((t) => t.Error);

    return (
      <Plot
        data={[
          {
            x: tableX,
            y: tableY,
            type: "scatter",
            mode: "lines+markers",
            name: "",
            line: {
              color: "#4f5dff",
              width: 2,
            },
            marker: {
              color: "#6b7cffff",
              size: 10,
              line: { color: "white", width: 2 },
            },
          },
        ]}
        layout={{
          dragmode: "pan",
          xaxis: { title: "x", gridcolor: "#e0e0e0" },
          yaxis: { title: "f(x)", gridcolor: "#e0e0e0" },
          hoverlabel: {
            bgcolor: "white", 
            font: { color: "rgba(49, 40, 217, 1)", size: 14 }, // สีอักษร + ขนาด
            bordercolor: "white", // เส้นขอบ tooltip
          },
        }}
        config={{
          responsive: true,
          displayModeBar: true,
          displaylogo: false,
          scrollZoom: true,
        }}
        style={{ width: "100%", height: "500px" }}
      />
    );
  }

  renderHead() {
    return (
      <>
        <nav>
          <div>
            <h2 className='logo'> Numer ۶ৎ </h2>
          </div>

          <div className="dropdown">
            <div className="drop-group">
              <button className="drop-button"> Root of Equation </button>
              <div className="drop-select">
                <a href="/graphical"> Graphical  </a>
                <a href="/bisection"> Bisection </a>
                <a href="/false-position"> False Position </a>
                <a href="/one-point"> One Point </a>
                <a href="/newton-raphson"> Newton Raphson </a>
                <a href="/secant"> Secant </a>
                <a href="/taylor-series"> Taylor Series </a>
              </div>
            </div>
            <div className="drop-group">
              <button className="drop-button"> Linear Algebra </button>
              <div className="drop-select">
                <a href="/cramer-rule"> Cramer's rule </a>
                <a href="/gauss-elimination"> Gauss Elimination </a>
                <a href="/gauss-jordan-elimination"> Gauss-Jordan </a>
                <a href="/matrix-inversion"> Matrix Inversion </a>
                <a href="/lu-decomposition"> LU Decomposition </a>
                <a href="/cholesky"> Cholesky </a>
                <a href="/jacobi"> Jacobi Iteration </a>
                <a href="/gauss-seidel"> Gauss-Seidel </a>
                <a href="/conjugate-gradient"> Conjugate Gradient </a>
              </div>
            </div>
            <div className="drop-group">
              <button className="drop-button"> Interpolation </button>
              <div className="drop-select">
                <a href="/newton-divided"> Newton Divided </a>
                <a href="/lagrange"> Lagrange </a>
                <a href="/spline"> Spline </a>
              </div>
            </div>
            <div className="drop-group">
              <button className="drop-button"> Extrapolation </button>
              <div className="drop-select">
                <a href="/simple-regression"> Simple Regression </a>
                <a href="/multiple-regression"> Multiple Regression </a>
              </div>
            </div>
            <div className="drop-group">
              <button className="drop-button"> Integration </button>
              <div className="drop-select">
                <a href="/trapezoidal"> Trapezoidal </a>
                <a href="/composite-trapezoidal"> Composite Trapezoidal </a>
                <a href="/simpson"> Simpson </a>
                <a href="/composite-simpson"> Composite Simpson </a>
              </div>
            </div>
            <div className="drop-group">
              <button className="drop-button"> Differentiation </button>
              <div className="drop-select">
                <a href="/differentiation"> Differentiation </a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }

  createTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Iteration</th>
            <th>x</th>
            <th>% Error</th>
          </tr>
        </thead>

        <tbody>
          {this.state.table.map((t, index) => {
            return (
              <tr key={index}>
                <td>{t.Iteration}</td>
                <td>{t.x.toFixed(6)}</td>
                <td>{t.Error}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  getTitle = () => {
    return "... Method";
  };

  getMethod = () => { };

  renderForm() {
    return (
      <>
        <h2>{this.getTitle()}</h2>
        <form>
          <span className="ip">
            <label>X initial : </label>
            <input
              type="number"
              placeholder="0.00"
              value={this.state.xL}
              onChange={(xInitial) => this.setxInitial(parseFloat(xInitial.target.value))}
            />
          </span>

          {/*<span className="ip">
            <label>X : </label>
            <input
              type="number"
              placeholder="2.00"
              value={this.state.xR}
              onChange={(xr) => this.setxR(parseFloat(xr.target.value))}
            />
          </span>*/}

          <span className="ip">
            <label>Error : </label>
            <input
              type="number"
              placeholder="0.000001"
              value={this.state.error}
              onChange={(e) => this.setError(parseFloat(e.target.value))}
            />
          </span>

          <span className="ip">
            <label>Enter function : </label>
            <input
              type="text"
              placeholder="(x+7)/(x+1)"
              value={this.state.fx}
              onChange={(f) => this.setFx(f.target.value)}
            />
          </span>

          <div>
            <div className="">
              <button className="content-btn" type="button" onClick={this.getExample}>
                Example
              </button>
              <button className="content-btn" type="button" onClick={this.calculate}>
                Calculate
              </button>
              <button className="content-btn" type="submit">Clear</button>
            </div>
          </div>
        </form>
      </>
    );
  }

  render() {
    return (
      <>
        {this.renderHead()}
        <main>
          {this.renderForm()}
          <div className="graph"> {this.createGraph()} </div>
          <div id="table"> {this.createTable()} </div>
        </main>
      </>
    );
  }
}

export default BasePage2
