import React from 'react'
import Toolbar from './Toolbar'
import Data from './Data'

const Dashboard = ({
  dataDisplay,
  updateDataDisplay,
  mapImageIndex,
  submitSearch }) => {

  return (
    <div>
      <Toolbar
        submitSearch={submitSearch}
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
