import React from 'react'
import Toolbar from './Toolbar'
import Data from './Data'

const Dashboard = ({
  dataDisplay,
  updateDataDisplay,
  mapImageIndex,
  submitSearch,
  searchTerms,
  saveSearch }) => {

  return (
    <div>
      <Toolbar
        submitSearch={submitSearch}
        searchTerms={ searchTerms }
        saveSearch={ saveSearch }
      />
      <Data
        dataDisplay={dataDisplay}
        updateDataDisplay={updateDataDisplay}
        mapImageIndex={mapImageIndex}
      />
    </div>
  )

}

export default Dashboard
