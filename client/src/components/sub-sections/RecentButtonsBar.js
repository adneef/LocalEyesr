import React from 'react'

const RecentButtonsBar = ({ searchTerms, pullRecent }) => {
  console.log('searchTerms in RecentButtonsBar:', searchTerms)

  const pull = (e) => {
    pullRecent(e.target.innerHTML)
  }

  return (

    <div className="buttons-container">
      {/* needs logic to limit total button number to...6? */}
      {/* also needs logic to pull out the value of the button when clicked on, and populate the search bar with that value */}
      {searchTerms.map(term => {
        return <button onClick = { pull } className="btn btn-recent" key={searchTerms.indexOf(term)}>{term}</button>
      })}
    </div>

  )

}

export default RecentButtonsBar
