import React, { Component } from "react"
import { connect } from "react-redux"
import { selectedMenu } from "../../redux/actions/burgerActions";


class Items extends Component {

  handleClick = () => {
    this.props.addItemToOrder(this.props.item);
  }

  render() {
    return (
      <div className="item" onClick={this.handleClick}>
        <span>{this.props.item.menu}</span>
        <span>${this.props.item.price}</span>
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
    addItemToOrder: selectedMenu(dispatch)
  }
};

export default connect(mapStateToProps, mapActionsToProps)(Items)