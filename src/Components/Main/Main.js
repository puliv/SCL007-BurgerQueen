import React, { Component } from "react"
import Waitress from "./Waitress"
import "../../App.css"
import CashRegister from "./CashRegister";


class Main extends Component {
  render() {
    return (
      <div className="main" >
          <div className="main-waitress">
            <Waitress />
          </div>
          <div className="main-cashregister">
            <CashRegister />
          </div>
      </div>
    )
  }
}

export default Main