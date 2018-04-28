import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import FortuneContainer from './components/FortuneContainer'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  handleLogin = (newUser) => {
    this.setState({
      currentUser: newUser
    })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
  }


  render() {
    return (
      <div id="app-div" className="App">
        {!this.state.currentUser ?
        <LoginForm handleLogin={this.handleLogin} /> :
        <FortuneContainer currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
      }
      </div>
    );
  }
}

export default App;
