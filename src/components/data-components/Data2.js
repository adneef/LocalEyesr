import React from 'react'
import Data2Chart from './Data2Chart'


const Data2 = ({ trends, topTrendTweets }) => {

  return (
    <div className="container">
      <div className="">
        <div className="text-center">
          <h1 className="section-title-data">Colorado Top 8 Twitter Trends</h1>
          <h5>Sourced from Twitter</h5>
        </div>
        <div className="d-flex padding-top">

          <Data2Chart
            data={trends}
          />

          <div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-1"></div>
              <div><strong>{trends[0].name}: {trends[0].tweets}</strong></div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-2"></div>
              <div><strong>{trends[1].name}: {trends[1].tweets}</strong></div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-3"></div>
              <div><strong>{trends[2].name}: {trends[2].tweets}</strong></div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-4"></div>
              <div><strong>{trends[3].name}: {trends[3].tweets}</strong></div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-5"></div>
              <div><strong>{trends[4].name}: {trends[4].tweets}</strong></div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-6"></div>
              <div><strong>{trends[5].name}: {trends[5].tweets}</strong></div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-7"></div>
              <div><strong>{trends[6].name}: {trends[6].tweets}</strong></div>
            </div>
            <div className="key-group row d-flex-inline">
              <div className="color-key-block key-8"></div>
              <div><strong>{trends[7].name}: {trends[7].tweets}</strong></div>
            </div>
          </div>
        </div>

        {/* <div className="">
          {
            topTrendTweets ?
            <div>
              <div className="card main-card">
                <div className="card-body">
                  <h4 className="card-title">{trends[0].name}</h4>
                  <div className="card">
                    <p className="card-text"><strong>TWEET: </strong> {topTrendTweets[0].text}</p>
                    <p className="card-text"><strong>HASHTAGS: </strong> {topTrendTweets[0].hashtags}</p>
                  </div>
                  <div className="card">
                    <p className="card-text"><strong>TWEET: </strong> {topTrendTweets[1].text}</p>
                    <p className="card-text"><strong>HASHTAGS: </strong> {topTrendTweets[1].hashtags}</p>
                  </div>
                  <div className="card">
                    <p className="card-text"><strong>TWEET: </strong> {topTrendTweets[2].text}</p>
                    <p className="card-text"><strong>HASHTAGS: </strong> {topTrendTweets[2].hashtags}</p>
                  </div>
                </div>
              </div>
            </div>
            : <div>Loading</div>
          }
        </div> */}

        {/* <div className="">
          {
            topTrendTweets2 ?
            <div>
              <div className="card main-card">
                <div className="card-body">
                  <h4 className="card-title">{trends[1].name}</h4>
                  <div className="card">
                    <p className="card-text"><strong>TWEET: </strong> {topTrendTweets2[0].text}</p>
                    <p className="card-text"><strong>HASHTAGS: </strong> {topTrendTweets2[0].hashtags}</p>
                  </div>
                  <div className="card">
                    <p className="card-text"><strong>TWEET: </strong> {topTrendTweets2[1].text}</p>
                    <p className="card-text"><strong>HASHTAGS: </strong> {topTrendTweets2[1].hashtags}</p>
                  </div>
                  <div className="card">
                    <p className="card-text"><strong>TWEET: </strong> {topTrendTweets2[2].text}</p>
                    <p className="card-text"><strong>HASHTAGS: </strong> {topTrendTweets2[2].hashtags}</p>
                  </div>
                </div>
              </div>
            </div>
            : <div>Loading</div>
          }
        </div> */}

      </div>
    </div>

  )

}

export default Data2
