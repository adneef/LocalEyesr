import React from 'react'

const LoginButton = ({handleLogin}) => {



  return(
    <div>
      <button className="btn">
        <a href='http://localhost:5000/auth/google'> Log In </a>
      </button>
    </div>
  )

}

export default LoginButton
