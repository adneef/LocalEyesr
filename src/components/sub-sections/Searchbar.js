import React from 'react'


const Search = ({
  messages,
  searchList,
  submitSearch,
  saveSearch,
  updateDataDisplay }) => {

  const searchTerm = (e) => {
    e.preventDefault()
    let search = e.target.firstChild.value
    submitSearch(search)
    saveSearch(search)
    updateDataDisplay(3)
    saveSearch(search)
  }

  return (
    <div>
      <span className="search-text">SEARCH A TREND ON TWITTER</span>
      <form className="d-flex search-form" onSubmit={searchTerm}>
        <input id="search-input" className="form-control search-bar" placeholder="Search"/>
        <button id="search-button" className="btn">SEARCH</button>
      </form>
    </div>
  )

}

export default Search
