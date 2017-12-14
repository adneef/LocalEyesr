import React from 'react'

const RecentButtonsBar = ({
  searchTerms,
  submitSearch,
  updateDataDisplay }) => {
    
  const NumberOfTerms = searchTerms.length

  const searchTerm = (e) => {
    e.preventDefault()
    let search = e.target.innerHTML
    submitSearch(search)
    updateDataDisplay(3)
  }

  return (
    <div className="buttons-container">
      {NumberOfTerms<8 ?
        searchTerms.map(term => {
          return <button onClick={ searchTerm } className="btn btn-recent" key={searchTerms.indexOf(term)}>{term}</button>
        }) :
        searchTerms.slice(0, 8).map(term => {
          return <button onClick={ searchTerm } className="btn btn-recent" key={searchTerms.indexOf(term)}>{term}</button>
        })
      }
    </div>
  )
}

export default RecentButtonsBar
