import React, { Component } from "react"
import "../../App.css"
import InputClient from "./InputClient"
import BreakfastBtn from "./BreakfastBtn"
import LaunchBtn from "./LaunchBtn"

class Waitress extends Component {

    render() {
        return (
            <section className="waitress">
                <div className="container">
                <br/>
                    <InputClient />
                </div>
                <div className="container row col-s6">
                    <BreakfastBtn onClick={this.props.onClick}/>
                </div>
                <div className="container row col-s6">
                    <LaunchBtn onClick={this.props.onClick}/>
                </div>
            </section>
        );
    }
}
export default Waitress