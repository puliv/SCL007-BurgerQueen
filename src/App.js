import React, { Component } from 'react';
import './App.css';
import Header from "./estructure/Header/Header"
import Main from "./estructure/Main/Main"
import Kitchen from "./estructure/Main/Kitchen"
import "materialize-css/dist/css/materialize.min.css"
// import DenseAppBar from "./estructure/Header/Example"

class App extends Component {
  constructor(){
    super();
    this.state={
      orderArr: []
    }
    this.functionPush=this.functionPush.bind(this);
  }
  functionPush(e){
    let pushedData= this.state.orderArr;
    pushedData.push(e);
    this.setState({
      ...this.state,
      orderArr: pushedData
    })
  }
    
  render(){
    return (
      <div>
          <Header />
          <Main onClick={this.functionPush}/>
          <Kitchen btnOrderBreakfast={this.state.orderArr} />
      </div>
    );
  }
}

export default App;
