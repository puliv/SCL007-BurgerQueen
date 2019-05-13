import React, { Component } from "react"
import { connect } from "react-redux"
import "../../App.css"
import breakfast from "../../breakfast.json"
// import { selectedMenu } from "../../redux/actions/burgerActions";
import Items from "./Items";

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
                <Items key={item.id} item={item} />
            )
        })
        return (
            <div>
                <h4>Menú Desayuno</h4>
                {menu}
            </div>
        )
    }
}


export default connect()(BreakfastBtn)
