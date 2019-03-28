import React, { Component } from 'react';
import './App.css';
import Header from "./estructure/Header/Header"
import Main from "./estructure/Main/Main"
import Footer from "./estructure/Footer/Footer"
import "materialize-css/dist/css/materialize.min.css"
// import DenseAppBar from "./estructure/Header/Example"

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;
