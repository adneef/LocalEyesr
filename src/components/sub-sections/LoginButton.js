import React from 'react'

const LoginButton = ({handleLogin}) => {



  return(
    <div>
      <button className="btn" onClick={handleLogin}>LOGIN</button>
    </div>
  )

}

export default LoginButton
