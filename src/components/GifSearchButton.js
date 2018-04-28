import React from 'react'

const GifSearchButton = (props) => {
  return (
    <div>
      <button onClick={props.fetchGif}>Reveal {props.gif!=='' ? "Another" : null} Fortune!</button>
    </div>
  )
}

export default GifSearchButton
