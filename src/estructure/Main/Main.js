import React, { Component } from "react"
import Waitress from "./Waitress"
import "../../App.css"
import Kitchen from "./Kitchen";


class Main extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        // const orderArr = this.state.orderArr;
        // console.log(orderArr);
        return (
            <main className="container">
                <div className="row">
                    <div className="col s8">
                        <Waitress onClick={this.props.onClick} />
                    </div>
                    <div>
                        <Kitchen />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main