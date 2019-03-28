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
                <div className="container row col s6 menus">
                    <BreakfastBtn />
                </div>
                <div className="container row col s6 menus">
                    <LaunchBtn />
                </div>
            </section>
        );
    }
}
export default Waitress