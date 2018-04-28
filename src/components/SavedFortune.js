import React from 'react'

const SavedFortune = (props) => {
  return (
    <div className="text">
      <h2>On {props.fortune.date}:</h2>
      <h3>{props.fortune.message}</h3>
      <img src={props.fortune.gif} alt="super cool gif"/>
    </div>
  )
}

export default SavedFortune
