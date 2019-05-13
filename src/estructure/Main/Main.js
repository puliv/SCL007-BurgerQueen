import React, { Component } from "react"
import Waitress from "./Waitress"
import "../../App.css"
import Kitchen from "./Kitchen";
import CashRegister from "./CashRegister";


class Main extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col s6 main">
                        <Waitress />
                    </div>
                    <div className="col s6 main">
                        <CashRegister />
                    </div>
                    {/* <div>
                        <Kitchen />
                    </div> */}
                </div>
            </main>
        )
    }
}

export default Main