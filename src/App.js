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

        { this.state.todo &&
        <Checkbox
          label={ this.state.todo}
          onChange={() => this.removeTodo()}
          />
        }

         <ProgressIndicator
          label= {`${this.state.todo ? 0 : 1 * 100} % Done`}
          percentComplete= { this.state.todo ? 0 : 1 }
        />

      </Fabric>
    );
  }

  addTodo = (todo) => {
    this.setState( {
      todo
    })
  }

  removeTodo = () => {
    this.setState( {
      todo: null
    })
  }
}

export default App;
