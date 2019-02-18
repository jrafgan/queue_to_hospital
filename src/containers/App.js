import React, { Component } from 'react';
import './App.css';
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

class App extends Component {
componentDidUpdate() {
    console.log('Did mount working')
}

    render() {

    return (
      <div className="App">
        <Header />
        <Body />
        <Footer/>
      </div>
    );
  }
}

export default App;
