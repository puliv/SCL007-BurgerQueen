import React, { Component } from "react"
import "../../App.css"
import launch from "../../launch.json"

class LaunchBtn extends Component {
    constructor() {
        super();
        this.state = {
            launch
        }
    }
    render() {
        const menu = this.state.launch.map((item) => {
            return (
                <div>
                    <table>
                        <tr>
                            <td className="tdUno" onClick={() => this.props.onClick(item)}>{item.menu}</td>
                            <td className="tdDos" onClick={() => this.props.onClick(item)}>${item.precio}</td>
                        </tr>
                    </table>
                </div>

            )
        })
        return (
            <div>
                <h4>Menú para el resto del día</h4>
                {menu}
            </div>
        )
    }
}

export default LaunchBtn