import React, { Component } from "react"
import { connect } from "react-redux"
import DeleteBtn from "./DeleteBtn";
import Sum from "./Sum";


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
              <p>{item.menu}</p>
              <p>{item.price}</p>
              <DeleteBtn index={index} handleDelete={this.handleDelete} />
            </div>
          )
        })
      })
    }

  }


  render() {
    const { clientOrder } = this.state

    console.log('clientOrder', clientOrder)

    return (
      <React.Fragment>
        <div className="client-order">
          {clientOrder}
        </div>
        <div>
          <h3>Total a pagar:<Sum /></h3>
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
const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CashRegister)
