import React, { Component } from "react"
import "../../App.css"
import desayuno from "../../desayuno.json"

class BreakfastBtn extends Component {
    constructor() {
        super();
        this.state = {
            desayuno
        }
    }
    render() {
        const menu = this.state.desayuno.map((item) => {
            return (
                <div key={item.key}>
                    <button>{item.menu}</button>
                    <button>{item.precio}</button>
                </div>
            )
        })
        return (
            <div>
                {menu}
            </div>
        )
    }
}

export default BreakfastBtn