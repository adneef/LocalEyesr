import React from 'react'
import Toolbar from './Toolbar'
import Data from './Data'

const Dashboard = ({ dataDisplay, updateDataDisplay, mapImageIndex }) => {

  return (
    <div>
      <Toolbar />
      <Data
        dataDisplay={dataDisplay}
        updateDataDisplay={updateDataDisplay}
        mapImageIndex={mapImageIndex}
      />
    </div>
  )

}

export default Dashboard
