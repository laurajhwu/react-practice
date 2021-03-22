import React from 'react';
import './App.css';
import Header from './Header'
import MainContent from './MainContent'

class App extends React.Component {

  state = {
    newMessage: '',
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
  lastId = 0;
  getNewId = () => {
    const id = this.lastId;
    this.lastId++;
    return id;
  }

  assignId = (arr) => arr.map(item => {
    const id = this.getNewId();
    return ({ ...item, id });
  })

  //change the 'Welcome to NightGram!' to 'Have a Good Time!' when clicked
  changeMessage = () => this.setState({ newMessage: "Have a Good Time!" });

  render() {

    return (
      <div className="App" >

        <Header
          navigation={this.state.navigation} />

        <MainContent
          assignId={this.assignId}
          changeMessage={this.changeMessage}
          newMessage={this.state.newMessage} />


      </div>
    );
  }
}

export default App;
