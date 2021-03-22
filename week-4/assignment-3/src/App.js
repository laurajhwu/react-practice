import React from 'react';
import './App.css';
import Header from './Header'
import MainContent from './MainContent'

class App extends React.Component {

  state = {
    navigation: [
      {
        title: "Home",
        link: "#"
      },
      {
        title: "About",
        link: "#"
      },
      {
        title: "Getting Started",
        link: "#"
      },
      {
        title: "Contact",
        link: "#"
      }
    ]
  }

  //A method that takes an array of objects and assigns each item a unique ID
  assignId = (arr, multiple) => {
    let id = 0;
    return (
      arr.map(item => {
        //for every item the id will increase by 1 times the increase multiple
        id = (id + 1) * multiple
        return ({
          ...item,
          id
        })
      })
    )
  }

  render() {

    return (
      <div className="App" >

        <Header
          navigation={this.assignId(this.state.navigation, 1)} />

      </div>
    );
  }
}

export default App;
