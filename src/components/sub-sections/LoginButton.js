import React from 'react'
const API = `${process.env.REACT_APP_API_URL}/auth/google`

const LoginButton = () => {

  return(
    <div>
      <button className="btn"><a href={ API }>Login</a></button>
    </div>
  )

}

export default LoginButton
