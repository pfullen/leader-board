import React, { Component } from 'react';
import Header from './Components/Header';
import LeaderBoard from './Components/LeaderBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
         <LeaderBoard/>
      </div>
    );
  }
}

export default App;
