import React from 'react';
import { matrix } from 'mathjs';
import NavBar from './NavBar';
import { MathJaxContext } from 'better-react-mathjax';
import { MathJax } from 'better-react-mathjax'; 

class BasePage3 extends NavBar {
  constructor(props) {
    super(props);
    this.state = {
      n: 3,
      error: 0.000001,
      A: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      B: ["", "", ""],
      result: null
    };
    this.cal = null
  }

  getTitle = () => {
    return ".. Method";
  };

  setError = (error) => this.setState({ error: error });

  clear = () => {
    window.location.reload();
  }

  handle_n = (event) => {
    const value = event.target.value;
    
    if (value === "") {
        this.setState({ n: "" });
        return;
    }

    const N = parseInt(value, 10);

    if (isNaN(N) || value < 2 || value > 10) { 
        return;
    }

    const A = Array(N).fill(null).map(() => Array(N).fill(""));
    const B = Array(N).fill("");

    this.setState({
      n: N,
      A: A,
      B: B,
    });
  };

  handleMatrixChange = (row, col, value) => {
    const newA = [...this.state.A];
    newA[row][col] = value;
    this.setState({ A: newA , result: null});
  };

  handleVectorChange = (index, value) => {
    const newB = [...this.state.B];
    newB[index] = value;
    this.setState({ B: newB , result: null});
  };

  renderMatrix = () => {
    const { n, A, B } = this.state;

    return (
      <div className="div-matrix">
        {/* Matrix A */}
        <div>
          <label>A</label>
          <div>
            <div className='div-col-matrix'>
              {A.map((row, i) => (
                <div key={i}>
                  {row.map((val, j) => (
                    <input
                      key={j}
                      type="text"
                      value={val}
                      onChange={(e) => this.handleMatrixChange(i, j, e.target.value)}
                      placeholder="0"
                      className='ip-matrix'
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vector B */}
        <div>
          <label>B</label>
          <div>
            <div className='div-col-matrix'>
              {B.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) => this.handleVectorChange(i,e.target.value)}
                  placeholder="0"
                  className='ip-matrix'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderForm = () => {
    return(
      <>
        <h2>{this.getTitle()}</h2>
        <form>
          <div className='ip'>
            <label> Matrix Size (nxn) : </label>
            <input type='number' min='0' max='10' placeholder='0' value={this.state.n} onChange={this.handle_n} />
            <label> (2-10) </label>
          </div>
        </form>
      </>
    )
  }

  renderSolution = () => {
    if (!this.state.result) return null;
    const latexString = this.cal.getSolution(this.state.result);
    return (
      <>
        <MathJax>{`$$ ${latexString} $$`}</MathJax>
      </>
    );
  }

  calculate = () => {};

  render() {
    return (
      <>
        {this.renderHead()}
        <main>
          {this.renderForm()}
          <div> {this.renderMatrix()} </div>
          <div>
              <button className="content-btn" type="button" onClick={this.calculate}> Calculate </button>
              <button className="content-btn" type="submit" onClick={this.clear}>Clear</button>
          </div>
          <h2> Solution </h2>
          <div className='div-mathjax'> 
            <MathJaxContext>
              {this.renderSolution()} 
            </MathJaxContext>
          </div>
        </main>
      </>
    );
  }
}

export default BasePage3;