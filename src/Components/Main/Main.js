import React, { Component } from "react"
import Waitress from "./Waitress"
import "../../App.css"
import CashRegister from "./CashRegister";


class Main extends Component {
  render() {
    return (
      <React.Fragment>
          <div>
            <Waitress />
            <CashRegister />
          </div>
      </React.Fragment>
    )
  }
}

export default Main