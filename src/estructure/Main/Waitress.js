import React, { Component } from "react"
import { connect } from "react-redux"
import "../../App.css"
import InputClient from "./InputClient"
import BreakfastBtn from "./BreakfastBtn"
import LaunchBtn from "./LaunchBtn"

class Waitress extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         clientSelection: ""
    //     }
    // }

    render() {
        return (
            <section className="waitress">
                <div className="container">
                    <br />
                    <InputClient />
                </div>
                <div className="container row col-s6">
                    <BreakfastBtn onClick={this.props.handleClick} />
                </div>
                <div className="container row col-s6">
                    <LaunchBtn onClick={this.props.onClick} />
                </div>
            </section>
        );
    }
}

export default connect()(Waitress)