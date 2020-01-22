import React from 'react';
import './App.css';
import './florin.jpg';

export default class extends React.Component {
  render() {
    return (
      <div className="App">
    <header>
      <h1>Florin Dumitru</h1>
      </header>
    <body>
      <nav>
        <ul className='nav'>
          <li><a href='home'>Home</a></li>
          <li><a href='about-me'>About me</a></li>
          <li><a href='projects'>Projects</a></li>
          <li><a href='contact-me'>Contact me</a></li>
        </ul>
      </nav>
      <main>
        <article>
          <h1>Welcome to my portfolio</h1>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </article>
      <footer>Done by Florin</footer>
      </main>
    </body>
      </div>
    );
  }
}