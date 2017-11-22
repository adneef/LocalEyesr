import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
// import { scaleLinear } from 'd3-scale';
// import { max } from 'd3-array';
// import { select } from 'd3-selection';
// import * as d3 from "d3";
const API = `${process.env.REACT_APP_API_URL}`
const currentURL = `${process.env.REACT_APP_URL_NOW}`


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataDisplay: 1,
      mapImageIndex: 0,
      trends: [],
      terms:[],
      lastSearch: 'Colorado'
    }
  }

  /* pulls our current user and their saved searches from db */
  async componentDidMount() {
    const denver = await fetch(`${API}/twitter/denver`)
    const denverdata = await denver.json()
    this.setState({ denver: denverdata })

    const cosprings = await fetch(`${API}/twitter/springs`)
    const cospringsdata = await cosprings.json()
    this.setState({ cosprings: cospringsdata })

    const boulder = await fetch(`${API}/twitter/boulder`)
    const boulderdata = await boulder.json()
    this.setState({ boulder: boulderdata })

    setInterval(this.changeMapImage, 1000)
    const response = await fetch(`${API}/twitter/trends`)
    const json = await response.json()
    this.setState({ trends: json })

    // const res = await fetch(`${API}/twitter/tweets?term=${this.state.trends[0].name}`)
    // const trendJson = await res.json()
    // this.setState({ topTrendTweets: trendJson })
    //
    // const res2 = await fetch(`${API}/twitter/tweets?term=${this.state.trends[1].name}`)
    // const trendJson2 = await res2.json()
    // this.setState({ topTrendTweets2: trendJson2 })

    const data = await fetch(`${API}/twitter/related?term=Colorado`)
    const jsonData = await data.json()
    this.setState({ searchResults: jsonData })
    const url = document.location.href
    const userId = url.substr(url.lastIndexOf('/') + 1).replace('#', '')
    if(document.location.href === `${currentURL}/${userId}#`) {
      const res = await fetch(`${API}/users/${userId}`)
      const searches = await res.json()
      const terms = searches.map(search => search.term)
      if(userId) {
        this.setState({
          loggedIn: true,
          user: userId,
          terms: terms,
          trends: json
        })
      } else {
          this.setState({
            loggedIn: false,
            trends: json
          })
        }
    }
  }

  //function to pull out the search term and save it to the db
  saveSearch = async (search) => {
    const postObj = {
      id: this.state.user,
      term: search
    }
    const res = await fetch(`${API}/users`, {
      method: 'POST',
      body: JSON.stringify(postObj),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    const json = await res.json()
    this.setState({
      terms: [
        json,
        ...this.state.terms
      ]
    })
  }

  // stop animating population map
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // animate colorado population density map
  changeMapImage = () => {
    let nextImageIndex = this.state.mapImageIndex + 1
    if (this.state.mapImageIndex < 3) {
      this.setState({ mapImageIndex: nextImageIndex })
    }
    else {
      clearInterval(this.intervalId)
    }
  }

  // allow drop down on dashboard to display selected data
  updateDataDisplay = (num) => {
    this.setState({ dataDisplay: num })
  }

  // search form connection to mapImages
  submitSearch = async (value) => {
    console.log(value)
    this.setState({ lastSearch: value })
    const data = await fetch(`${API}/twitter/related?term=${value}`)
    const jsonData = await data.json()
    this.setState({searchResults: jsonData})
  }


  render() {
    return (
      <div className="container-fluid">
        <Header
          loggedIn={this.state.loggedIn}/>
        {
          this.state.loggedIn ?
            <Dashboard
              dataDisplay={this.state.dataDisplay}
              trends={this.state.trends}
              updateDataDisplay={this.updateDataDisplay}
              mapImageIndex={this.state.mapImageIndex}
              submitSearch={this.submitSearch}
              searchTerms={this.state.terms}
              saveSearch={ this.saveSearch }
              searchResults={this.state.searchResults}
              lastSearch={this.state.lastSearch}
              denver={this.state.denver}
              cosprings={this.state.cosprings}
              boulder={this.state.boulder}
              topTrendTweets={this.state.topTrendTweets}
              topTrendTweets2={this.state.topTrendTweets2}
            /> :
            <LandingPage denver={this.state.denver} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
