import React from 'react'
import Data1 from './data-components/Data1'
import Data2 from './data-components/Data2'
import $ from 'jquery';


const Data = ({ dataDisplay, updateDataDisplay }) => {
  console.log(dataDisplay);
  console.log(updateDataDisplay);


  const toggleDropDown = () => {
    console.log('hello');
    $('#dropdown-container').toggleClass('show')
  }

  const changeDisplay = (e) => {
    if (e.target.id === 'data-1') {
      updateDataDisplay(1)
    }
    if (e.target.id === 'data-2') {
      updateDataDisplay(2)
    }
    console.log('target clicked');
    console.log('event: ', e);

  }


  return (
    <div className="container">
      <div className="data-container borderbox">
        <div id="dropdown-container" className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={toggleDropDown}>
            Choose Your Data:
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a id="data-1"  onClick={changeDisplay}>Colorado Population Density Map</a></li>
            <li><a id="data-2"  onClick={changeDisplay}>Top Trending Tweets of Colorado</a></li>
            <li><a href="" onClick={changeDisplay}>Data 3</a></li>
          </ul>
        </div>
        <div>
          {
            dataDisplay === 1 ? <Data1 /> : null
          }
        </div>
        <div>
          {
            dataDisplay === 2 ? <Data2 /> : null
          }
        </div>
      </div>
    </div>
  )

}

export default Data
