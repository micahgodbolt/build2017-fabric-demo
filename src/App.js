import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import {
  Fabric, 
  TextField, 
  PrimaryButton, 
  Checkbox, 
  ProgressIndicator
} from "office-ui-fabric-react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: null
    }
  } 

  render() {
    return (
      <Fabric className="App">

        <TextField
          label="Enter Todo"
          ref={ (t) => this.field = t}
          />

        <PrimaryButton
          iconProps={{iconName:"Add"}}
          text="Add Todo"
          onClick={() => this.addTodo(this.field._latestValue)}
        />

        <Checkbox
          label={ this.state.todo}
          onChange={() => alert("Removed!")}
          />

      </Fabric>
    );
  }

  addTodo = (todo) => {
    this.setState( {
      todo
    })
  }
}

export default App;
