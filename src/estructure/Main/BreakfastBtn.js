import React, { Component } from "react"
import "../../App.css"
import breakfast from "../../breakfast.json"

class BreakfastBtn extends Component {
    constructor() {
        super();
        this.state = {
            breakfast
        }
    }
    render() {
        const menu = this.state.breakfast.map((item) => {
            return (
                <div>
                    <table>
                        <tr>
                            <td><button onClick={() => this.props.onClick(item)}>{item.menu}</button></td>
                            <td className="tdDos" onClick={() => this.props.onClick(item)}>${item.precio}</td>
                        </tr>
                    </table>
                </div>
            )
        })
        return (
            <div>
                <h4>Desayuno</h4>
                {menu}
            </div>
        )
    }
}

export default BreakfastBtn