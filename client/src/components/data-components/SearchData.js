import React from 'react'

const SearchData = ({ searchResults, lastSearch }) => {
  console.log(lastSearch);
  console.log(searchResults);
  
  return (
    <div className="container">
      <div className="text-center">
        <h1>Related Hashtags to: {lastSearch}</h1>
        <h4>Sourced from Twitter</h4>
        <img className="data-image" src={require('./images/map01.png')} alt="pop map" />
        <img className="" src={require('./images/pop-key.png')} alt="pop map key" />
      </div>
    </div>
  )

}

export default SearchData
