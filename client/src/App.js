import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
const API = `${process.env.REACT_APP_API_URL}`


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { dataDisplay: 1, mapImageIndex: 0 }
  }

  async componentDidMount() {
    const res = await fetch(API)
    // console.log('res.body.id ', res.body.id)
    if(res) {
        this.setState({
          loggedIn: true
        })
        setInterval(this.changeMapImage, 1000)
      }
      console.log(this.state)
  }

  // stop animating population map
  componentWillUnmount(){
    clearInterval(this.intervalId);
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

  // get top trending Tweets
  topTrendingTweets = () => {
    var data = [ 363898, 321223, 262968, 132909, 42576, 20296, 14187, 10164 ]
    console.log(data);
  }



  render() {
    return (
      <div className="container-fluid">
        <Header />
        {
          this.state.loggedIn ?
            <Dashboard
              dataDisplay={this.state.dataDisplay}
              updateDataDisplay={this.updateDataDisplay}
              mapImageIndex={this.state.mapImageIndex}
              topTrendingTweets={this.state.topTrendingTweets}
            /> :
            <LandingPage />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
