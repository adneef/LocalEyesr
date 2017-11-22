import React from 'react'
const API = `${process.env.REACT_APP_URL_NOW}/auth/logout`

const LogoutButton = () => {

  return(
    <div>
      <button className="btn"><a className="white" href={ API }>LOG OUT</a></button>
    </div>
  )

}

export default LogoutButton
