export class Bisection {
  constructor() {
    this.maxIter = 50;
    this.state = {
      xL: 0,
      xR: 0,
      error: 0.000001,
      fx: "",
      table: [],
    };
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
}
