import React from 'react'
import {PieChart} from 'react-easy-chart';


const Data2 = ({ trends }) => {
  console.log('trends from data 2: ', trends);

  return (
    <div className="container">
      <div className="text-center">
        <h1>Colorado Top 8 Twitter Trends</h1>
        <h4>Sourced from Twitter</h4>
        <div className="d-flex">
          <PieChart
            labels
            styles={{
              '.chart_lines': {
                strokeWidth: 0
              },
              '.chart_text': {
                fontFamily: 'serif',
                fontSize: '1.25em',
                fill: '#333'
              }
            }}
            data={[
              {key: 'A', value: 100, color: '#aaac84'},
              {key: 'B', value: 200, color: '#dce7c5'},
              {key: 'C', value: 50, color: '#e3a51a'}
            ]}
            />
          {/* <img className="data-image" src={require('./images/top-twitter-trends.png')} alt="top twitter trends in colorado" /> */}
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

      </div>
    </div>

  )

}

export default Data2
