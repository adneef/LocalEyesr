import React from 'react'


const Data1 = ({ mapImageIndex }) => {

  const mapImages = [
    './images/map01.png',
    './images/map02.png',
    './images/map03.png',
    './images/map04.png'
  ]

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="data-title">Colorado Population Density</h1>
        <h5>Sourced from the U.S. Census Bureau</h5>
        <img className="data-image" src={require(`${mapImages[mapImageIndex]}`)} alt="pop map" />
        <img className="" src={require('./images/pop-key.png')} alt="pop map key" />
      </div>
    </div>
  )

}

export default Data1
