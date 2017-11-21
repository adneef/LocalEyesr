import React from 'react'

const LandingPage = () => {

  return (
    <div className="container-fluid">

      <div className="hero-image">
        <div className="container">
          <h1 className="hero-text">Trending Colorado</h1>
          <h3 className="hero-subtext">Local Trends on Twitter</h3>
        </div>
      </div>

      <div className="container-fluid info-section">
        <div className="container text-center">
          <h1 className="section-title">Data Visualization with D3</h1>
        </div>
        <div className="container d-flex justify-content-around">
          <div className="card about-us-card">
            <img className="card-img-top pie-example" src="./components/data-components/images/top-twitter-trends.png" alt=""/>
            <div className="card-body text-center">
              <p className="card-text"><strong>View Top Twitter Trends in Colorado with the most recent Tweets.</strong></p>
            </div>
          </div>
          <div className="card about-us-card">
            <img className="card-img-top map-example" src="./components/data-components/images/map04.png" alt=""/>
            <div className="card-body text-center">
              <p className="card-text"><strong>Population Density Map with the lastest tweets from Colorado.</strong></p>
            </div>
          </div>
          <div className="card about-us-card">
            <img className="card-img-top bubble-example" src="./components/data-components/images/bubble-holder.png" alt=""/>
            <div className="card-body text-center">
              <p className="card-text"><strong>Search and view Tweets by keyword with related hashtags</strong></p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid tweet-section">
        <div className="container">
          pull in some tweets...
        </div>
      </div>

      <div className="container-fluid about-us">
        <div className="container d-flex justify-content-around">
          <div className="card about-us-card">
            <img className="card-img-top brianna" src="" alt=""/>
            <div className="card-block">
              <h4 className="name-title">Bri Greene</h4>
              <p className="card-text">Twitter Data Manipulation <br></br> D3 Data Visualization <br></br> Front End Style & Interactivity</p>
              <p className="card-text"><strong>hellobrigreene@gmail.com</strong></p>
              <a href="http://www.briannagreene.com" class="btn">MY PORTFOLIO</a>
            </div>
          </div>
          <div className="card about-us-card">
            <img className="card-img-top danah" src="" alt=""/>
            <div className="card-block">
              <h4 className="name-title">Danah Olivetree</h4>
              <p className="card-text">Twitter Data Manipulation <br></br> D3 Data Visualization <br></br> OAuth Implementation</p>
              <p className="card-text"><strong>???@gmail.com</strong></p>
              <a href="" class="btn">????</a>
            </div>
          </div>
          <div className="card about-us-card">
            <img className="card-img-top adam" src="" alt=""/>
            <div className="card-block">
              <h4 className="name-title">Adam Neef</h4>
              <p className="card-text">OAuth Implementation <br></br>Database Structure <br></br>Server Security</p>
              <p className="card-text"><strong>???@gmail.com</strong></p>
              <a href="" class="btn">????</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )

}

export default LandingPage
