import React from 'react'
import Toolbar from './Toolbar'
import Data from './Data'

const Dashboard = ({
  dataDisplay,
  updateDataDisplay,
  mapImageIndex,
  topTrendingTweets }) => {

  return (
    <div>
      <Toolbar />
      <Data
        dataDisplay={dataDisplay}
        updateDataDisplay={updateDataDisplay}
        mapImageIndex={mapImageIndex}
        topTrendingTweet={topTrendingTweets}
      />
    </div>
  )

}

export default Dashboard
