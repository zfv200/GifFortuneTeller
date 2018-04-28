import React from 'react'

const SaveGif = (props) => {

  return (
    <div>
      {props.saved===false ?
      <button onClick={props.saveGif}>Save This Fortune!</button> :
      <button>Fortune Saved!</button>
    }
    </div>
  )
} 

export default SaveGif
