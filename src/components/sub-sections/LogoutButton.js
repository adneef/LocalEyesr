import React from 'react'

const LogoutButton = ({handleLogout}) => {

  return(
    <div>
      <button className="btn" onClick={handleLogout}>Log Out</button>
    </div>
  )

}

export default LogoutButton
