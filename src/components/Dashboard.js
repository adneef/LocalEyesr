import React from 'react'
import Toolbar from './Toolbar'
import Data from './Data'

const Dashboard = ({
  dataDisplay,
  trends,
  updateDataDisplay,
  mapImageIndex,
  submitSearch,
  searchTerms,
  saveSearch,
  searchResults,
  lastSearch,
  renderPieChart
    }) => {

  return (
    <div>
      <Toolbar
        submitSearch={submitSearch}
        searchTerms={searchTerms}
        saveSearch={saveSearch}
        updateDataDisplay={updateDataDisplay}
      />
      <Data
        dataDisplay={dataDisplay}
        trends={trends}
        updateDataDisplay={updateDataDisplay}
        mapImageIndex={mapImageIndex}
        searchResults={searchResults}
        lastSearch={lastSearch}
        renderPieChart={renderPieChart}
      />
    </div>
  )

}

export default Dashboard
