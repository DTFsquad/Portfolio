import React from 'react';
import './App.css';
import { Florin } from './Florin/Florin';
import Navigation from './Navigation/Navigation';


export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Florin />
      </div>
    );
  }
}