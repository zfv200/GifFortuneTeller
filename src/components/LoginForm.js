import React from 'react'

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

  handleLogin = (event) => {
    event.preventDefault()
    this.props.handleLogin(this.state.value)
  }

  render(){
    return (
      <div>
        <h1>Enter Your Name to Reveal Your Fate...</h1>
        <form onSubmit={this.handleLogin} >
          <input onChange={this.handleChange} value={this.state.value}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
