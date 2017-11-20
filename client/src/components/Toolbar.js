import React from 'react'
import Searchbar from './sub-sections/Searchbar'
import RecentButtonsBar from './sub-sections/RecentButtonsBar'

const Toolbar = ({ searchTerms }) => {

  return(
    <div className="container-fluid toolbar">
      <div className="container">
        <Searchbar />
        <RecentButtonsBar searchTerms={searchTerms} />
      </div>
    </div>
  )

}

export default Toolbar
