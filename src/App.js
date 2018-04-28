import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import FortuneContainer from './components/FortuneContainer'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: null,
      userFortunes: []
    }
  }

  handleLogin = (newUser, fortunes=null) => {
    let currentFortunes = []
    if (fortunes!==null) {
      fortunes.map(fortune=>{
      currentFortunes.push(Object.assign({}, fortune.attributes))
      })
    }
    // let currentFortunes = Object.assign({})
    this.setState({
      currentUser: newUser,
      userFortunes: currentFortunes
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
        <FortuneContainer currentUser={this.state.currentUser} userFortunes={this.state.userFortunes} handleLogout={this.handleLogout}/>
      }
      </div>
    );
  }
}

export default App;
