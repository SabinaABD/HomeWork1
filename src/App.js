import logo from './logo.svg';
import './App.css';
import React from "react";
import Main from "./components/Main";


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className='app'>
            <Main />
        </div>
    )
  }
}


export default App;
