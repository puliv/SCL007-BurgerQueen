import React, { Component } from "react"
import { connect } from "react-redux"
import DeleteBtn from "./DeleteBtn";
import Sum from "./Sum";
// import { DeleteOutlined } from '@material-ui/icons/DeleteOutlined';


class CashRegister extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        const clientOrder = this.props.burgerReducer.clientSelection.map((item, index) => {
            return (
                <div key={item.id} id="client_order">
                    <p>{item.menu}</p>
                    <p>{item.price}</p>
                    <DeleteBtn index={index} handleDelete={this.handleDelete} />
                </div>
            )
        })
        return (
            <div>
                {clientOrder}
                <div>
                    <h3>Total a pagar:<Sum /></h3>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CashRegister)
