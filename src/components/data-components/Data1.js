import React from 'react'


const Data1 = ({ mapImageIndex, denver }) => {

  const mapImages = [
    './images/map01.png',
    './images/map02.png',
    './images/map03.png',
    './images/map04.png'
  ]

  return (
    <div className="container padding-bottom">

      <div className="text-center">
        <h1 className="section-title-data">Colorado Population Density</h1>
        <h5>Sourced from the U.S. Census Bureau</h5>
        <img className="data-image" src={require(`${mapImages[mapImageIndex]}`)} alt="pop map" />
        <img className="" src={require('./images/pop-key.png')} alt="pop map key" />
      </div>
      <div className="container text-center padding-top">
        <h1 className="section-title-data padding-top">Latest Tweets from Top Cities:</h1>
        <h5>Sourced from Twitter</h5>
      </div>

      <div>
        {
          denver ?
          <div>
            <div className="card main-card">
              <div className="card-body">
                <h4 className="card-title">DENVER<br></br>population 682,545</h4>
                <div className="card">
                  <p className="card-text"><strong>TWEET: </strong> {denver[0].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {denver[0].hashtags}</p>
                </div>
                <div className="card">
                  <p className="card-text"><strong>TWEET: </strong> {denver[1].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {denver[1].hashtags}</p>
                </div>
                <div className="card">
                  <p className="card-text"><strong>TWEET: </strong> {denver[3].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {denver[3].hashtags}</p>
                </div>
              </div>
            </div>
          </div>
          : <div>Loading</div>
        }
      </div>
    </div>
  )

}

export default Data1
