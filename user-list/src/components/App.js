import React, { Component } from 'react';
// import data from '../service/data'
import VisibleUserList from '../containers/VisibleUserList'
import './App.css';

class App extends Component {

//   async componentDidMount() {
//     try {
//         data();
//         console.log(data())
//     }
//     catch (e) {
//     }
// }

  render() {
    return (
      <div>
        <VisibleUserList/>
      </div>
    );
  }
}

export default App;
