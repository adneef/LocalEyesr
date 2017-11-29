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
  denver,
  topTrendTweets,
  deleteSearch }) => {

  return (
    <div>
      <Toolbar
        submitSearch={submitSearch}
        searchTerms={searchTerms}
        saveSearch={saveSearch}
        updateDataDisplay={updateDataDisplay}
        deleteSearch={deleteSearch}
      />
      <Data
        dataDisplay={dataDisplay}
        trends={trends}
        denver={denver}
        updateDataDisplay={updateDataDisplay}
        mapImageIndex={mapImageIndex}
        searchResults={searchResults}
        lastSearch={lastSearch}
        topTrendTweets={topTrendTweets}
      />
    </div>
  )

}

export default Dashboard
