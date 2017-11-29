import React from 'react'

const RecentButtonsBar = ({
  searchTerms,
  submitSearch,
  updateDataDisplay,
  deleteSearch }) => {
  const NumberOfTerms = searchTerms.length

  const searchTerm = (e) => {
    e.preventDefault()
    let search = e.target.innerHTML
    submitSearch(search)
    updateDataDisplay(3)
  }

  const deleteIt = (e) => {
    e.preventDefault()
    let term = e.target.id
    deleteSearch(term)
  }

  return (

    <div className="buttons-container">
      {/* also needs logic to pull out the value of the button when clicked on, and populate the search bar with that value */}
      {NumberOfTerms<7 ?
        searchTerms.map(term => {
          return <div className='btn-group' role='group' key={searchTerms.indexOf(term)}>
            <button onClick={ searchTerm } className="btn btn-recent">{term}</button>
            <button onClick={ deleteIt } style={{marginLeft: -19}} className='btn btn-recent' id={ term } ><i id={ term } className="fa fa-times" aria-hidden="true"></i></button>
          </div>
        }) :
        searchTerms.slice(0, 7).map(term => {
          return <div className='btn-group' role='group' key={searchTerms.indexOf(term)}>
            <button onClick={ searchTerm } className="btn btn-recent">{term}</button>
            <button onClick={ deleteIt } style={{marginLeft: -19}} className='btn btn-recent' id={ term } ><i id={ term } className="fa fa-times" aria-hidden="true"></i></button>
          </div>
        })
      }
    </div>
  )
}

export default RecentButtonsBar
