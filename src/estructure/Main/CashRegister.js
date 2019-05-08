import React, { Component } from "react"
import { connect } from "react-redux"
import DeleteBtn from "./DeleteBtn";
// import { DeleteOutlined } from '@material-ui/icons/DeleteOutlined';


class CashRegister extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        const clientOrder = this.props.burgerReducer.clientSelection.map((item, index) => {
            return (
                <div key={item.id}>
                    <table>
                        <tbody>
                            <tr>
                                <td>{item.menu}</td>
                                <td className="tdDos">{item.price}</td>
                                <DeleteBtn index={index} handleDelete={this.handleDelete} />
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
        return (
            clientOrder
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
