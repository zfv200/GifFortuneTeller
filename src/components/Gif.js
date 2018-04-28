import React from 'react'

const Gif = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.message}</h3>
      <img src={props.gif} alt="fate-revealing gif"/>
    </div>
  )
}

export default Gif
