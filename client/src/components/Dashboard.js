import React from 'react'
import Toolbar from './Toolbar'
import Data from './Data'

const Dashboard = ({ dataDisplay, updateDataDisplay, mapImageIndex, searchTerms }) => {

  return (
    <div>
      <Toolbar searchTerms={ searchTerms } />
      <Data
        dataDisplay={dataDisplay}
        updateDataDisplay={updateDataDisplay}
        mapImageIndex={mapImageIndex}
      />
    </div>
  )

}

export default Dashboard
