import React from 'react'
import Data1 from './data-components/Data1'
import Data2 from './data-components/Data2'
import SearchData from './data-components/SearchData'
import $ from 'jquery';


const Data = ({ dataDisplay,
  trends,
  updateDataDisplay,
  mapImageIndex,
  searchResults,
  lastSearch,
}) => {

  const toggleDropDown = () => {
    $('#dropdown-container').toggleClass('show')
  }

  const changeDisplay = (e) => {
    if (e.target.id === 'data-1') {
      updateDataDisplay(1)
    }
    if (e.target.id === 'data-2') {
      updateDataDisplay(2)
    }
    if (e.target.id === 'data-3') {
      updateDataDisplay(3)
    }
  }


  return (
    <div className="container">
      <div className="data-container">
        <div id="dropdown-container" className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={toggleDropDown}>
            Choose Your Data:
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a id="data-1" className="dropdown-item" onClick={changeDisplay}>Colorado Population Density Map</a></li>
            <li><a id="data-2" className="dropdown-item" onClick={changeDisplay}>Top Trending Tweets of Colorado</a></li>
            <li><a id="data-3" className="dropdown-item" onClick={changeDisplay}>Related Twitter HashTags</a></li>
          </ul>
        </div>
        <div>
          {
            dataDisplay === 1 ? <Data1 mapImageIndex={mapImageIndex} /> : null
          }
        </div>
        <div>
          {
            dataDisplay === 2 ? <Data2 trends={trends} /> : null
          }
        </div>
        <div>
          {
            dataDisplay === 3 ? <SearchData searchResults={searchResults} lastSearch={lastSearch} /> : null
          }
        </div>
      </div>
    </div>
  )

}

export default Data
