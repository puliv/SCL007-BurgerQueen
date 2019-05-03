import React, { Component } from "react"
import { connect } from "react-redux"
import "../../App.css"
import breakfast from "../../breakfast.json"
import { selectedMenu } from "../../redux/actions/burgerActions";

class BreakfastBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakfast,
        }
    }

    handleClick = (e) => {
        this.props.clientOrder(this.state.clientSelection);
        this.setState ({
            ...this.state,
            clientSelection: this.state.clientOrder
        })
        // console.log("funciona")
    }

    render() {
        const menu = this.state.breakfast.map((item) => {
            return (
                <div key={item.id}>
                    <table>
                        <tbody>
                            <tr>
                                <td><button onClick={this.handleClick} >{item.menu}</button></td>
                                <td className="tdDos">${item.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
        return (
            <div>
                <h4> Menú para Desayuno </h4>
                {menu}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        clientOrder: selectedMenu(dispatch)
    }
};

export default connect(mapStateToProps, mapActionsToProps)(BreakfastBtn)
