import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

  render(){
    return (
      <div className="App">
        <div className="custom-top">
          <div><img width="200" src={logo} className="App-logo" alt="logo" /></div>
          <div className="top-text">Chao Mung Den Voi Khoa Hoc ReactJs</div>
        </div>
        <div className="custom-bottom">De bat dau hoc vui long truy cap <code>src/App.js</code> de chinh sua</div>
      </div>
      
    );
  }
}

export default App;
