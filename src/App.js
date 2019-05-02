import React, { Component } from 'react';
import './App.css';
import Header from "./estructure/Header/Header"
import Main from "./estructure/Main/Main"
import { connect } from 'react-redux'
// import Kitchen from "./estructure/Main/Kitchen"
import "materialize-css/dist/css/materialize.min.css"
// import DenseAppBar from "./estructure/Header/Example"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderArr: []
    }
    this.functionPush = this.functionPush.bind(this);
  }
  functionPush(e) {
    let pushedData = this.state.orderArr;
    pushedData.push(e);
    this.setState({
      ...this.state,
      orderArr: pushedData
    })
    return (
      <div>
        {this.state.orderArr}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <Main onClick={this.functionPush} />
      </div>
    );
  }
}

export default connect()(App);
