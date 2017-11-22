import React from 'react'
const API = `${process.env.REACT_APP_URL_NOW}/2#`

const LoginButton = () => {

  return(
    <div>
      <button className="btn"><a className="white" href={ API }>LOGIN</a></button>
    </div>
  )

}

export default LoginButton
