import React from 'react'
import LogoutButton from './LogoutButton'
import GifSearchButton from './GifSearchButton'
import Gif from './Gif'

class FortuneContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      gif: '',
      message: ''
    }
  }

  fetchGif = () => {
    
  }

  render(){
    return (
      <div>
        <h1>Click Below For a Gif Prophecy!</h1>
        <Gif gif={this.state.gif} message={this.state.message}/>
        <GifSearchButton />
        <LogoutButton handleLogout={this.props.handleLogout}/>
      </div>
    )
  }
}

export default FortuneContainer
