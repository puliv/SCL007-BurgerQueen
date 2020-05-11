import React, { Component } from "react"
import { connect } from "react-redux"
import { selectedMenu } from "../../redux/actions/burgerActions"
import Button from '@material-ui/core/Button'

class Items extends Component {

  handleClick = () => {
    this.props.addItemToOrder(this.props.item);
  }

  render() {
    return (
      <div className="item" onClick={this.handleClick}>
        <Button
          className="item-button"
          variant="contained"
          color="secondary"
          size="small">
          {this.props.item.menu}&nbsp;${this.props.item.price}
        </Button>
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