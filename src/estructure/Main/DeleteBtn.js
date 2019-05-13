import React, { Component } from "react"
import { connect } from "react-redux"
import { deleteItem } from "../../redux/actions/burgerActions";

class DeleteBtn extends Component {

    handleDelete = (index) => {
        this.props.deleteItemFromOrder(index)
    }

    render() {
        return (
            <button onClick={() => this.handleDelete(this.props.index)} className="tdDos">X</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
};
const mapActionToProps = (dispatch) => {
    return {
        deleteItemFromOrder: deleteItem(dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(DeleteBtn)