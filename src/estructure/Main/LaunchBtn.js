import React, { Component } from "react"
import "../../App.css"
import almuerzo from "../../almuerzo.json"

class LaunchBtn extends Component {
    constructor() {
        super();
        this.state = {
            almuerzo
        }
    }
    render() {
        const menu = this.state.almuerzo.map((item) => {
            return (
                <div>
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

export default LaunchBtn