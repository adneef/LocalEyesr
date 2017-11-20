import React from 'react'

const RecentButtonsBar = ({ searchTerms }) => {

  return (

    <div className="buttons-container">
      {/* needs logic to limit total button number to...6? */}
      {/* also needs logic to pull out the value of the button when clicked on, and populate the search bar with that value */}
      {searchTerms.map(term => {
        return <button className="btn btn-recent" key={searchTerms.indexOf(term)}>{term}</button>
      })}
    </div>

  )

}

export default RecentButtonsBar
