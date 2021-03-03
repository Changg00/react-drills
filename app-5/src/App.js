import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i.kym-cdn.com/entries/icons/original/000/022/713/MonkaSSS.jpg"}/>
      </div>
    );
  }
}
export default App;