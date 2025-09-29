import React from 'react'
import { evaluate } from "mathjs"
import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      xL: 0,
      xR: 0,
      error: 0.000001,
      fx: "",
      table: []
    }
  }

  bisection = (xl,xr,error) => {
    let xm , xmOld = 1 , fxM , fxR , e=1
    let iteration = 0
    const result = []

    do {
      xm = (xl + xr) / 2.0
      fxM = evaluate(this.state.fx,{x:xm})
      fxR = evaluate(this.state.fx,{x:xr})

      if (fxM * fxR < 0) {
        xl = xm;
      } else {
        xr = xm;
      }

      if (iteration != 0) {
        e = Math.abs((xm - xmOld) / xm)
      }

      xmOld = xm

      result.push({
        Iteration: iteration,
        Xm: xm,
        FxM: fxM,
        Error: iteration == 0 ? "-" : (e * 100).toFixed(6) + "%"
      })

      iteration++
    } while (e > error && iteration < 100)

    this.setState({table: result})
    console.log(result);
  }

  calculate = ()=>{
    this.bisection(parseFloat(this.state.xL),parseFloat(this.state.xR),parseFloat(this.state.error))
  }

  createTable = () => {
    return(
    <table>
      <thead>
        <tr>
          <th>Iteration</th>
          <th>xm</th>
          <th>f(xm)</th>
          <th>% Error</th>
        </tr>
      </thead>

      <tbody>
        {this.state.table.map((t,index) => {
          return (
          <tr key={index}>
            <td>{t.Iteration}</td>
            <td>{t.Xm.toFixed(6)}</td>
            <td>{t.FxM.toFixed(6)}</td>
            <td>{t.Error}</td>
          </tr>
        )})}
      </tbody>
    </table>
    )
  }

  setError = (error) => {
    this.setState({error: error})
  }
  
  setFx = (fx) => {
    this.setState({fx: fx})
  }
  setxL = (xL) => {
    this.setState({xL: xL})
  }
  setxR = (xR) => {
    this.setState({xR: xR})
  }

  render() {
  return (
    <>
      <h2>Bisection Method</h2>
      <form>

        <span>
          <label>X left : </label>
          <input type="number" placeholder="0.00" value={this.state.xL} onChange={(xl)=>this.setxL(parseFloat(xl.target.value))}/>
        </span>

        <span>
          <label>X right : </label>
          <input type="number" placeholder="2.00" value={this.state.xR} onChange={(xr)=>this.setxR(parseFloat(xr.target.value))}/>
        </span>

        <span>
          <label>Error : </label>
          <input type="number" placeholder="0.000001" value={this.state.error} onChange={(e)=>this.setError(parseFloat(e.target.value))}/>
        </span>

        <div>
          <label>Enter f(x) : </label>
          <input type="text" placeholder="x^4-13" value={this.state.fx} onChange={(f)=>this.setFx(f.target.value)}/>
          <button type='button' onClick={this.calculate}>Calculate</button>
          <button type='submit' >Clear</button>
        </div>

      </form>

        <div id='table'> {this.createTable()} </div>
      </>
    )
  }
}

export default App
