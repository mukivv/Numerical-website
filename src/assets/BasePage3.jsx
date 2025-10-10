import React from 'react'
import '../index.css'
import { im, matrix } from 'mathjs';
import BasePage from './BasePage';

class BasePage3 extends NavBar {
  constructor(props) {
    super(props);

    this.state = {
        n: 3,
        A: [    ["", "", ""],
                ["", "", ""],
                ["", "", ""], ],

        X: ["x1", "x2", "x3"],
        B: ["", "", ""],
        table: [],
    };
  }

  getTitle = () => {
    return "... Method";
  };

  handle_n = (event) => {
    const N = parseInt(event.target.value, 10);
    if (N < 2 || N > 10) return;

    // สร้าง Matrix ใหม่ที่มีขนาด n x n และ Vector B ขนาด n x 1
    const A = Array(N).map(() => Array(N));
    const B = Array(N);

    this.setState({
        n: N,
        A: A,
        B: B,
    });
    };

    renderMatrix = () => {

    }

    render() {
        return(
            <>
                <h2> {this.getTitle()} </h2>
                
            </>
        )
    }

}
export default BasePage3