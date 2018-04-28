import React from 'react'
const URL = 'http://localhost:3000/api/v1/users'

class LoginForm extends React.Component{
  constructor(){
    super()

    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  getUserData = () => {
    fetch(URL, {
      headers: {'Content-Type':'application/json'},
      method: 'get'
    }).then(res=>res.json()).then(json=>{
      let user = json.data.find(user=>{
        return user.attributes.username===this.state.value
      })
      if (user!==undefined){
        let fortunes = json.included.filter(fortune=>{
          return fortune.attributes["user-id"]===parseInt(user.id)
        })
        this.props.handleLogin(user, fortunes)
      } else {
        this.postUser()
        // this.props.handleLogin(this.state.value)
        // have attributes be passed as optional second arg
      }
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.getUserData()
  }

  postUser = () => {
    console.log("called!")
    fetch(URL, {
      headers: {'Content-Type':'application/json'},
      method: 'post',
      body: JSON.stringify({username: this.state.value})
    }).then(res=>res.json()).then(json=>{
      this.props.handleLogin(json.data)
    })
  }

  render(){
    return (
      <div>
        <h1 className="text" >Enter Your Name to Reveal Your Fate...</h1>
        <form onSubmit={this.handleLogin} >
          <input onChange={this.handleChange} value={this.state.value}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
