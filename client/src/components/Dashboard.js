import React from 'react'
import Toolbar from './Toolbar'
import Data from './Data'

const Dashboard = ({ dataDisplay, updateDataDisplay }) => {

  return (
    <div>
      <Toolbar />
      <Data
        dataDisplay={dataDisplay}
        updateDataDisplay={updateDataDisplay}
      />
    </div>
  )

}

export default Dashboard
