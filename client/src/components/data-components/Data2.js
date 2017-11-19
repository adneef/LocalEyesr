import React from 'react'
import Data2Chart from './Data2Chart'


const Data2 = () => {

  // const d3Chart = require('./Data2Chart/index.html');

  return (
    <div className="container">
      <div className="text-center">
        <h1>Colorado Top 8 Twitter Trends</h1>
        <h4>Sourced from Twitter</h4>
        <div className="d-flex">
          {/* <img className="data-image" src={require('./images/top-twitter-trends.png')} alt="top twitter trends in colorado" /> */}
          <div>
            <Data2Chart />
          </div>
          <div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-1"></div>
              <div>Incredibles2: 363898</div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-2"></div>
              <div>Madrid: 321223</div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-3"></div>
              <div>Malcolm Young: 262968</div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-4"></div>
              <div>2017In4Words: 132909</div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-5"></div>
              <div>Benzema: 42576</div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-6"></div>
              <div>HappyBirthdayMickey: 20296</div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-7"></div>
              <div>Mercer: 14187</div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-8"></div>
              <div>NCTE17: 10164</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )

}

export default Data2
