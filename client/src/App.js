import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
const API = `${process.env.REACT_APP_API_URL}`


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { dataDisplay: 1 }
  }

  updateDataDisplay = (num) => {
    this.setState({ dataDisplay: num })
  }

  async componentDidMount() {
    const res = await fetch(API)
    // console.log('res.body.id ', res.body.id)
    if(res) {
        this.setState({
          loggedIn: true
        })
      }
      console.log(this.state)
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />

        {this.state.loggedIn ?
        <Dashboard
          dataDisplay={this.state.dataDisplay}
          updateDataDisplay={this.updateDataDisplay}
        /> :
        <LandingPage />}
        <Footer />
      </div>
    );
  }
}

export default App;
