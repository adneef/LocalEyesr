import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import d3 from "d3";
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

  /* pulls our current user and their saved searches from db -
  currently hard-coded, just needs a return from our backend
  that says what user is signed in.*/
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

    const res = await fetch(`${API}/users/1`)
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
    console.log(json)
    this.setState({
      terms: [
        ...this.state.terms,
        json
      ]
    })
  }

  // stop animating population map
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleLogin = async () => {
    console.log('handling login, this is the route:', API);
    return await fetch(`${API}/auth/google`)
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


  // render piechart
  renderPieChart = () => {
    var dataset = [
      { label: 'Abulia', count: 10 },
      { label: 'Betelgeuse', count: 20 },
      { label: 'Cantaloupe', count: 30 },
      { label: 'Dijkstra', count: 40 }
    ];

    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemeCategory20b);
    var color = d3.scaleOrdinal()
      .range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);

    var svg = d3.select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    var pie = d3.pie()
      .value(function(d) { return d.count; })
      .sort(null);

    var path = svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d, i) {
        return color(d.data.label);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedIn={this.state.loggedIn}/>
        {/* {
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
            /> :
            <LandingPage />
        } */}
        <Dashboard
          dataDisplay={this.state.dataDisplay}
          trends={this.state.trends}
          updateDataDisplay={this.updateDataDisplay}
          mapImageIndex={this.state.mapImageIndex}
          submitSearch={this.submitSearch}
          searchTerms={this.state.terms}
          saveSearch={this.saveSearch}
          searchResults={this.state.searchResults}
          lastSearch={this.state.lastSearch}
          renderPieChart={this.state.renderPieChart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
