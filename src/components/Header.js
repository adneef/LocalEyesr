import React from 'react'
import LoginButton from './sub-sections/LoginButton'
import LogoutButton from './sub-sections/LogoutButton'
import DashboardButton from './sub-sections/DashboardButton'

const Header = ({ loggedIn }) => {

  return (
    <div className="container-fluid header-nav">
      <div className="container d-flex justify-content-between">
        <div className="header-left flex-row">
          <h1 className="logo-text">LocalEyesr</h1>
        </div>
        <div className="header-right row align-items-center">
          {loggedIn ?   <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  )

}

export default Header
