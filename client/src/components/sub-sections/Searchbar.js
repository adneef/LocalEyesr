import React from 'react'

const Search = ({ messages, searchList }) => {

  // on change of search field, update list of filtered messages
  // const filteredList = (e) => {
  //   let search = e.target.value
  //   let updatedList = messages.filter(item => {
  //     return item.name.match(new RegExp(search, 'ig')) || item.message.match(new RegExp(search, 'ig'))
  //   })
  //   searchList(updatedList)
  // }

  return (
    <div>
      <form className="d-flex search-form borderbox">
        <input className="form-control search-bar" placeholder="Search"/>
        {/* <input className="form-control" placeholder="Search" onChange={filteredList}/> */}
        <button id="search-button" className="btn">Search</button>
      </form>
    </div>
  )

}

export default Search
