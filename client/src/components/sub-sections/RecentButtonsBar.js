import React from 'react'

const RecentButtonsBar = ({ searchTerms }) => {

  return (

    <div className="buttons-container">
      {searchTerms.map(term => {
        return <button className="btn btn-recent" key={searchTerms.indexOf(term)}>{term}</button>
      })}
      {/* needs a function to dynamically populate each button with recent searches */}
      <button className="btn btn-recent">Recent</button>
      <button className="btn btn-recent">Recent</button>
      <button className="btn btn-recent">Recent</button>
      <button className="btn btn-recent">Recent</button>
    </div>

  )

}

export default RecentButtonsBar
