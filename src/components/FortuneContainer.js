import React from 'react'
import LogoutButton from './LogoutButton'
import GifSearchButton from './GifSearchButton'
import Gif from './Gif'

const rating = "&tag=&rating=G"
const ApiKey = "MPGPPdjxRDhoDBE4DDHYaod6wcifns6l"
const URL = "http://api.giphy.com/v1/gifs/random?&api_key=" + ApiKey + rating

class FortuneContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      gif: '',
      message: 'Your day will be filled with..',
      searchMessage: ''
    }
  }

  fetchGif = () => {
    fetch(URL, {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(res=>res.json()).then(json=>{
      this.setState({
        gif: json.data.fixed_height_downsampled_url,
        message: this.setMessage()
      })
    })
  }

  setMessage = () => {
    const messages = [
      "Your day will be filled with...",
      "At some point today you will encounter...",
      "You will be blessed by...",
      "Much luck will be brought by a...",
      "Don't worry, soon everything will be...",
      "You will end the day feeling like...",
      "Today is the day you will finally...",
      "Watch out! You soon could be...",
      "Your next project will end up like..."

    ]
    let index = Math.floor(Math.random() * Math.floor(messages.length))
    return messages[index]
  }

  render(){
    return (
      <div className="ui one wide column">
        <h1>Click Below For a Gif Prophecy!</h1>
        <div>
        {this.state.gif!=='' ?
        <Gif gif={this.state.gif} message={this.state.message}/> : null }
        </div>
        <GifSearchButton fetchGif={this.fetchGif} setMessage={this.setMessage}/>
        <LogoutButton handleLogout={this.props.handleLogout}/>
      </div>
    )
  }
}

export default FortuneContainer
