import React from 'react'
import Barchart from './Barchart'

const SearchData = ({ searchResults, lastSearch, }) => {

  return (
    <div className="container">
      <div className="text-center data3-box">
        <h1>Related Hashtags to: {lastSearch}</h1>
        <h4>Sourced from Twitter</h4>
        <div className="data-image">
          {
            searchResults ?
            <div>
              <Barchart data={searchResults} />
            </div>
            : <div>Loading</div>
          }
        </div>
      </div>
    </div>
  )

}

export default SearchData
