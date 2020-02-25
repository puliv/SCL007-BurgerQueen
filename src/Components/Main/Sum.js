import React, { Component } from "react";
import { connect } from "react-redux";

class Sum extends Component {

  render() {
    const orderValue = this.props.burgerReducer.clientSelection.reduce((accumulator, item) => {
      return (
        accumulator + item.price
      )
    }, 0
    )
    return (
      <div>
        {orderValue}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sum)