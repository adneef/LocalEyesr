import React from 'react'

const LandingPage = () => {

  return (
    <div className="container-fluid">

      <div className="hero-image">
        <h1 className="hero-text">Trending Colorado</h1>
        <h3 className="hero-subtext">Local Trends on Twitter</h3>
      </div>

      <div className="container info-section">
        what our app does
      </div>

      <div className="container info-section">
        pull in some tweets...
      </div>

      <div className="container-fluid about-us info-section">
        <div className="container d-flex justify-content-around">
          <div className="card about-us-card">
            <img className="card-img-top brianna" src="" alt=""/>
            <div className="card-block">
              <h4 className="name-title">Bri Greene</h4>
              <p className="card-text">Twitter Data Manipulation <br></br> D3 Data Visualization <br></br> Front End Style & Interactivity</p>
              <p className="card-text"><strong>hellobrigreene@gmail.com</strong></p>
              <a href="www.briannagreene.com" class="btn">MY PORTFOLIO</a>
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
              <p className="card-text">OAuth Implementation <br></br>Datadate Structure <br></br>Server Security</p>
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
