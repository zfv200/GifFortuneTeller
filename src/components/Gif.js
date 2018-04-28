import React from 'react'

const Gif = (props) => {
  return (
    <div>
      <h3 className="text" >{props.message}</h3>
      <img src={props.gif} alt="fate-revealing gif"/>
    </div>
  )
}

export default Gif
