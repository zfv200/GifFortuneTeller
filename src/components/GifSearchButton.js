import React from 'react'

const GifSearchButton = (props) => {
  return (
    <div>
      <button onClick={props.fetchGif}>Reveal Your Destiny...</button>
    </div>
  )
}

export default GifSearchButton
