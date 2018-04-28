import React from 'react'
import LogoutButton from './LogoutButton'

class FortuneContainer extends React.Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return (
      <div>
        <h1>Click Below For a Gif Prophecy!</h1>
        <LogoutButton handleLogout={this.props.handleLogout}/>
      </div>
    )
  }
}

export default FortuneContainer
