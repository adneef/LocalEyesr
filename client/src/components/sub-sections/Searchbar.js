import React from 'react'

const Search = ({ messages, searchList, saveSearch }) => {

  // on change of search field, update list of filtered messages
  // const filteredList = (e) => {
  //   let search = e.target.value
  //   let updatedList = messages.filter(item => {
  //     return item.name.match(new RegExp(search, 'ig')) || item.message.match(new RegExp(search, 'ig'))
  //   })
  //   searchList(updatedList)
  // }

  const saveIt = (e) => {
    e.preventDefault()
    let term = e.target["search-field"].value
    saveSearch(term)
  }

  return (
    <div>
      <form onSubmit= { saveIt } className="d-flex search-form">
        <input id="search-field" className="form-control search-bar" placeholder="Search"/>
        {/* <input className="form-control" placeholder="Search" onChange={filteredList}/> */}
        <input type ="submit" id="search-button" className="btn" value="Search"/>
        {/* <button id="search-button" className="btn">Search</button> */}
      </form>
    </div>
  )

}

export default Search
