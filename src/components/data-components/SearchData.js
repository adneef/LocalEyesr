import React from 'react'


const SearchData = ({ searchResults, lastSearch }) => {
  console.log(lastSearch);
  console.log(searchResults);


  return (
    <div className="container">
      <div className="text-center">
        <h1>Related Hashtags to: {lastSearch}</h1>
        <h4>Sourced from Twitter</h4>
        {/* <p>{searchResults}</p> */}
        <img className="data-image" src={require('./images/bubble-holder.png')} alt="pop map" />
      </div>
    </div>
  )

}

export default SearchData
