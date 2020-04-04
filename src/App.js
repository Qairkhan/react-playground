import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import './App.css'

class App extends Component {
    state = {value: ''}

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit =(event)=> {
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>              
            <TextField 
                type="text" 
                label ="ConsoleLog" 
                value={this.state.value} 
                onChange={this.handleChange} 
            />
            <input type="submit" value="Submit" />
        </form>
      );
    }
}
  
 export default App;