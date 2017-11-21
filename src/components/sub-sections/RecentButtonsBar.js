import React from 'react'

const RecentButtonsBar = ({ searchTerms }) => {
  const NumberOfTerms = searchTerms.length
  console.log(NumberOfTerms)
  return (

    <div className="buttons-container">
      {/* also needs logic to pull out the value of the button when clicked on, and populate the search bar with that value */}
      {NumberOfTerms<8 ?
        searchTerms.map(term => {
          return <button className="btn btn-recent" key={searchTerms.indexOf(term)}>{term}</button>
        }) :
        searchTerms.slice(0, 8).map(term => {
          return <button className="btn btn-recent" key={searchTerms.indexOf(term)}>{term}</button>
        })
      }
    </div>
  )
}

export default RecentButtonsBar
