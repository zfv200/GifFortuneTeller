import React from 'react'

const DeleteGifButton = (props) => {
  let deleteGif = () => {
    props.deleteGif(props.fortuneId)
  }

  return (
    <button onClick={deleteGif}>Delete Fortune</button>
  )
}

export default DeleteGifButton
