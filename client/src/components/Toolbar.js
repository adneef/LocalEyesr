import React from 'react'
import Searchbar from './sub-sections/Searchbar'
import RecentButtonsBar from './sub-sections/RecentButtonsBar'

const Toolbar = ({ searchTerms, saveSearch, pullRecent, recentTerm }) => {

  return(
    <div className="container-fluid toolbar">
      <div className="container">
        <Searchbar
          saveSearch={ saveSearch }
          recentTerm={ recentTerm }
        />
        <RecentButtonsBar
          searchTerms={ searchTerms }
          pullRecent={ pullRecent }
        />
      </div>
    </div>
  )

}

export default Toolbar
