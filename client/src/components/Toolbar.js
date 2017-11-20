import React from 'react'
import Searchbar from './sub-sections/Searchbar'
import RecentButtonsBar from './sub-sections/RecentButtonsBar'

const Toolbar = ({ submitSearch }) => {

  return(
    <div className="container-fluid toolbar">
      <div className="container">
        <Searchbar submitSearch={submitSearch} />
        <RecentButtonsBar />
      </div>
    </div>
  )

}

export default Toolbar
