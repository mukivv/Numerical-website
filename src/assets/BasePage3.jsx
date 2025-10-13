import React from 'react';
import { matrix } from 'mathjs';
import NavBar from './NavBar';

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
      X: ["x1", "x2", "x3"],
      B: ["", "", ""]
    };
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
    
    // 1. ถ้าค่าว่าง ให้ตั้งค่า n เป็นค่าว่างเพื่อเคลียร์ช่อง input
    if (value === "") {
        this.setState({ n: "" });
        return; // ออกจากการทำงาน
    }

    const N = parseInt(value, 10);

    // 2. ตรวจสอบว่าแปลงเป็นตัวเลขได้หรือไม่ และอยู่ในช่วง 2-10 หรือไม่
    //    เนื่องจากคุณกำหนด min='0' ใน JSX แต่ Matrix Size ควรเริ่มที่ 2
    if (isNaN(N) || value > 10) { 
        // ไม่ต้องทำอะไรถ้าเป็นตัวเลขที่ไม่อยู่ในช่วงที่ยอมรับ (2-10)
        return;
    }

    // สร้าง Matrix ใหม่ที่มีขนาด n x n และ Vector B ขนาด n x 1
    const A = Array(N).fill(null).map(() => Array(N).fill(""));
    const B = Array(N).fill("");
    const X = Array(N).fill(null).map((_, i) => `x${i + 1}`);

    this.setState({
      n: N,
      A: A,
      B: B,
      X: X
    });
  };

  handleMatrixChange = (row, col, value) => {
    const newA = [...this.state.A];
    newA[row][col] = value;
    this.setState({ A: newA });
  };

  handleVectorChange = (index, value) => {
    const newB = [...this.state.B];
    newB[index] = value;
    this.setState({ B: newB });
  };

  renderMatrix = () => {
    const { n, A, X, B } = this.state;

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

        {/* Vector X */}
        <div>
          <label>X</label>
          <div>
            <div className='div-col-matrix' >
              {X.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  readOnly
                  className='ip-matrix'
                  id = 'gray-matrix'
                />
              ))}
            </div>
          </div>
        </div>

        {/* เครื่องหมาย = */}
        <label>=</label>

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
                  onChange={(e) => this.handleVectorChange(i, e.target.value)}
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

          <div className='ip'>
            <label> Error : </label>
            <input type='number' placeholder='0' value={this.state.error} onChange={(e) => this.setError(parseFloat(e.target.value))} />
          </div>
        </form>
      </>
    )
  }

  renderSolution = () => {
    return null;
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
          <div> {this.renderSolution()} </div>
        </main>
      </>
    );
  }
}

export default BasePage3;