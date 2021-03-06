import React from 'react'
import LogoutButton from './LogoutButton'
import GifSearchButton from './GifSearchButton'
import SaveGif from './SaveGif'
import SavedFortuneContainer from './SavedFortuneContainer'
import Gif from './Gif'

const rating = "&tag=&rating=pg-13"
const ApiKey = "MPGPPdjxRDhoDBE4DDHYaod6wcifns6l"
const URL = "http://api.giphy.com/v1/gifs/random?&api_key=" + ApiKey + rating
const PostURL = "http://localhost:3000/api/v1/fortunes"
let dateObj = new Date()
let date = dateObj.toDateString()

class FortuneContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      gif: '',
      gifId: '',
      message: 'Your day will be filled with..',
      searchMessage: '',
      fortunes: [],
      date: date,
      saved: false
    }
  }

  componentDidMount(){
    this.setState({
      fortunes: this.props.userFortunes
    })
  }

  fetchGif = () => {
    fetch(URL, {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(res=>res.json()).then(json=>{
      this.setState({
        gif: json.data.fixed_height_downsampled_url,
        gifId: json.data.id,
        message: this.setMessage(),
        saved: false
      })
    })
  }

  setMessage = () => {
    const messages = [
      "Your day will be filled with...",
      "At some point today you will encounter...",
      "Today You will be blessed by a...",
      "Much luck will be brought by a...",
      "Don't worry, soon everything will be...",
      "You will end the day feeling like...",
      "Today is the day you will finally...",
      "Watch out! You soon could be...",
      "Your next project will end up like...",
      "You may be surprised today by a...",
      "Don't give up! Soon everything will be...",
      "Today there's a good chance you will encounter..."
    ]
    let index = Math.floor(Math.random() * Math.floor(messages.length))
    return messages[index]
  }

  saveGif = () => {
    let fortuneObj = {
      gif: this.state.gif,
      message: this.state.message,
      id: this.state.gifId,
      date: this.state.date
    }
    this.setState({
      fortunes: [...this.state.fortunes, fortuneObj],
      saved: true
    })
    console.log("I should call this")
    this.postGif(fortuneObj)
  }

  postGif = (fortuneObj) => {
    console.log(fortuneObj)
    fetch(PostURL, {
      headers: {'Content-Type':'application/json'},
      method: 'post',
      body: JSON.stringify({gif: fortuneObj.gif, message: fortuneObj.message, date: fortuneObj.date, user_id: parseInt(this.props.currentUser.id)})
    }).then(res=>res.json()).then(json=>console.log(json))
  }

  deleteGif = (gifId) => {
    let fortunes = this.state.fortunes
    let deleted = fortunes.find(fortune=>fortune.id===gifId)
    // let newFortunes = fortunes.slice().splice(fortunes.indexOf(deleted), 1)
    let index = fortunes.indexOf(deleted)
    this.setState({
      fortunes: [...fortunes.slice(0, index), ...fortunes.slice(index+1)]
    })
  }


  render(){
    return (
      <div className="ui one wide column">
        <h1 className="text" >Hello {this.props.currentUser.attributes.username}! Click Below For a Gif Prophecy!</h1>
        {this.state.gif!=='' ?
        <Gif gif={this.state.gif} message={this.state.message}/> : null }
        {this.state.gif!=='' ?
        <SaveGif saved={this.state.saved} saveGif={this.saveGif}/> : null }
        <GifSearchButton fetchGif={this.fetchGif} gif={this.state.gif}/>
        <SavedFortuneContainer fortunes={this.state.fortunes} deleteGif={this.deleteGif}/>
        <LogoutButton handleLogout={this.props.handleLogout}/>
      </div>
    )
  }
}

export default FortuneContainer
