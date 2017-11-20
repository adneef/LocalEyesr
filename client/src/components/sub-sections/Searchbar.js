import React from 'react'


const Search = ({
  messages,
  searchList,
  submitSearch,
  saveSearch,
  updateDataDisplay 
}) => {

  const searchTerm = (e) => {
    e.preventDefault()
    let search = e.target.firstChild.value
    console.log('search term from searchbar: ', search);
    submitSearch(search)
    updateDataDisplay(3)
    // saveSearch(search)
  }

  // const saveIt = (e) => {
  //   e.preventDefault()
  //   let term = e.target["search-field"].value
  //   saveSearch(term)
  //   submitSearch(search)
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
