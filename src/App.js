import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Maincomponent';





class App extends Component {

  render(){
    return (
      
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
 
    );
    }
    
  }

export default App;

