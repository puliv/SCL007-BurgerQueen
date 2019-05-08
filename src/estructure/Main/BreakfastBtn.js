import React, { Component } from "react"
import { connect } from "react-redux"
import "../../App.css"
import breakfast from "../../breakfast.json"
// import { selectedMenu } from "../../redux/actions/burgerActions";
import ItemBreakfast from "./ItemBreakfast";

class BreakfastBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakfast
        }
    }

    render() {
        const menu = this.state.breakfast.map((item) => {
            return (
                <ItemBreakfast key={item.id} item={item}></ItemBreakfast>
            )
        })
        return (
            menu
        )
    }
}


export default connect()(BreakfastBtn)
