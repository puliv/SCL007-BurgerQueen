import React, { Component } from "react"
import { connect } from "react-redux"
// import burgerReducer from "../../redux/reducers/burgerReducer";
import { selectedMenu } from "../../redux/actions/burgerActions";

class ItemBreakfast extends Component {
    // constructor(props){
    //     super(props);
    // }

    handleClick = (e) => {
        this.props.addItemToOrder(this.props.item);
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={this.handleClick}>{this.props.item.menu}</button></td>
                            <td className="tdDos">${this.props.item.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        addItemToOrder: selectedMenu(dispatch)
    }
};

export default connect(mapStateToProps, mapActionsToProps)(ItemBreakfast)