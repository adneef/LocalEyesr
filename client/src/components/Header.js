import React from 'react'
import LoginButton from './sub-sections/LoginButton'
import LogoutButton from './sub-sections/LogoutButton'

const Header = () => {

  return (
    <div className="container-fluid header-nav">
      <div className="container d-flex justify-content-between">
        <div className="header-left flex-row borderbox">
          <h1 className="logo-text">LocalEyesr</h1>
          <h5 className="logo-sub-text">Discover Colorado with Data Visualization</h5>
        </div>
        <div className="header-right row align-items-center borderbox">
          {/* create if or statement */}
          {/* <LoginButton /> */}
          <LogoutButton />
        </div>
      </div>
    </div>
  )

}

export default Header
