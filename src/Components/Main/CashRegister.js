import React, { Component } from "react"
import { connect } from "react-redux"
import Sum from "./Sum";
import Button from '@material-ui/core/Button'
import { deleteItem } from "../../redux/actions/burgerActions";


class CashRegister extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clientOrder: []
    }
  }


  componentDidMount() {
    const { clientSelection } = this.props

    if (clientSelection) {
      this.setState({
        clientOrder: clientSelection.map((item, index) => {
          return (
            <div key={item.id} id="client_order">
              <span>{item.menu} {item.price}</span>
              <button onClick={() => this.props.deleteItemFromOrder(index)} className="delete-item">X</button>
            </div>
          )
        })
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { clientSelection } = this.props

    if (prevProps.clientSelection !== clientSelection) {
      this.setState({
        clientOrder: clientSelection.map((item, index) => {
          return (
            <div key={item.id} className="client-order">
              <span>{item.menu} {item.price}</span>
              <button onClick={() => this.props.deleteItemFromOrder(index)} className="delete-item">X</button>
            </div>
          )
        })
      })
    }
  }

  render() {
    const { clientOrder } = this.state

    return (
      <React.Fragment>
        {clientOrder}
        <div>
          <h3>Total a pagar:<Sum /></h3>

          <Button
            className="send-button"
            variant="contained"
            color="primary"
            size="medium">
            Enviar a cocina
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
    clientSelection: state.burgerReducer.clientSelection
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItemFromOrder: deleteItem(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CashRegister)
