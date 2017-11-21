import React from 'react'


const Data1 = ({ mapImageIndex, denver, cosprings }) => {

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
      <div>
        {
          denver ?
          <div>
            <div className="card main-card">
              <div className="card-body">
                <h4 className="card-title">DENVER: population 682,545</h4>
                <div className="card">
                  <p className="card-text"><strong>DATE: </strong> {denver[0].created_at}</p>
                  <p className="card-text"><strong>TWEET: </strong> {denver[0].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {denver[0].hashtags}</p>
                </div>
                <div className="card">
                  <p className="card-text"><strong>DATE: </strong> {denver[1].created_at}</p>
                  <p className="card-text"><strong>TWEET: </strong> {denver[1].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {denver[1].hashtags}</p>
                </div>
                <div className="card">
                  <p className="card-text"><strong>DATE: </strong> {denver[3].created_at}</p>
                  <p className="card-text"><strong>TWEET: </strong> {denver[3].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {denver[3].hashtags}</p>
                </div>
              </div>
            </div>
          </div>
          : <div>Loading</div>
        }
      </div>
      <div>
        {
          cosprings ?
          <div>

            <div className="card main-card">
              <div className="card-body">
                <h4 className="card-title">Colorado Springs: population 456,568</h4>
                <div className="card">
                  <p className="card-text"><strong>DATE: </strong> {cosprings[0].created_at}</p>
                  <p className="card-text"><strong>TWEET: </strong> {cosprings[0].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {cosprings[0].hashtags}</p>
                </div>
                <div className="card">
                  <p className="card-text"><strong>DATE: </strong> {cosprings[1].created_at}</p>
                  <p className="card-text"><strong>TWEET: </strong> {cosprings[1].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {cosprings[1].hashtags}</p>
                </div>
                <div className="card">
                  <p className="card-text"><strong>DATE: </strong> {cosprings[3].created_at}</p>
                  <p className="card-text"><strong>TWEET: </strong> {cosprings[3].text}</p>
                  <p className="card-text"><strong>HASHTAGS: </strong> {cosprings[3].hashtags}</p>
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
