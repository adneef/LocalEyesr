import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
// import LandingPage from './components/LandingPage'
import Footer from './components/Footer'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { dataDisplay: 1 }
  }

  updateDataDisplay = (num) => {
    console.log('number from app js: ', num);
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;
