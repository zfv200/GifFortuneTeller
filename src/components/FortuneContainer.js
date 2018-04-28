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
    ""
    fetch(URL, {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(res=>res.json()).then(json=>{
      this.setState({
        gif: json.data.fixed_height_downsampled_url
      })
    })
  }

  render(){
    return (
      <div>
        <h1>Click Below For a Gif Prophecy!</h1>
        {this.state.gif!=='' ?
        <Gif gif={this.state.gif} message={this.state.message}/> : null }
        <GifSearchButton fetchGif={this.fetchGif}/>
        <LogoutButton handleLogout={this.props.handleLogout}/>
      </div>
    )
  }
}

export default FortuneContainer
