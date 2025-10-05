import '../index.css'
import { Graphical } from '../numer/Graphical.js'
import BasePage from '../assets/BasePage.jsx'


class GraphicalPage extends BasePage {
  
  getTitle = () => {
    return " ⊹ ࣪ ˖ Graphical Method  ⋆.𐙚 ̊ "
  }

  calculate = ()=>{
    try {
      if (!this.state.fx){
        alert ("Please enter a function")
        return;
      }
    
      const g = new Graphical(this.state.fx,parseFloat(this.state.xL),parseFloat(this.state.xR),parseFloat(this.state.error))
      this.setState({ table: g.calculate()})
    } catch (error){
      alert(error.message)
    }
  }
}

export default GraphicalPage
