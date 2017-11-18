import React, { Component } from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {/* if or statement to check it login in state is true */}
        {/* <LandingPage /> */}
        {/* OR */}
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;
