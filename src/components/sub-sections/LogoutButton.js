import React from 'react'
const API = `${process.env.REACT_APP_API_URL}/auth/logout`

const LogoutButton = () => {

  return(
    <div>
      <button className="btn"><a href={ API }>LOG OUT</a></button>
    </div>
  )

}

export default LogoutButton
