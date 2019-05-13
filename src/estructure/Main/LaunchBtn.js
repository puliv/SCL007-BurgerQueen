import React, { Component } from "react"
import "../../App.css"
import launch from "../../launch.json"
import Items from "./Items";

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
                <Items key={item.id} item={item}/>
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