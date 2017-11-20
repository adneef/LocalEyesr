import React from 'react'

const Search = ({ messages, searchList, saveSearch, recentTerm, submitSearch }) => {

  const searchTerm = (e) => {
    e.preventDefault()
    let search = e.target.firstChild.value
    console.log('search term from searchbar: ', search);
    // saveSearch(search)
    submitSearch(search)
  }

  // const saveIt = (e) => {
  //   e.preventDefault()
  //   let term = e.target["search-field"].value
  //
  // }

  return (
    <div>
      <form className="d-flex search-form" onSubmit={searchTerm}>
        <input id="search-input" className="form-control search-bar" placeholder="Search"/>
        <button id="search-button" className="btn">Search</button>
      </form>
    </div>
  )

}

export default Search
