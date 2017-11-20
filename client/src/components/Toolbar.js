import React from 'react'
import Searchbar from './sub-sections/Searchbar'
import RecentButtonsBar from './sub-sections/RecentButtonsBar'

const Toolbar = ({ submitSearch, searchTerms, saveSearch, updateDataDisplay, pullRecent, recentTerm }) => {

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
          submitSearch={submitSearch}
          saveSearch={saveSearch}
          updateDataDisplay={updateDataDisplay}
        />
      </div>
    </div>
  )

}

export default Toolbar
