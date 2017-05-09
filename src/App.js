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
  render() {
    return (
      <Fabric className="App">

        <TextField
          label="Enter Todo"
          ref={ (t) => this.field = t}
          />
          
      </Fabric>
    );
  }
}

export default App;
