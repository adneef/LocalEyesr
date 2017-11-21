import React from 'react'

const LogoutButton = ({handleLogout}) => {

  return(
    <div>
      <button className="btn" onClick={handleLogout}>LOG OUT</button>
    </div>
  )

}

export default LogoutButton
