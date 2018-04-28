import React from 'react'

const LogoutButton = (props) => {
  return (
    <div>
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  )
}

export default LogoutButton
