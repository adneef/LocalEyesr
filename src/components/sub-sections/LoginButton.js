import React from 'react'
const API = `${process.env.REACT_APP_API_URL}/auth/google`

const LoginButton = ({ handleLogin} ) => {

  return(
    <div>
      <button className="btn" onClick={handleLogin}><a href={ API }>Login</a></button>
    </div>
  )

}

export default LoginButton
