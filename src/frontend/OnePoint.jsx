import BasePage2 from "../assets/BasePage2"
import { OnePoint } from '../numer/OnePoint.js'

class OnePointPage extends BasePage2 {


  getTitle = () => {
    return " ⊹ ࣪ ˖ One-Point Iteration Method  ⋆.𐙚 ̊ "
  }

  calculate = ()=>{
      try {
        if (!this.state.fx){
          alert ("Please enter a function")
          return;
        }
      
        const o = new OnePoint(this.state.fx,this.state.xInitial,this.state.error)
        this.setState({ table: o.calculate()})
      } catch (error){
        alert(error.message)
      }
    }
}

export default OnePointPage