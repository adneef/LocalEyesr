import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import * as d3 from "d3";
const API = `${process.env.REACT_APP_API_URL}`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataDisplay: 1,
      mapImageIndex: 0,
      trends: [],
      lastSearch: 'Colorado'
    }
  }

  /* pulls our current user and their saved searches from db
  based on the current signed in user.*/

  async componentDidMount() {
    setInterval(this.changeMapImage, 1000)
    const response = await fetch(`${API}/twitter/trends`)
    const json = await response.json()
    console.log('json from trends', json);
    this.setState({ trends: json })
    console.log('state of trends: ', this.state.trends);

    const data = await fetch(`${API}/twitter/related?term=Colorado`)
    const jsonData = await data.json()
    this.setState({ searchResults: jsonData })

    const url = document.location.href
    const userId = url.substr(url.lastIndexOf('/') + 1).replace('#', '')
    console.log(userId)
    const res = await fetch(`${API}/users/${userId}`)
    console.log('res from mount: ', res);
    const searches = await res.json()
    const terms = searches.map(search => search.term)
    console.log('is something broken?');
    if(searches) {
      this.setState({
        loggedIn: true,
        user: searches[0].id,
        terms: terms,
        trends: json
      })
    }
  }

  /* function to pull out the search term, save it to the db,
  and update state with the new search */
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
    console.log(json)
    this.setState({
      terms: [
        ...this.state.terms,
        json
      ]
    })
  }

  /* function to pull the value from a clicked on 'recent' button */
  pullRecent = async (recent) => {
    this.setState({
      recentTerm: recent
    })
  }

  // stop animating population map
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  /* function to insert a clicked on 'recent' value into the searchbar*/
  clearCachedRecent = async () => {
    this.setState({
      recentTerm: null
    })
  }
  // stop animating population map
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleLogout = async () => {
    console.log('handling logout');
    return await fetch(`${API}/auth/logout`)
  }

  // animate colorado population density map
  changeMapImage = () => {
    const mapListLength = 4
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
    console.log('value being searched ', value)
    const data = await fetch(`${API}/twitter/related?term=${value}`)
    const jsonData = await data.json()
    console.log('jsonData ', jsonData);
    this.setState({searchResults: jsonData, lastSearch: value})

  }


  render() {
    return (
      <div className="container-fluid">
        <Header
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          // loggedIn={this.state.loggedIn}
        />
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
              lastSearch={this.state.searchResults}
              pullRecent={ this.pullRecent }
              recentTerm={ this.state.recentTerm }
            /> :
            <LandingPage />
        }
        {/* <Dashboard
          dataDisplay={this.state.dataDisplay}
          trends={this.state.trends}
          updateDataDisplay={this.updateDataDisplay}
          mapImageIndex={this.state.mapImageIndex}
          submitSearch={this.submitSearch}
          searchTerms={this.state.terms}
          saveSearch={this.saveSearch}
          searchResults={this.state.searchResults}
          lastSearch={this.state.lastSearch}
          pullRecent={ this.pullRecent }
          recentTerm={ this.state.recentTerm }
        />
        */}
        <Footer />
      </div>
    );
  }
}

export default App;
