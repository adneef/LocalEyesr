import React from 'react'
import Searchbar from './sub-sections/Searchbar'
import RecentButtonsBar from './sub-sections/RecentButtonsBar'

const Toolbar = ({ searchTerms, saveSearch }) => {

  return(
    <div className="container-fluid toolbar">
      <div className="container">
        <Searchbar saveSearch={ saveSearch }/>
        <RecentButtonsBar searchTerms={ searchTerms } />
      </div>
    </div>
  )

}

export default Toolbar
