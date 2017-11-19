import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { dataDisplay: 1, mapImageIndex: 0 }
  }

  componentDidMount() {
    setInterval(this.changeMapImage, 1000)
  }

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

  // allow drop down on dashboard to display selected data
  updateDataDisplay = (num) => {
    this.setState({ dataDisplay: num })
  }


  render() {
    return (
      <div className="container-fluid">
        <Header />
        {/* if or statement to check it login in state is true */}
        {/* <LandingPage /> */}
        {/* OR */}
        <Dashboard
          dataDisplay={this.state.dataDisplay}
          updateDataDisplay={this.updateDataDisplay}
          mapImageIndex={this.state.mapImageIndex}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
