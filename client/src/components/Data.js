import React from 'react'
import Data1 from './data-components/Data1'
import Data2 from './data-components/Data2'

const Data = () => {

  return (
    <div className="container">
      <div className="data-container borderbox">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            What Data Would You Like to Display:
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="./data-components/Data1">Data 1</a></li>
            <li><a href="./data-components/Data1">Data 2</a></li>
            <li><a href="./data-components/Data1">Data 3</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="./data-components/Data1">Separated link</a></li>
          </ul>
        </div>
        {/* dynamically change data display */}
        {/* <Data1 /> */}
        <Data2 />
      </div>
    </div>
  )

}

export default Data
