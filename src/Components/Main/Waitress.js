import React, { Component } from "react"
import { connect } from "react-redux"
import "../../App.css"
import breakfast from "../../breakfast.json"
import launch from "../../launch.json"
import Items from "./Items";


class Waitress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast,
      launch,
      breakfastMenu: '',
      launchMenu: ''
    }
  }

  componentDidMount() {
    this.setState({
      breakfastMenu: this.state.breakfast.map((item) => {
        return (
          <Items key={item.id} item={item} />
        )
      }),
      launchMenu: this.state.launch.map((item) => {
        return (
          <Items key={item.id} item={item} />
        )
      })
    })
  }

  render() {
  const { breakfastMenu, launchMenu } = this.state

    return (
      <React.Fragment>
        <div>
          <h3>Menú Desayuno</h3>
          {breakfastMenu}
          <h3>Menú Almuerzo</h3>
          {launchMenu}
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Waitress)