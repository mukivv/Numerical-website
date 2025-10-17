import React from 'react';
import BasePage3 from "../../assets/BasePage3";
import { Jacobi } from '../../numer/Linear Algebra/Jacobi.js';

class JacobiPage extends BasePage3 {

    getTitle = () => {
        return "⋆˖˚ ༘𐙚  Gauss-Jordan Elimination ⋆.°༘⋆"
    }

    calculate = () => {
        try {
            this.cal = new Jacobi(this.state.n, this.state.error);
            this.setState({ result: this.cal.calculate(this.state.A, this.state.B) });
            
        } catch (error) {
            alert(error.message);
        }
    }

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
}

export default JacobiPage