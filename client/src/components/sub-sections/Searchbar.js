import React from 'react'

<<<<<<< HEAD
const Search = ({ messages, searchList, submitSearch }) => {
=======
const Search = ({ messages, searchList, saveSearch }) => {
>>>>>>> 8b1eb2e10ac7e167cae9c659f7639effbe75f4fd

  const searchTerm = (e) => {
    e.preventDefault()
    let search = e.target.firstChild.value
    console.log('search term from searchbar: ', search);
    submitSearch(search)
  }

  const saveIt = (e) => {
    e.preventDefault()
    let term = e.target["search-field"].value
    saveSearch(term)
  }

  return (
    <div>
<<<<<<< HEAD
      <form className="d-flex search-form" onSubmit={searchTerm}>
        <input id="search-input" className="form-control search-bar" placeholder="Search"/>
        <button id="search-button" className="btn">Search</button>
=======
      <form onSubmit= { saveIt } className="d-flex search-form">
        <input id="search-field" className="form-control search-bar" placeholder="Search"/>
        {/* <input className="form-control" placeholder="Search" onChange={filteredList}/> */}
        <input type ="submit" id="search-button" className="btn" value="Search"/>
        {/* <button id="search-button" className="btn">Search</button> */}
>>>>>>> 8b1eb2e10ac7e167cae9c659f7639effbe75f4fd
      </form>
    </div>
  )

}

export default Search
