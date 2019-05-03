import React, { Component } from 'react';
import './App.css';
import Header from "./estructure/Header/Header"
import Main from "./estructure/Main/Main"
import { connect } from 'react-redux'
import "materialize-css/dist/css/materialize.min.css"
class App extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   aState: []
  // }
  // }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default connect()(App);
