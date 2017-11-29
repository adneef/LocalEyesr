import React from 'react'
import Searchbar from './sub-sections/Searchbar'
import RecentButtonsBar from './sub-sections/RecentButtonsBar'

const Toolbar = ({
  submitSearch,
  searchTerms,
  saveSearch,
  updateDataDisplay,
  deleteSearch }) => {

  return(
    <div className="container-fluid toolbar">
      <div className="container">
        <Searchbar
          submitSearch={ submitSearch }
          saveSearch={ saveSearch }
          updateDataDisplay={ updateDataDisplay }
        />
        <RecentButtonsBar
          searchTerms={ searchTerms }
          submitSearch={ submitSearch }
          updateDataDisplay={ updateDataDisplay }
          deleteSearch={ deleteSearch }
      />
      </div>
    </div>
  )

}

export default Toolbar
